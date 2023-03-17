// Grab HTML elements
var formEl = document.querySelector('#form')
var queryInputEl = document.querySelector('#query')
var resultListEl = document.querySelector('#results')

var apiBaseUrl = 'https://www.loc.gov/'

var getSearchUrl = (query) => {
	// https://www.loc.gov/search/?q={query}&fo=json
	return apiBaseUrl + `search/?q=${query}&fo=json`
}

var getFormatUrl = (formatType, query) => {
	// https://www.loc.gov/{formatType}/?q={query}&fo=json
	return apiBaseUrl + `${formatType}/?q=${query}&fo=json`
}

var fetchSearch = () => {
	fetch(getSearchUrl(queryInputEl.value))
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			console.log(data)
		})
}

var fetchFormat = () => {}

// Add event listener
formEl.addEventListener('submit', (event) => {
	event.preventDefault()
	fetchSearch()
})
