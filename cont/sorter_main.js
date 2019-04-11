let engine = localStorage.getItem('Sortstart');

if (engine === "yes") {
	console.log("I can start");

	function insertContent(userL,counter,goodUsers,badUsers) {
		let status = document.getElementById("like_helper");
	
		if (status == null) {
			let div = document.createElement('div');
			div.setAttribute("id", "sorter_info");
			div.innerHTML = `
			<!--div id="close">X</div-->
	<h1>Insta Sortet</h1>
	<span id="sorter_count"> Загальна кількість ${userL}</span>
	<div id="sorter_progres">Пройдено акаунтів: <span class="marker"> ${counter}</span> </div>
	<div id="goodUsers">Поточний користувач: <span class="marker">${goodUsers}</span></div>
	<div id="badUsers">Поточний користувач: <span class="marker">${badUsers}</span></div>
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
				   
				   break;
			   case 37:   // если нажата клавиша вліво
				  
				   break;
			   case 39:   // если нажата клавиша вправо
				 
				   break;
			   case 40:   // если нажата клавиша вниз
				   
				   break;
		   }
	   }
		
	   addEventListener("keydown", moveRect);

	
}else{
	console.log("must WAIT")
}




