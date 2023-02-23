const form = document.querySelector('.main_form');
const main_ = document.querySelector('main');
const btn_return = document.querySelector('.return');
const car_name = document.querySelector('.car_name');
const final_price = document.querySelector('.price p');
const date = document.querySelector('.date');

const audi = {
	//car img
	car1: document.querySelector('.car1'),
	//car name
	car_name1: document.querySelector('.car_name1'),
	//car price
	car1_price: document.querySelector('.car1_price'),
};

const bmw = {
	//car img
	car2: document.querySelector('.car2'),
	//car name
	car_name2: document.querySelector('.car_name2'),
	//car price
	car2_price: document.querySelector('.car2_price'),
};

const renault = {
	//car img
	car3: document.querySelector('.car3'),
	//car name
	car_name3: document.querySelector('.car_name3'),
	//car price
	car3_price: document.querySelector('.car3_price'),
};

const main = () => {
	prepareDOMEvents();
};

const prepareDOMEvents = () => {
	audi.car1.addEventListener('click', main_form);
	audi.car1.addEventListener('click', car1_data);
	bmw.car2.addEventListener('click', main_form);
	bmw.car2.addEventListener('click', car2_data);
	renault.car3.addEventListener('click', main_form);
	renault.car3.addEventListener('click', car3_data);
	btn_return.addEventListener('click', form_btn_return);
};

const car1_data = () => {
	car_name.textContent = 'Wybrałeś';
	car_name.textContent += ' ' + audi.car_name1.textContent;

	final_price.textContent = audi.car1_price.textContent + ' PLN';
};

const car2_data = () => {
	car_name.textContent = 'Wybrałeś';
	car_name.textContent += ' ' + bmw.car_name2.textContent;

	final_price.textContent = bmw.car2_price.textContent + ' PLN';
};

const car3_data = () => {
	car_name.textContent = 'Wybrałeś';
	car_name.textContent += ' ' + renault.car_name3.textContent;

	final_price.textContent = renault.car3_price.textContent + ' PLN';
};

const main_form = () => {
	main_.style.display = 'none';
	form.style.left = '0';

	//Date
	const now = new Date();
	const future_date = new Date();

	future_date.setDate(now.getDate() + 14);
	let html_date = future_date.toLocaleDateString();

	date.textContent = html_date;
};

const form_btn_return = () => {
	main_.style.display = 'block';
	form.style.left = '-100%';
};

document.addEventListener('DOMContentLoaded', main);
