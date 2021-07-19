///JQUERY SLIDER

$(document).ready(function () {
	$('.carousel').slick({
		dots: false,
		arrows: false,
		autoplay: true,
		fade: false,
		autoplaySpeed: 3000,
		initialSlide: 0,
	});
});

var Controller = function () {

	class Item {
		constructor(name, image, description, price) {
			this.name = name;
			this.image = image;
			this.description = description;
			this.price = price;
		}
	}

	var picture1, picture2, picture3, picture4, picture5;

	picture1 = '../img/cellphone.png';
	picture2 = '../img/laptop.png';
	picture3 = '../img/pants.png';
	picture4 = '../img/shirt.png';
	picture5 = '../img/shoes.png';



	//ADD ITEMS TO TE CART

	var addItem = function (obj) {
		var html, html1, html2, newHtml2;
		html = '<div class="details__item" id="item-%id%"><div class="details__item-image"><img src=%image% class="details__item-img" alt="" style="width: 4rem; height: auto;"></div><div class="details__item-name">%name%</div><div class="details__item-price"><span class="pricecurr">kes</span><span class="pricevalue"> %price%</span></div><div class="details__item-delete"><button class="details__item-delete--btn"><i class="ion-ios-close-outline"></i></button></div></div>';

		html1 = html.replace("%name%", obj.name);
		html1 = html1.replace("%image%", obj.image);
		html1 = html1.replace("%price%", obj.price);

		html2 = '<div class="details__box" id="decription-%id%"><div class="details__item-header"><div class="details__item-description-name">%cellphone%</div><div class="details__item-rating"><span class="fa fa-star details__item-checked"></span><span class="fa fa-star details__item-checked"></span><span class="fa fa-star details__item-checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></div></div><div class="details__item-description">%description%</div><div class="details__item-link"><a href="#" class="details__item-link--link">read more</a></div></div>';
		//   newHtml2 = html2.replace('%id%', obj.id);
		newHtml2 = html2.replace('%name%', obj.name);
		newHtml2 = html2.replace('%description%', obj.description);

		document.querySelector('.details__item-img').src = obj.image;

		document.querySelector('.btn').addEventListener('click', function () {
			document.querySelector('.details__items').insertAdjacentHTML('beforeend', html1);
			document.querySelector('.details__description-container').insertAdjacentHTML('beforeend', newHtml2);

		});

	};

	var cellphone = new Item('cellphone', picture1,
		'Dare to be exceptional. Now you can because you\'ve never had this much power and beauty at your fingertips. This phone has all the premium features without the premium price tag in a device that is smart, sleek and beautiful.',
		11000);
	var laptop = new Item('laptop', picture2,
		'Do more of what you love. All-day long. Designed to keep you productive and entertained from anywhere, this laptop combines up to 15 hours of mixed usage battery life with a sleek and portable, micro-edge bezel design.',
		55000);

	var pants = new Item('pants', picture3,
		'Enjoy classic style and exceptional comfort by adding these pants to your wardrobe. Not only are they classy, but they also feature moisture-wicking technology to help you remain comfortable throughout the day. The technology featured in this pant is designed to keep you cool, dry and fashionable while you work, play and even after hours. These stylish pants also feature an adjustable waist to help ensure a snug fit every time you wear them. These pants are machine washable and available in a variety of sizes and colors so you can easily find a pair that fits your body and style.',
		3700);

	var shirt = new Item('shirt', picture4,
		'This long sleeve shirt will make a smart and handsome addition to your wardrobe. It\'s made from soft, lightweight fabric to keep you comfortable, and features a stylish allover print. The buttoned chest pocket helps keep your sunglasses and other small items secure when you\'re on the move, while roll tab sleeves make this shirt a versatile option you can\'t go wrong with.',
		2200);

	var shoes = new Item('shoes', picture5,
		'The coolest kicks. This super comfortable and trend-right sneaker hits all the right notes. Features a full wrap canvas print and elastic stretch V for easy on-and-off use. Soft textile lining with lightweight construction for maximum comfort. High quality canvas construction for everyday use and durable EVA outsole for exceptional traction.',
		5000);

	addItem(cellphone);
	addItem(laptop);
	addItem(pants);
	addItem(shirt);
	addItem(shoes);

}
Controller();



var UIContoller = (() => {
	var DOMStrings = {
		container: '.details',
		buyButton: '.btn',
		currency: '.currency__btn',
		itemContainer: '.details__items',
		itemImage: '.details__item-image',
		itemName: '.details__item-name',
		itemPrice: '.details__item-price',
		pricecurrency: '.pricecurr',
		pricevalue: '.pricevalue',
		descriptionContainer: '.details__description-container',
		descriptionName: '.details__item-description-name',
		descriptionText: '.details__item-description'
	};

	return {
		getDomstrings: () => DOMStrings,

		readCurrencyButton: () => {
			var curr = document.querySelectorAll(DOMStrings.currency);
			var currencyBox = document.querySelectorAll(DOMStrings.pricecurrency);

			for (i = 0; i < curr.length; i++) {
				curr[i].addEventListener('click', (event) => {
					var currencyMode = event.target.textContent;

					for (j = 0; j < currencyBox.length; j++) {
						currencyBox[j].innerHTML = currencyMode;
					}

				});
			}
		},


		deleteListItem: (itemID, desID) => {
			var el = document.getElementById(itemID);
			var descEl = document.getElementById(desID);

			el.parentNode.removeChild(el);
			descEl.parentNode.removeChild(descEl)
		}

	};

})();




var CTRL = ((UICtrl) => {
	var setupEventListeners = () => {
		var i, btn, DOM;
		DOM = UICtrl.getDomstrings();
		btn = document.querySelectorAll(DOM.buyButton)

		document.querySelector(DOM.itemContainer).addEventListener('click', CtrlDeleteItem);
		document.querySelector(DOM.descriptionContainer).addEventListener('click', CtrlDeleteItem);

	}

	//DELETE ITEM FROM THE UI
	var CtrlDeleteItem = function (event) {
		var itemID, splitID, ID, descriptionID;
		itemID = event.target.parentNode.parentNode.parentNode.id;

		if (itemID) {
			splitID = itemID.split('-');
			ID = splitID[1];

			descriptionID = 'decription-' + ID;

			UICtrl.deleteListItem(itemID, descriptionID);
		}

	}

	//CHANGE CURRENCY MODE ON CLICKING A BUTTON
	UICtrl.readCurrencyButton();

	return {
		init: () => {
			console.log('Application has started ...')
			setupEventListeners();
		}
	}
})(UIContoller);

CTRL.init();


