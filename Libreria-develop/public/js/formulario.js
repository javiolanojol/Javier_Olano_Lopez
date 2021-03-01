if(document.querySelector('.libroForm') || document.querySelector('.discoForm')){

	document.querySelector('.tab').classList.add('hidden');
	document.querySelectorAll('.newform').classList.add('hidden');
	
}



function openForm(evt, tabName) {
	
	var i, tabcontent, tablinks;
  
	
	tabcontent = document.querySelectorAll(".tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	tablinks = document.querySelectorAll(".tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  
	document.getElementById(tabName).style.display = "grid";
	evt.currentTarget.className += " active";
}
document.querySelector("#defaultOpen").click();
