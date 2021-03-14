let element = document.querySelectorAll('.question__title');
element.forEach((element) => {
	element.addEventListener('click', (e) => {
		let question = e.currentTarget.parentElement;
		question.classList.toggle('show__text');
	});
});
