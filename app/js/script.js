const carsImg = document.querySelectorAll('.cars');
const form = document.querySelector('.main_form');
const mainArea = document.querySelector('.main');
const carName = document.querySelectorAll('.car_name');
const selectedCar = document.querySelector('.selected_car');
const priceArea = document.querySelector('.price p');
const carPrice = document.querySelectorAll('.car_price');
const returnBtn = document.querySelector('.return');

const main = () => {
	prepareDOMEvents();
};

const prepareDOMEvents = () => {
	returnBtn.addEventListener('click', closeForm);
};

const clickCarsImg = (e) => {
	form.classList.add('active');
	setTimeout(() => {
		mainArea.classList.replace('main', 'zero');
	}, 100);
	if (e.target === carsImg[0]) {
		selectedCar.textContent += ' ' + carName[0].textContent;
		priceArea.textContent = carPrice[0].textContent + ' PLN';
	} else if (e.target === carsImg[1]) {
		selectedCar.textContent += ' ' + carName[1].textContent;
		priceArea.textContent = carPrice[1].textContent + ' PLN';
	} else if (e.target === carsImg[2]) {
		selectedCar.textContent += ' ' + carName[2].textContent;
		priceArea.textContent = carPrice[2].textContent + ' PLN';
	} else if (e.target === carsImg[3]) {
		selectedCar.textContent += ' ' + carName[3].textContent;
		priceArea.textContent = carPrice[3].textContent + ' PLN';
	} else if (e.target === carsImg[4]) {
		selectedCar.textContent += ' ' + carName[4].textContent;
		priceArea.textContent = carPrice[4].textContent + ' PLN';
	} else if (e.target === carsImg[5]) {
		selectedCar.textContent += ' ' + carName[5].textContent;
		priceArea.textContent = carPrice[5].textContent + ' PLN';
	}
};

const closeForm = () => {
	mainArea.classList.replace('zero', 'main');
	//przeskakuje na ustawienia główne nie z media
	form.classList.remove('active');
	setTimeout(() => {
		selectedCar.textContent = 'Wybrałeś ';
	}, 1000);
};

carsImg.forEach((item) => {
	item.addEventListener('click', clickCarsImg);
});

document.addEventListener('DOMContentLoaded', main);
