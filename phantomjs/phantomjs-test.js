var casper = require('casper').create({
	verbose: true,
	logLevel: "debug"
});

var outputPath = ".";
casper.options.waitTimeout = 10000;
'use strict';
casper.userAgent('Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36');

// http://10.99.168.60:10080/wls-web/assets/view/login.html
casper.start('http://10.99.168.60:10080/wls-web/#/login');

casper.waitForUrl(/login/, function() {
	console.log('##### TESTE #####');
	
});

casper.waitForSelector('form[name="frmLogin"] input[name="username"]', function() {
    this.fillSelectors("form[name=frmLogin]", {
        'input[name="username"]':    'test@gmail.com',
        'input[name="password"]':    'test123'
    }, false);
});

casper.then(function () {
	// get class with .
	console.log('### CLASS container -> ', this.exists('.container'));
	// get id with #
	console.log('### ID containerBody -> ', this.exists('#containerBody'));
	//console.log(document.getElementById('submit').toString());
	
	//this.waitUntilVisible('#submit', function() {
	//	this.click('#submit');		
	//});
	console.log('### CLASS container -> ', this.exists('.login-container'));
	
	this.waitUntilVisible('.login-container', function() {
		var categories = [];
		casper.each(this.getElementsInfo('a.label'), function(casper, element, j) {
			var category = element["text"];
			categories.push(category);
			console.log('## CATEGORY -> ', category);
		});
	});
		
});

casper.run(function() {
    this.echo(this.getHTML());
    this.echo('message sent').exit();
});