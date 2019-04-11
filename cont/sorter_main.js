console.log('sorter Main Here');

let engine = localStorage.getItem('Sortstart');

if (engine === "yes") {
console.log("I can start");

	let cuser = Number(localStorage.getItem('cuser')) ;//поточний користувач



	function PushStorage(object,item) {
		let getobj = JSON.parse(localStorage.getItem(object)); 
		getobj.push(item);
		localStorage.setItem(object,JSON.stringify(getobj));	
	}//функція пушить необхідний айтем в локалсторадж

	
	function GetUsers(index) {
		var users = JSON.parse(localStorage.getItem('Sousers')); 
		return(users[index]);	
	};// функція яка повертає нікнейм з масиву

	function GetUsersLength(base) {
		var users = JSON.parse(localStorage.getItem(base)); 
		return(users.length);	
	};// функція яка повертає довжину масиву

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


	
	function GoNext(target) {
		if (cuser = localStorage.getItem('SortusLe')) {
			alert("Всіх пройдено цей завершальний")
			
		}else{
			PushStorage(target,GetUsers(cuser))// додаєм поточного користувача до хороших чи поганих
			let next = cuser +1 ;
			localStorage.setItem('cuser',next);//задаєм в локал наступного користувача
			setTimeout(() => {
			 goUrl(GetUsers(next))
			}, 800);
		}
		
	}//функція що виконує головну роботу (розкидає користувачів і рухає все вперед)

	function insertContent(userL,counter,goodUsers,badUsers) {
		let status = document.getElementById("sorter_info");
	
		if (status == null) {
			let div = document.createElement('div');
			div.setAttribute("id", "sorter_info");
			div.innerHTML = `
			<!--div id="close">X</div-->
	<h1>Insta Sortet</h1>
	<span id="sorter_count"> Загальна кількість <i> ${userL}</i></span>
	<div id="sorter_progres">Пройдено акаунтів: <span class="marker"> ${counter}</span> </div>
	<div id="goodUsers">Хороших акаунтів: <span class="marker">${goodUsers}</span></div>
	<div id="badUsers">Поганих акаунтів : <span class="marker">${badUsers}</span></div>
	`;
			document.body.insertBefore(div, document.body.firstChild);
			
	
		} else {
			console.log("Screen On")
		};
		
	
	};

	function moveRect(e){
     
		console.log(e.keyCode)
			
		   switch(e.keyCode){
				
			   case 32:  // пробіл
			   GoNext('goodUsers')
			   
				   break;
			   case 37:   // если нажата клавиша вліво
			   GoNext('badUsers')
				   break;
			   case 39:   // если нажата клавиша вправо
			   GoNext('badUsers')
				   break;
			   case 40:   // если нажата клавиша вниз
			   GoNext('badUsers')
				   break;
		   }
	   }
		
	   addEventListener("keydown", moveRect);

	   insertContent(localStorage.getItem('SortusLe'),cuser,GetUsersLength('goodUsers'),GetUsersLength('badUsers'))//виводимо інформер

	
}else{
	console.log("im wait")
}




