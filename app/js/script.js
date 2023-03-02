const carsImg = document.querySelectorAll('.cars');
const form = document.querySelector('.main_form');
const mainArea = document.querySelector('.main');
const carName = document.querySelectorAll('.car_name');
const selectedCar = document.querySelector('.selected_car');
const priceArea = document.querySelector('.price p');
const carPrice = document.querySelectorAll('.car_price');
const returnBtn = document.querySelector('.return');
const date = document.querySelector('.date');
const wheelsBtn = document.querySelector('.wheelsBtn');
const guaranteeBtn = document.querySelector('.guaranteeBtn');
const nameInput = document.querySelector('.nameInput');
const placeInput = document.querySelector('.placeInput');
const personalInformation = document.querySelector('.personal_information');
const createErrorP1 = document.createElement('p');
const letters = /[a-z]/i;
const numbers = /[0-9]/i;
const specials = /[!@#$%^&*()]/i;

let wheelsBtnValue = 0;
let guaranteeBtnValue = 0;

const main = () => {
	prepareDOMEvents();
	informationError();
};

const prepareDOMEvents = () => {
	returnBtn.addEventListener('click', closeForm);
	wheelsBtn.addEventListener('click', addWheelsPrice);
	guaranteeBtn.addEventListener('click', addGuaranteePrice);
	nameInput.addEventListener('keyup', informationError);
};

//After click cars img form should appear with name of chosen car and price
const clickCarsImg = (e) => {
	form.classList.add('active');
	setTimeout(() => {
		mainArea.classList.replace('main', 'zero');
	}, 1000);
	if (e.target === carsImg[0]) {
		selectedCar.textContent += ' ' + carName[0].textContent;
		priceArea.textContent = carPrice[0].textContent;
	} else if (e.target === carsImg[1]) {
		selectedCar.textContent += ' ' + carName[1].textContent;
		priceArea.textContent = carPrice[1].textContent;
	} else if (e.target === carsImg[2]) {
		selectedCar.textContent += ' ' + carName[2].textContent;
		priceArea.textContent = carPrice[2].textContent;
	} else if (e.target === carsImg[3]) {
		selectedCar.textContent += ' ' + carName[3].textContent;
		priceArea.textContent = carPrice[3].textContent;
	} else if (e.target === carsImg[4]) {
		selectedCar.textContent += ' ' + carName[4].textContent;
		priceArea.textContent = carPrice[4].textContent;
	} else if (e.target === carsImg[5]) {
		selectedCar.textContent += ' ' + carName[5].textContent;
		priceArea.textContent = carPrice[5].textContent;
	}
};

//Date when car can be taken(2 weeks after)
const now = new Date();
const future_date = new Date();

future_date.setDate(now.getDate() + 14);
let html_date = future_date.toLocaleDateString();

date.textContent = html_date;

//Close form
const closeForm = () => {
	mainArea.classList.replace('zero', 'main');
	form.classList.remove('active');
	setTimeout(() => {
		selectedCar.textContent = 'Wybrałeś ';
		guaranteeBtn.classList.remove('colorBtn');
		wheelsBtn.classList.remove('colorBtn');
		wheelsBtnValue = 0;
		guaranteeBtnValue = 0;
	}, 1000);
};

//Accessories - wheels button
const addWheelsPrice = () => {
	if (wheelsBtnValue === 0) {
		wheelsBtn.classList.add('colorBtn');
		const newPrice = priceArea.textContent;
		let wheelsPrice = Number(newPrice) + 2000;
		priceArea.textContent = wheelsPrice;
		wheelsBtnValue = 1;
	} else if (wheelsBtnValue === 1) {
		wheelsBtn.classList.remove('colorBtn');
		const newPrice = priceArea.textContent;
		let wheelsPrice = Number(newPrice) - 2000;
		priceArea.textContent = wheelsPrice;
		wheelsBtnValue = 0;
	}
};

//Accessories - guarantee button

const addGuaranteePrice = () => {
	if (guaranteeBtnValue === 0) {
		guaranteeBtn.classList.add('colorBtn');
		const newPrice = priceArea.textContent;
		let wheelsPrice = Number(newPrice) + 5000;
		priceArea.textContent = wheelsPrice;
		guaranteeBtnValue = 1;
	} else if (guaranteeBtnValue === 1) {
		guaranteeBtn.classList.remove('colorBtn');
		const newPrice = priceArea.textContent;
		let wheelsPrice = Number(newPrice) - 5000;
		priceArea.textContent = wheelsPrice;
		guaranteeBtnValue = 0;
	}
};

//Information while value doesn't exist - prepare

const informationError = () => {
	if (nameInput.value === '' && placeInput.value === '') {
		createErrorP1.textContent = '';
		personalInformation.append(createErrorP1);
	} else if (placeInput.value === '' && nameInput.value !== '') {
		createErrorP1.textContent = 'Musisz podać miejsce odbioru';
		personalInformation.append(createErrorP1);
	} else if (nameInput.value === '' && placeInput.value !== '') {
		createErrorP1.textContent = 'Musisz podać imię i nazwisko';
		personalInformation.append(createErrorP1);
	}
};

carsImg.forEach((item) => {
	item.addEventListener('click', clickCarsImg);
});

document.addEventListener('DOMContentLoaded', main);
