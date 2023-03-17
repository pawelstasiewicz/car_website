const carsImg = document.querySelectorAll('.cars');
const form = document.querySelector('.main_form');
const mainArea = document.querySelector('.main');
const carName = document.querySelectorAll('.car_name');
const selectedCar = document.querySelector('.selected_car');
const priceArea = document.querySelector('.price p');
const carPrice = document.querySelectorAll('.car_price');
const returnBtn = document.querySelector('.return');
const buyBtn = document.querySelector('.buy');
const wheelsBtn = document.querySelector('.wheelsBtn');
const guaranteeBtn = document.querySelector('.guaranteeBtn');
const finishScreen = document.querySelector('.finish_screen');
const lastImg = document.querySelector('.last_img');
const createImg = document.createElement('img');
const finishCarName = document.querySelector('.finish_car_name');
const nameInput = document.querySelector('.nameInput');
const placeInput = document.querySelector('.placeInput');
const warning = document.querySelector('.warning');
const createErrorP1 = document.createElement('p');
const numbers = /[0-9]/i;
const specials = /[!@#$%^&*()]/i;
const date = document.querySelector('.date');
const finalPrice = document.querySelector('.final_price');
const leasingRadio = document.querySelector('#leasing_radio');
const cashRadio = document.querySelector('#cash_radio');
const payForm = document.querySelector('.pay_form');
const brand = document.querySelector('.brand');
const carArea = document.querySelectorAll('.car_area');
let wheelsBtnValue = 0;
let guaranteeBtnValue = 0;

const main = () => {
	prepareDOMEvents();
};

const prepareDOMEvents = () => {
	returnBtn.addEventListener('click', closeForm);
	wheelsBtn.addEventListener('click', addWheelsPrice);
	guaranteeBtn.addEventListener('click', addGuaranteePrice);
	buyBtn.addEventListener('click', buyCar);

	//LocalStorage

	nameInput.addEventListener('keyup', () => {
		window.localStorage.setItem('name', JSON.stringify(nameInput.value));
	});

	placeInput.addEventListener('keyup', () => {
		window.localStorage.setItem('place', JSON.stringify(placeInput.value));
	});

	//brand
	brand.addEventListener('keyup', brandChoice);
};

//After click cars img form should appear with name of chosen car and price

let chosenCar;

const clickArea = (e) => {
	form.classList.add('active');
	setTimeout(() => {
		mainArea.classList.replace('main', 'zero');
	}, 1000);

	const $clickedCarTile = e.currentTarget;

	const chosenCar = $clickedCarTile.querySelector('.car_name').textContent;
	const selectedCarPrice =
		$clickedCarTile.querySelector('.car_price').textContent;
	const selectedCarImg = $clickedCarTile.querySelector('.cars');

	if ($clickedCarTile) {
		selectedCar.textContent += ' ' + chosenCar;
		finishCarName.textContent += chosenCar;
		priceArea.textContent = selectedCarPrice;
		createImg.src = selectedCarImg.src;
		createImg.classList.add('last_img');
		lastImg.appendChild(createImg);
	}
};

//Date when car can be taken

const chosenDate = document.getElementById('date');
const now = new Date();
const futureDate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);

const nowStr = now.toISOString().slice(0, 10);
const futureDateStr = futureDate.toISOString().slice(0, 10);
chosenDate.setAttribute('min', nowStr);
chosenDate.setAttribute('max', futureDateStr);

date.textContent = `Auto zostanie dostarczone: ${now
	.toISOString()
	.slice(0, 10)}`;

chosenDate.addEventListener('change', () => {
	const dateValue = chosenDate.value;

	window.localStorage.setItem('date', JSON.stringify(chosenDate.value));

	date.textContent = `Auto zostanie dostarczone: ${dateValue}`;
});

//Close form
const closeForm = () => {
	mainArea.classList.replace('zero', 'main');
	form.classList.remove('active');
	setTimeout(() => {
		selectedCar.textContent = 'Wybrałeś ';
		guaranteeBtn.classList.remove('colorBtn');
		wheelsBtn.classList.remove('colorBtn');
		finishCarName.textContent = '';
		createErrorP1.textContent = '';
		warning.textContent = '';
		nameInput.value = '';
		placeInput.value = '';
		wheelsBtnValue = 0;
		guaranteeBtnValue = 0;
	}, 500);
};

