// TODO: read http://www.crmarsh.com/phantomjs/

var page = require('webpage').create();

page.injectJs('http://localhost:9000/assets/js/deps.min.js');
page.injectJs('http://localhost:9000/assets/js/app.min.js');
page.open('http://localhost:9000/#/login', function(status) {
	waitFor(function() {
		console.log('Page open ', page.libraryPath);
		phantom.exit();
	});
});

page.onResourceReceived = function() {
	console.log('deps loaded');
	page.includeJs('http://localhost:9000/assets/js/deps.min.js');
	//
	console.log('app loaded');
	page.includeJs('http://localhost:9000/assets/js/app.min.js');
};


/*
// not working
page.includeJs('http://localhost:9000/assets/js/deps.min.js', function() {
	console.log('deps loaded');
	page.includeJs('http://localhost:9000/assets/js/app.min.js', function() {
		console.log('app loaded');
		
		console.log('teste1');
				
		page.open('http://localhost:9000/#/login', function(status) {
			console.log('Page open ', page.libraryPath);
			phantom.exit();
		});
		
		console.log('teste2');
		
		if (page.injectJs('http://localhost:9000/assets/js/deps.min.js')) {
			console.log('angular injected');
			var title = page.evaluate(function() {
			// returnTitle is a function loaded from our do.js file - see below
			
				var myApp = angular.module('app');
				return returnTitle();
			});
			console.log(title);
		}
		
	});
});
*/

page.onError = function (msg, trace) {
    console.log(msg);
    trace.forEach(function (item) {
        console.log('  ', item.file, ':', item.line);
    });
};

page.onResourceRequested = function (request) {
	//console.log('Request ' + JSON.stringify(request, undefined, 4));
};

	/*
page.open('http://localhost:9000/#/login', function(status) {
	
	console.log('Page open ', page.libraryPath);
	
	if ( status === "success" ) {
		console.log(page.injectJs("http://localhost:9000/assets/js/deps.min.js") ? "... done injecting deps itself!" : "... fail deps! Check the $PWD?!");
		console.log(page.injectJs("http://localhost:9000/assets/js/app.min.js") ? "... done injecting app itself!" : "... fail app! Check the $PWD?!");
		
		
		page.includeJs('http://localhost:9000/assets/js/app.min.js', function() {
			console.log('#APP ');
			
			var b = wpage.evaluate(function() { 
         return "app loaded"; 
      }); 
      console.log(b);
		}); 
		
		page.includeJs('http://localhost:9000/assets/js/deps.min.js', function() {
			console.log('#DEPS ');
			
			var foo = wpage.evaluate(function() { 
         return "deps loaded"; 
      }); 
      console.log(foo);
			
    });
	}

	if (status !== 'success') {
			console.log('Unable to load the address!');
			phantom.exit(1);
	} else {
			window.setTimeout(function () {
					page.render('login.png');
					phantom.exit();
			}, 2000);
	}
	
	setTimeout(function () {
			console.log('Begin render');
			page.render('login.png');
			phantom.exit();
	},5000)
	
});
	*/