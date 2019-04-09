/**
* Listen for clicks on the buttons, and send the appropriate message to
* the content script in the page.
*/


function listenForClicks() {

	
	document.addEventListener("click", (e) => {

		

	function bgcomand(tabs) {
	//	alert('go')
		browser.tabs.sendMessage(tabs[0].id, 
		{command: "go",
		Users:document.querySelector('input').value	
	
	});
	}
	
	
	function reset(tabs) {
		//alert('res')
		browser.tabs.sendMessage(tabs[0].id, {
			command: "reset"});
	}
	
	/**
	* Just log the error to the console.
	*/
	function reportError(error) {
	console.error(`Помилка функції: ${error}`);
	}
	
	/**
	* Перевіряєм клас кнопки і залежно від цього шлемо проміс 
	
	*/
	
	
	
	if (e.target.classList.contains("start")) {
	browser.tabs.query({active: true, currentWindow: true})
	.then(bgcomand)
	.catch(reportError);
	}
	else if (e.target.classList.contains("reset")) {
	browser.tabs.query({active: true, currentWindow: true})
	.then(reset)
	.catch(reportError);
	}
	});
	}
	
	
	function reportExecuteScriptError(error) {
	// document.querySelector("#popup-content").classList.add("hidden");
	// document.querySelector("#user_mesage").classList.add("hidden");
	// document.querySelector("#error-content").classList.remove("hidden");
	console.error(`Помилка загрузки скрипта: ${error.message}`);
	}
	
	/**
	* Вбудована функція яка передає проміс контент скрипту(як параметр адреса самого скрипта)
	*/
	browser.tabs.executeScript({file: "/cont/sorter_bg.js"})
	.then(listenForClicks)
	.catch(reportExecuteScriptError);