// let age = 31;
// age = 32;
// age = 'tekst 2';
// console.log(age);
// b)
let imie = 'John';
imie = '123';
const surname = 'Smith';
// c) boolean
// 2. TYPOWANIE FUNKCJI
const add = (num1, num2) => {
    // const floored = num2.floor();
    return num1 + num2;
};
const outcome = add(1, 2);
console.log(outcome);
const multiply = (num1, num2) => {
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
const calculatePrice = (originalPrice, hasDiscount) => {
    // const price: number;
    let priceT;
    if (hasDiscount === true) {
        priceT = originalPrice * 0.8;
    }
    else {
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
const button = document.querySelector('button');
const categoryList = document.querySelector('.categories');
button.addEventListener('click', () => {
    // zadanie 2
    // 1. W jakiś sposób wylosuj czy użytkownik ma zniżke czy nie i zapisz do zmiennej true albo false
    // 2. Ściągnij wartość z inputu textowego (id "name").
    // 3. Wykonaj console loga `You have to pay *tu cena, która jest wynikiem wywołania calculatePrice*`
    // Wartość z inputu textowego jako pierwszy argument funkcji calculatePrice
    // mj
    // 1.
    let discountU;
    if (Math.random() > 0.5) {
        discountU = true;
    }
    else {
        discountU = false;
    }
    // sda
    // const discountU = Math.random() > 0.5 ? true : false;
    // sda
    // 2.
    const input = document.getElementById('name');
    const nameValue = Math.ceil(Number(input.value));
    // 3.
    console.log(`You have to pay ${calculatePrice(nameValue, discountU)}`);
    // mj
});
// 1.
const todoList = document.querySelector('.todos');
// 2.
const categories = ['life', 'work', 'sport', 'education'];
const todos = [
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
const render = (todos) => {
    todos.forEach((todo) => {
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
            }
            else {
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
    const ul = document.querySelector('.categories');
    // 3.
    categories.forEach((category) => {
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
export {};
// mj
// home work
// Po klinięciu na button "Add" ma zostać dodany todos. Ściągnij text z inputu textowego i kategorie z radio inputów. Sam todos powinien przybrać formę obiektu klasy Todo. Ma zostać spushowany do listy todos oraz ma zostać wyrenderowany (przez wywołanie funkcji render)
