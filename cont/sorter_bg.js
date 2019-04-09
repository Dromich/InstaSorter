(function() {

	function parseLisr(string) {//розбиваєм триману строку в масив
		let arr = string.split(',' );
		localStorage.setItem('Sousers',JSON.stringify(arr));
		
	};

	function initStart() {
		var users = JSON.parse(localStorage.getItem('Sousers')); 
		
		var start = localStorage.setItem('Sortstart', 'yes');
		var Length = localStorage.setItem('SortusLe', users.length);
		console.log(users);	
		}

		function GetUsers(index) {
			var users = JSON.parse(localStorage.getItem('users')); 
			return(users[index]);	
		};// функція яка повертає нікнейм з масиву


		function goUrl(userUrl) {
			let url = userUrl;
		
			if (url==="undefined" || url==undefined ) {
				alert("всі акаунти пройдено");
					
				window.location.href = 'https://www.instagram.com/';
		
			}else{
				window.location.href = 'https://www.instagram.com/'+ userUrl+'/';
			}
			
		}
		// переходимо на заданий акаунт


	browser.runtime.onMessage.addListener((message) => {
	  if (message.command === "go") {
		   console.log("LEt`S GO")
		   
		   parseLisr(message.Users);

	  } else if (message.command === "reset") {

console.log("Хард ресет ")
		
		
	  }else{
		  console.log('Som hae wrong')
	  }
	});





	
  
  })();
