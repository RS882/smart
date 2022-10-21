import { ICartDelivery } from "./localization";

export const cartDeliveryTextEn: ICartDelivery = {
	city: 'Your city',
	deliveryMethod: {
		delivery: {
			method: 'Delivery',
			date: 'Data',
			time: 'Time',
			timePlasholder: 'Choose delivery time',
			price: 'free',
			street: 'Street, house/corps',
			flat: 'flat',
			comment: 'Commentary to the courier',
		},
		pickup: {
			method: 'Pickup',
			productIsAvailable: ['The goods are available in ', 'stores',],
			shope: [{ city: 'Berlin', adress: 'Miru avenue , 78', mode: 'MN-SN 09:00 — 22:00', },
			{ city: 'Hamburg', adress: 'Vishneva street, 35 k.2', mode: 'MN-SN 09:00 — 22:00', },
			{ city: 'Berlin', adress: 'Peremogy avenue, 44', mode: 'MN-SN 09:00 — 22:00', }
			],
		},
	},
};

export const cartDeliveryTextUa: ICartDelivery = {
	city: 'Ваше місто',
	deliveryMethod: {
		delivery: {
			method: 'Доставка',
			date: 'Дата',
			time: 'Час',
			timePlasholder: 'Оберить час доставки',
			price: 'бескоштовно',
			street: 'Вулиця, будинок/корпус',
			flat: 'Квартира',
			comment: "Rоментар кур'єру"
		},
		pickup: {
			method: 'Самовивіз',
			productIsAvailable: ['Товар доступений у ', 'магазинах',],
			shope: [{ city: 'Berlin', adress: ' проспект Миру, 78', mode: 'ПН-НД 09:00 — 22:00' },
			{ city: 'Hamburg', adress: 'вулица Вишнева, 35 к.2', mode: 'ПН-НД 09:00 — 22:00' },
			{ city: 'Berlin', adress: 'проспект Перемоги, 44', mode: 'ПН-НД 09:00 — 22:00' }
			],
		},
	},
};

export const cartDeliveryTextRu: ICartDelivery = {
	city: 'Ваш город',
	deliveryMethod: {
		delivery: {
			method: 'Доставка',
			date: 'Дата',
			time: 'Время',
			timePlasholder: 'Выберите время доставки',
			price: 'бесплатно',
			street: 'Улица, дом/корпус',
			flat: 'Квартира',
			comment: 'Комментарий курьеру',
		},
		pickup: {
			method: 'Самовывоз',
			productIsAvailable: ['Товар доступен в ', 'магазинах',],
			shope: [{ city: 'Berlin', adress: ' проспект Мира, 78', mode: 'ПН-ВС 09:00 — 22:00', },
			{ city: 'Hamburg', adress: 'улица Вишневая, 35 к.2', mode: 'ПН-ВС 09:00 — 22:00', },
			{ city: 'Berlin', adress: ' проспект Победы, 44', mode: 'ПН-ВС 09:00 — 22:00', }
			],
		},
	},
};
