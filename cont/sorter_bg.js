(function() {

	console.log("ALL its OK")



	browser.runtime.onMessage.addListener((message) => {
	  if (message.command === "go") {
		   console.log("LEt`S GO")	

	  } else if (message.command === "reset") {

console.log("Хард ресет ")
		
		
	  }else{
		  console.log('Som hae wrong')
	  }
	});





	
  
  })();
