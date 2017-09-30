import menuItemHtml from '../../resources/templates/menuItem.html';
import myself from '../../resources/templates/myself.html';
import numerizer from '../../resources/templates/numerizer.html';
import thanks from '../../resources/templates/thanks.html';
import {
	closeMenu
} from './Menu';
export {
	switchToItem,
	closeItem
};
let itemContainer = document.createElement('div');
itemContainer.id = 'js-menuItem';
itemContainer.classList.add('menuWrapperItem');
itemContainer.innerHTML = '<button id="js-itemBackBtn" class="backBtn fixedCtrlBtn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>';

document.body.appendChild(itemContainer);

let current = null;
let itemElem = null;

function switchToItem(itemName) {
	if (!current) {
		let item = document.createElement('div');
		item.classList.add('itemDetails');
		let text = getText(itemName);
		item.innerHTML = text;
		itemElem = item;
		itemContainer.appendChild(item);
		current = item;
		itemContainer.classList.add('active');
		itemContainer.classList.add('slideDown');
		document.getElementById('js-itemBackBtn').addEventListener('click', closeMenu);
	} else {
		itemContainer.classList.remove('slideDown');

		setTimeout(() => {
			current.innerHTML = getText(itemName);
			itemContainer.classList.add('slideDown');
		}, 500)

	}
}

function getText(itemName) {
	let text = '';
	switch (itemName) {
		case 'myself':
			text = myself;
			break;
		case 'numerizer':
			text = numerizer;
			break;
		case 'thanks':
			text = thanks;
			break;
	}
	return text;
}

function closeItem() {
	if (!current) {
		return;
	} else {
		itemContainer.classList.remove('slideDown');

		setTimeout(() => {
			itemContainer.classList.remove('active');
			itemElem.parentNode.removeChild(itemElem);
			itemElem = null;
			document.getElementById('js-itemBackBtn').removeEventListener('click', closeMenu);
		}, 500)

		current = null;
	}
}