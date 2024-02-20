// Задача: Изменение текста элемента
const bodyNode = document.querySelector("body");
// Условие: Создайте HTML-страницу с элементом <p>, содержащим текст "Привет, мир!".
//С использованием JavaScript измените текст этого элемента на "Привет, JavaScript!".

const pNode = document.querySelector("p");
const arrStr = pNode.innerText.split(" ");
arrStr[1] = "JavaScript!";
pNode.innerText = arrStr.join(" ");
// Задача: Добавление нового элемента в DOM

// Условие: Создайте массив из строк. Напишите функцию, которая получает этот массив и
//создает нумерованный список из этих строк в html документе.
const strings = ["qqqq", "wwww", "1so2", "iii", "ziz9"];


const addOlNode = (arr) => {
	const liNodes = arr.map(e => {
		const li = document.createElement("li");
		li.innerText = e;
		return li
	})
	const olNode = document.createElement("ol");
	olNode.append(...liNodes);
	bodyNode.append(olNode);
}

addOlNode(strings);


// Задача: Создание ссылок

// Условие: Подготовьте массив из объектов со свойствами label и link. 
//Создайте функцию,
//которая проходится циклом по этмоу массиву и создает ссылки, 
//ведущие на link с содержимым label.

const links = [
	{
		label: "1111",
		link: "#1"
	},
	{
		label: "2222",
		link: "#2"
	},
	{
		label: "3333",
		link: "#3"
	},
	{
		label: "4444",
		link: "#4"
	},
];

const addLinks = (linksObj) => linksObj.map(({ label, link }) => {
	const wrapper = document.createElement("div");
	const aLink = document.createElement("a");
	aLink.setAttribute("href", link);
	aLink.innerText = label;
	wrapper.append(aLink);
	return wrapper;
});



bodyNode.append(...addLinks(links));

