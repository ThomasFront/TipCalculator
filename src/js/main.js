const amount = document.querySelector('#amount')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const error = document.querySelector('#error')
const result = document.querySelector('#result')
const resultSpan = document.querySelector('#result-span')
const button = document.querySelector('#complete-button')

const checkFields = () => {
	if (amount.value !== '' && people.value !== '' && tip.value !== '0') {
		convert()
		error.style.display = 'none'
	} else {
		error.style.display = 'block'
		result.style.display = 'none'
	}
}

const convert = () => {
	const sum = (parseFloat(amount.value) + parseFloat(amount.value) * parseFloat(tip.value)) / parseInt(people.value)
	resultSpan.textContent = sum.toFixed(2)
	result.style.display = 'block'
	error.style.display = 'none'
}

button.addEventListener('click', checkFields)
