const car1 = document.querySelector('.car1');
const car2 = document.querySelector('.car2');
const car3 = document.querySelector('.car3');
const form = document.querySelector('.main_form');
const main = document.querySelector('.main');
const btn_return = document.querySelector('.return');

const main_form = () => {
	main.style.display = 'none';
	form.style.left = '0';
};

const form_btn_return = () => {
	main.style.display = 'block';
	form.style.left = '-100%';
};

car1.addEventListener('click', main_form);
car2.addEventListener('click', main_form);
car3.addEventListener('click', main_form);
btn_return.addEventListener('click', form_btn_return);
