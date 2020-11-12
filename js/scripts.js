var elForm = document.querySelector('.form');
var elInput = elForm.querySelector('.form-control');
var effort = 1;
var passKey = 123;
var entered = false;

elForm.addEventListener('submit', function(evt) {
	evt.preventDefault();
	if(entered) {
		alert('Siz tizimdasiz )');
		return;
	}
	if(effort < 5) {
		var getPass = parseInt(elInput.value.trim(), 10);

		if(getPass === passKey) {
			document.body.classList.add('bg-success');
			alert('Xush kelibsiz!');
			entered = true;
		} else {
			alert('Parol xato terildi!');
		}
	} else {
		document.body.classList.add('bg-danger');
		alert('Alert, profil egasiga xabar ketdi. Tamomsiz :P');
	}

	effort++
});
