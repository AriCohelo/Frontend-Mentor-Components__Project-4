import './style.scss';
const accordionButtons = document.querySelectorAll('.accordion__button');

accordionButtons.forEach((accordionButton) => {
	const accordionContent = accordionButton.nextElementSibling;
	const accordionButtonplus = accordionButton.querySelector(
		'.accordion__button-plus'
	);
	const accordionButtonminus = accordionButton.querySelector(
		'.accordion__button-minus'
	);

	accordionButton.addEventListener('click', function () {
		accordionContent.classList.toggle('accordion__content--active');
		accordionButtonplus.classList.toggle('accordion__button-plus--active');
		accordionButtonminus.classList.toggle('accordion__button-minus--active');
	});
});
