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
	// sda
	// const discountU = Math.random() > 0.5 ? true : false;
	// sda
	// 2.
	const input = <HTMLInputElement>document.getElementById('name');
	const nameValue = Math.ceil(Number(input.value));
	// 3.
	console.log(`You have to pay ${calculatePrice(nameValue, discountU)}`);
	// mj
});

// 3. UNION TYPES - | to operator "or"
// let cos: number | string | boolean = 0;
// cos = 12;
// cos = 'error';
// cos = false;
// console.log(cos);

// 4. TYPE ALIAS
// type Name = string;
// const firstName: Name = 'Sara';

// type Cos = number | string | boolean;
// let cos: Cos = 0;
// let cos2: Cos = '123';
// cos = 12;
// cos = 'error';
// cos = false;
// console.log(cos);

// 5. TYPE ALIAS + UNION TYPES: twarde ustawienie wartości
// JAKIS INPUT TYPE
// type Category = 'life' | 'work' | 'education' | 'sport'
// const myCategory: Category = 'gym'

// 6. TYPOWANIE OBIEKTÓW
// const person = {
// 	name: 'John',
// 	surname: 'Smith',
// 	age: 30,
// };
// // const person: { name: string; surname: string; age: number } = {
// // 	name: 'John',
// // 	surname: 'Smith',
// // 	age: 30,
// // };

// // person.name = '15';

// // b) interface
// interface Person {
// 	name: string;
// 	surname: string;
// 	age: number;
// }

// interface Person2 extends Person {
// 	married: boolean;
// }
// const person: Person = {
// 	name: 'John',
// 	surname: 'Smith',
// 	age: 30,
// };

// const person2: Person2 = {
// 	name: 'Sara',
// 	surname: 'Smith',
// 	age: 30,
// 	married: true,
// };

// 7. TYPOWANIE LIST
// const numbers: (number | string)[] = [1, 2, 3, '3', 4, 5];
// const persons: (Person | Person2)[] = [];

// APLIKACJA - TODO LIST TYPESCRIPT
// 1. Wybierz liste ul (klasa todos)
// 2. Stwórz listę z kategoriami todosów.
// const categories = ['life', 'work', 'sport', 'education'];
// Otypuj odpowiednio listę categories (użyj typu Category)
// 3. Otypuj odpowiednio listę todos (stwórz interfejs Todo dla obiektów w środku listy)

// mj
import type { Category } from './helpers/interfaces';
import { Todo } from './helpers/interfaces';
// 1.
const todoList: HTMLUListElement = document.querySelector('.todos');

// 2.
const categories: Category[] = ['life', 'work', 'sport', 'education'];

const todos: Todo[] = [
	{
		title: 'Wyrzucić śmieci',
		done: false,
		category: 'life',
	},
	{
		title: 'Pójść na siłke',
		done: true,
		category: 'sport',
	},
	{
		title: 'Nakarmić psa',
		done: false,
		category: 'work',
	},
];

// mj

// zad. 2
// treść
// 1. Stwórz funkcje render (parametry: todos (lista obiektów klasy Todo))
// W środku render:
// 2. Na parametrze todos wywołaj metodę forEach (todo (obiekt klasy Todo))
// W środku FE:
// 3. Stwórz element <li>, klasę ustaw na kategorię z elementu po którym aktualnie iterujesz (1 par FE), textContent ma zawierać title i category
// 4. Stwórz element <input>, type "checkbox", checked ustaw na własność done z elementy po którym aktualnie iterujesz, podepnij input do li (pkt 3)
// 5. Na input z pkt 4 nałóż event listener (click)
// W środku EL:
// 6. Jeżeli własność done aktulanego elementu ma wartość true, to ustaw ją na false, jeżeli ma false to ustaw true
// mj
// 1.
const render = (todos: Todo[]) => {
	todos.forEach((todo: Todo) => {
		// 3.
		const li = document.createElement('li');
		li.setAttribute('class', todo.category);
		li.textContent = `${todo.title}(${todo.category})`;
		// 4.
		const checkbox = document.createElement('input');
		checkbox.setAttribute('type', 'checkbox');
		checkbox.setAttribute('checked', `${todo.done}`);
		li.appendChild(checkbox);
		// 5.
		// sda
		// checkbox.addEventListener('click', () => {
		// 	todo.done ? (todo.done = false) : (todo.done = true);
		// });
		// sda
		// mj
		checkbox.addEventListener('click', function (event) {
			if (todo.done === true) {
				todo.done = false;
			} else {
				todo.done = true;
			}
		});
		// mj

		// wywołanie (dodatek)
		// todoList.appendChild(li);
		// wywołanie (dodatek)
	});
};
// mj

// render(todos);

// zad. 3
// treść
// 1. Stwórz funkcję renderCategories
// W renderCategories:
// 2. Wybierz ul (klasa "categories")
// 3. Na arrayu categories (na górze) wywołujecie forEach (parametr: category (typ: Category))
// 4. Stwórz element <li>
// 5. Stwórz element <input>, type "radio", name "category", value na parametr category z forEacha, podepnij input do li (pkt 4)
// 6. Stwórz element <label>, textContent na category (parametr forEacha), podepnij label do li (pkt 4)
// 7. Do ula z pkt 2 podepnij li
// mj
const renderCategories = () => {
	const ul: HTMLUListElement = document.querySelector('.categories');
	// 3.
	categories.forEach((category: Category) => {
		const li = document.createElement('li');
		const input = document.createElement('input');
		input.setAttribute('type', 'radio');
		input.setAttribute('name', 'category');
		input.setAttribute('value', category);
		li.appendChild(input);
		// 6.
		const label = document.createElement('label');
		label.textContent = category;
		li.appendChild(label);
		// 7.
		ul.appendChild(li);
	});
};

renderCategories();
// mj

// home work
// Po klinięciu na button "Add" ma zostać dodany todos. Ściągnij text z inputu textowego i kategorie z radio inputów. Sam todos powinien przybrać formę obiektu klasy Todo. Ma zostać spushowany do listy todos oraz ma zostać wyrenderowany (przez wywołanie funkcji render)
