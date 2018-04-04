/*
casper.test.begin('The heading exists', 1, function suite(test) {
    casper.start('http://10.99.168.60:10080/wls-web/#/login', function() {
				var x = require('casper').selectXPath;
        //test.assertExists('h1.page-title');
				
				var mySelector  = x('//button[@id=\'submit\']');
				if (this.exists(mySelector)) {
					this.click(mySelector);
					this.echo('Clicou no submit');
				} else {
					this.echo('Nao foi possivel clicar no submit');
				}

				
						
    }).run(function() {
        test.done();
    });
});

*/

var casper = require('casper').create({
	verbose: true,
	logLevel: "debug"
})
.start('http://10.99.168.60:10080/wls-web/#/login', function(){
	this.echo(this.getTitle());
		if (this.exists('loading')) {
        this.echo('# loading');
    }
})
.waitFor(function check() {
    return this.evaluate(function() {
        return document.querySelectorAll('div.panel-body form').length > 2;
    });
}, function then() {
    this.captureSelector('yoursitelist.png', 'div.panel-body');
})
.run();