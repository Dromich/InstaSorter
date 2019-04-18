let engine = localStorage.getItem('Sortstart');


if (engine === "yes") {

	let butns = document.createElement('div');
	let up = browser.extension.getURL("res/like.png");
	let down = browser.extension.getURL("res/dislike.png");
	butns.setAttribute("id", "sorter_buttons");
	butns.innerHTML = `

<span id="goodBoy"><img src="${up}" alt="up"></span>

<span id="badBoy"><img src="${down}" alt="down"></span>


`;
	document.body.insertBefore(butns, document.body.firstChild);


	let cuser = Number(localStorage.getItem('cuser'));//поточний користувач
	let private = document.getElementsByClassName("VIsJD");//якщо акаунт приватний то цей елемент є
	let no_page = document.getElementsByClassName("error-container");//якщо сторінку не знайдено то цей елемент є  
	let zeroAkk = document.getElementsByClassName("uL8Hv");//якщо акаунт пустий то цей елемент є


	function PushStorage(object, item) {
		let getobj = JSON.parse(localStorage.getItem(object));
		getobj.push(item);
		localStorage.setItem(object, JSON.stringify(getobj));
	}//функція пушить необхідний айтем в локалсторадж


	function GetUsers(index) {
		var users = JSON.parse(localStorage.getItem('Sousers'));
		return (users[index]);
	};// функція яка повертає нікнейм з масиву

	function GetUsersLength(base) {
		var users = JSON.parse(localStorage.getItem(base));
		return (users.length);
	};// функція яка повертає довжину масиву

	function goUrl(userUrl) {
		let url = userUrl;

		if (url === "undefined" || url == undefined) {
			alert("всі акаунти пройдено");

			localStorage.setItem('CopyBtns', 'on');//задаєм сторадж змінну що показує кнопки

			//тут треба запхати сторадж змінну що буде  викликати функцію що виводить кнопки скопювати в буфер погані \ хороші

			window.location.href = 'https://www.instagram.com/';

		} else {
			console.log('поїхали')
			window.location.href = 'https://www.instagram.com/' + userUrl + '/';
		}

	}
	// переходимо на заданий акаунт



	function GoNext(target) {
		PushStorage(target, GetUsers(cuser))// додаєм поточного користувача до хороших чи поганих
		let next = cuser + 1;
		localStorage.setItem('cuser', next);//задаєм в локал наступного користувача
		setTimeout(() => {
			goUrl(GetUsers(next))
		}, 500);

	}//функція що виконує головну роботу (розкидає користувачів і рухає все вперед)

	function GetUserList(target) {
		let targetArr = JSON.parse(localStorage.getItem(target));
		let resultSTR = targetArr.join();
		navigator.clipboard.writeText(resultSTR).then(function () {
			alert('Список скопійовано в буфер обміну вставте куди потрібно Ctrl + V')
			console.log('вдало скопійовано')
		}, function () {
			console.log('скопіювати не вдалось')
		});

	}// функція яка копіює в буфер необхідний масив (у вигляді строки через кому)


	function insertContent(userL, counter, goodUsers, badUsers) {
		let status = document.getElementById("sorter_info");

		if (status == null) {
			let div = document.createElement('div');
			div.setAttribute("id", "sorter_info");
			div.innerHTML = `
		<!--div id="close">X</div-->
<h1>Insta Sortet</h1>
<div id="sorter_informers">
<span id="sorter_count"> Загальна кількість <i> ${userL}</i></span>
<div id="sorter_progres">Пройдено акаунтів: <span class="marker"> ${counter}</span> </div>
<div id="goodUsers">Хороших акаунтів: <span class="marker">${goodUsers}</span></div>
<div id="badUsers">Поганих акаунтів : <span class="marker">${badUsers}</span></div>
</div>
<div id="copy_btns">
<span>Копіювати</span>

<div id="copy_btn_1">хороших</div>
<div id="copy_btn_2"> поганих</div>
</div>
`;
			document.body.insertBefore(div, document.body.firstChild);

			if (localStorage.getItem('CopyBtns') === 'on') {

				document.getElementById('copy_btns').style.display = 'block';
			}


		} else {
			console.log("Screen On")
		};


	};

	function moveRect(e) {

		console.log(e.keyCode)

		switch (e.keyCode) {

			case 16:  //  Shift
				GoNext('goodUsers')

				break;
			case 37:   // если нажата клавиша вліво
				GoNext('badUsers')
				break;
			case 39:   // если нажата клавиша вправо
				GoNext('goodUsers')
				//GoNext('badUsers')
				break;
			case 40:   // если нажата клавиша вниз
				// GoNext('badUsers')
				break;
		}
	}





	/////////////////////////////////////////////////

	if (private.length > 0 || no_page.length == 1 || zeroAkk.length == 1) {
		console.log('BADDDD');




		insertContent(localStorage.getItem('SortusLe'), cuser, GetUsersLength('goodUsers'), GetUsersLength('badUsers'))//виводимо інформер



		GoNext('badUsers');//Додаєм поточного до поганих




	} else {

		window.addEventListener("keydown", moveRect);






		insertContent(localStorage.getItem('SortusLe'), cuser, GetUsersLength('goodUsers'), GetUsersLength('badUsers'))//виводимо інформер



		document.getElementById('copy_btn_1').addEventListener('click', function (event) {

			GetUserList('goodUsers');

		});
		document.getElementById('copy_btn_2').addEventListener('click', function (event) {

			GetUserList('badUsers');

		});
	}



} else {
	console.log("im wait")
}




