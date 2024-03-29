export const convertCurrency = (amount: string | number) => {
	return new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'UAH',
	}).format(+amount)
}