//Buy car button & input name and place

const buyCar = () => {
	const nameValue = nameInput.value;
	const nameArray = nameValue.trim().split(' ');

	warning.classList.add('active3');
	if (nameInput.value === '' && placeInput.value === '') {
		createErrorP1.textContent = 'Musisz podać wszystkie dane';
		nameInput.classList.add('red');
		placeInput.classList.add('red');
		warning.append(createErrorP1);
	} else if (nameArray.length <= 1 || nameArray.length > 2) {
		createErrorP1.textContent = 'Musisz podać imię i nazwisko';
		nameInput.classList.add('red');
		placeInput.classList.remove('red');
		warning.append(createErrorP1);
	} else if (nameInput.value === '') {
		createErrorP1.textContent = 'Musisz uzupełnić imię i nazwisko';
		nameInput.classList.add('red');
		placeInput.classList.remove('red');
		warning.append(createErrorP1);
	} else if (
		nameInput.value.match(numbers) ||
		placeInput.value.match(numbers)
	) {
		createErrorP1.textContent = 'Użyłeś liczb';
		nameInput.classList.add('red');
		placeInput.classList.add('red');
		warning.append(createErrorP1);
	} else if (
		nameInput.value.match(specials) ||
		placeInput.value.match(specials)
	) {
		createErrorP1.textContent = 'Użyłeś niedozwolonych znaków';
		nameInput.classList.add('red');
		placeInput.classList.add('red');
		warning.append(createErrorP1);
	} else if (placeInput.value === '') {
		createErrorP1.textContent = 'Musisz uzupełnić miejsce odbioru';
		nameInput.classList.remove('red');
		placeInput.classList.add('red');
		warning.append(createErrorP1);
	} else {
		finishScreen.classList.add('active2');
		nameInput.classList.remove('red');
		placeInput.classList.remove('red');

		finalPrice.textContent += priceArea.textContent + ' PLN';
		if (leasingRadio.checked) {
			payForm.textContent += 'Leasing';
		} else if (cashRadio.checked) {
			payForm.textContent += 'Gotówka';
		}
		setTimeout(() => {
			mainArea.classList.replace('zero', 'main');
			form.classList.remove('active');
			finishScreen.classList.remove('active2');
			selectedCar.textContent = 'Wybrałeś ';
			guaranteeBtn.classList.remove('colorBtn');
			wheelsBtn.classList.remove('colorBtn');
			wheelsBtnValue = 0;
			guaranteeBtnValue = 0;
		}, 5000);
		setTimeout(() => {
			warning.classList.remove('active3');
			finalPrice.textContent = 'Kwota do zapłaty: ';
			payForm.textContent = 'Forma zapłaty: ';
			createErrorP1.textContent = '';
			finishCarName.textContent = '';
			nameInput.value = '';
			placeInput.value = '';
		}, 6000);
	}
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

carArea.forEach((item) => {
	item.addEventListener('click', clickArea);
});

//localStorage Load

if (localStorage.getItem('name')) {
	const lsNameInput = localStorage.getItem('name').slice(1, length - 1);
	nameInput.value = lsNameInput;
}

if (localStorage.getItem('place')) {
	placeInput.value = localStorage.getItem('place').slice(1, length - 1);
}

if (localStorage.getItem('date')) {
	const saveChosenDate = JSON.parse(localStorage.getItem('date'));
	chosenDate.value = saveChosenDate;
}

//Select brand

const brandChoice = () => {
	const newBrand = brand.value.toLowerCase();

	carArea.forEach((car) => {
		const writingBrand = car.dataset.brand.toLowerCase();

		if (writingBrand.includes(newBrand)) {
			car.style.display = 'block';
		} else {
			car.style.display = 'none';
		}
	});
};

document.addEventListener('DOMContentLoaded', main);
