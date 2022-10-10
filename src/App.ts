// let age = 31;
// age = 32;
// age = 'tekst 2';
// console.log(age);

// b)
let imie: string = 'John';
imie = '123';
const surname = 'Smith';

// c) boolean

// 2. TYPOWANIE FUNKCJI
const add = (num1: number, num2: number): number => {
	// const floored = num2.floor();
	return num1 + num2;
};

const outcome = add(1, 2);
console.log(outcome);
const multiply = (num1: number, num2: number) => {
	return num1 + num2;
};
multiply(1, outcome);
// console.log(multiply);

// Zad 1.
// Napisz funkcje która będzie obliczała cenę w zależności czy zniżka jest przyznana, czy nie.
// Nazwa calculatePrice
// Parametry: originalPrice (liczba), hasDiscount (ttrue/false)
// Funkcjonalność: Jeżeli parametr hasDicount jest równy true, zwróc liczbę originalPrice pomniejszoną o 20%, jeżeli hasDiscount jest równe false, zwróć po prostu originalPrice

// mj
const calculatePrice = (
	originalPrice: number,
	hasDiscount: boolean
): number => {
	// const price: number;
	let priceT: number;
	if (hasDiscount === true) {
		priceT = originalPrice * 0.8;
	} else {
		priceT = originalPrice;
	}
	return priceT;
};
// mj

// sda
// const calculatePrice = (originalPrice: number, hasDiscount: boolean): number =>
// 	hasDiscount ? originalPrice * 0.8 : originalPrice;
// sda

const price = 70;
const discount = true;
console.log(calculatePrice(price, discount));

const button: HTMLButtonElement = document.querySelector('button');
const categoryList = document.querySelector('.categories');

button.addEventListener('click', () => {
	// zadanie 2
	// 1. W jakiś sposób wylosuj czy użytkownik ma zniżke czy nie i zapisz do zmiennej true albo false
	// 2. Ściągnij wartość z inputu textowego (id "name").
	// 3. Wykonaj console loga `You have to pay *tu cena, która jest wynikiem wywołania calculatePrice*`
	// Wartość z inputu textowego jako pierwszy argument funkcji calculatePrice
	// mj
	// 1.
	let discountU: boolean;
	if (Math.random() > 0.5) {
		discountU = true;
	} else {
		discountU = false;
	}

	// 2.
	const input = document.getElementById('name').value.Number();

	// 3.
	console.log = `You have to pay ${calculatePrice(input, discountU)}`;

	// mj
});
