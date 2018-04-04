console.log('Testing Promises...');

function getAddress () { 
	console.log('getAddress');
	return new Promise ((resolve, reject)=>{ 
		setTimeout(resolve, 2000); 
	}); 
}

function getUser () { 
	console.log('getUser');
	return new Promise((resolve, reject)=>{ 
		setTimeout(_=>resolve(getAddress()), 1000);
	}); 
}

// nested promises
getUser().then( result=>console.log('Done') ); 

// process all to resolve
Promise.all([
  new Promise((resolve, reject)=>{
    setTimeout(function(){
      resolve('A');
    }, 2000);
  }),
  new Promise((resolve, reject)=>{
    setTimeout(function(){
      resolve('B');
    }, 1000);
  }),
  new Promise((resolve, reject)=>{
    setTimeout(function(){
      resolve('C');
    }, 3000);
  })
]).then(result=>{
  console.info('Promise.all OK. Waited for 3 seconds to process all promises: ', result);
	
}).catch(reason=>{
  console.warn('Promise.race Failed!', reason);
});

// process all to resolve
Promise.race([
  new Promise((resolve, reject)=>{
    setTimeout(function(){
      resolve('A');
    }, 2000);
  }),
  new Promise((resolve, reject)=>{
    setTimeout(function(){
      reject('B');
    }, 1000);
  }),
  new Promise((resolve, reject)=>{
    setTimeout(function(){
      resolve('C');
    }, 3000);
  })
]).then(result=>{
  console.info('Promise.race OK. Waited for 3 seconds to process all promises: ', result);
	
}).catch(reason=>{
  console.warn('Promise.race Failed!', reason);
});