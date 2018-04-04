/*==============================================================================*/
/* Casper generated Tue Mar 27 2018 08:31:37 GMT-0300 (Hora oficial do Brasil) */
/*==============================================================================*/

var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1777, height: 596};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test', function(test) {
	
  casper.start('http://10.99.168.60:10080/wls-web/#/login');
	casper.waitForSelector("form[name=frmLogin] input[name='username']",
		 function success() {
				 test.assertExists("form[name=frmLogin] input[name='username']");
				 this.click("form[name=frmLogin] input[name='username']");
		 },
		 function fail() {
				 test.assertExists("form[name=frmLogin] input[name='username']");
	});
	casper.waitForSelector("input[name='username']",
		 function success() {
				 this.sendKeys("input[name='username']", "tex");
		 },
		 function fail() {
				 test.assertExists("input[name='username']");
	});
	casper.waitForSelector("input[name='password']",
		 function success() {
				 this.sendKeys("input[name='password']", "123");
		 },
		 function fail() {
				 test.assertExists("input[name='password']");
	});
	

   casper.run(function() {test.done();});
});