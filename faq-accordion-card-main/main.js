let element = document.querySelectorAll('li');
element.forEach(function (element) {
	element.addEventListener('click', function (e) {
		let question = e.currentTarget.parentElement;
		question.classList.toggle('show-text');
	});
});
