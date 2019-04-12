(function() {
	

	function Bones() {//функція пустишка яка створює два пусті об'єкти
		let arrch =[] ; 
		
		localStorage.setItem('goodUsers',JSON.stringify(arrch));
		localStorage.setItem('badUsers',JSON.stringify(arrch));
	}

	function parseLisr(string) {//розбиваєм триману строку в масив
		let arr = string.split(',' );
		localStorage.setItem('Sousers',JSON.stringify(arr));
		
		
	};

	function initStart() {
		var users = JSON.parse(localStorage.getItem('Sousers')); 
		
		var start = localStorage.setItem('Sortstart', 'yes');
		var Length = localStorage.setItem('SortusLe', users.length);
		localStorage.setItem('CopyBtns','off');
		//console.log(users);	
		}

		function GetUsers(index) {
			var users = JSON.parse(localStorage.getItem('Sousers')); 
			return(users[index]);	
		};// функція яка повертає нікнейм з масиву


		function goUrl(userUrl) {
			let url = userUrl;
		
			if (url==="undefined" || url==undefined ) {
				alert("всі акаунти пройдено");
					
				window.location.href = 'https://www.instagram.com/';
		
			}else{
				console.log('поїхали')
				window.location.href = 'https://www.instagram.com/'+ userUrl+'/';
			}
			
		}
		// переходимо на заданий акаунт


	browser.runtime.onMessage.addListener((message) => {
	  if (message.command === "go") {
		   console.log("LEt`S GO")		   
		   parseLisr(message.Users);//додаєм в локал базу юзерів
		   initStart();
		   Bones();
		   localStorage.setItem('cuser', '0');//глобальна змінна яка встановлює індекс користувача з масиву

		  let cuser = Number(localStorage.getItem('cuser')) ;
		  console.log(GetUsers(cuser));
		  
		  setTimeout(() => {
			goUrl(GetUsers(cuser));//перехзодимо на першого користувача
		  
		  }, 1000);
		 

		


	  } else if (message.command === "reset") {



localStorage.setItem('Sortstart', 'no');
localStorage.setItem('Sousers', 'off');
localStorage.clear();//очищаєм локальне сховище
		
	  }else{
		  console.log('Som  wrong')
	  }
	});





	
  
  })();
