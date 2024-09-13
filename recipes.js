$(document).ready(function () {
	$('#searchButton').on('click', function () {
		const searchResults = document.querySelector('.searchResults');
		searchResults.innerHTML = '';
		$.ajax({
			url: `https://api.spoonacular.com/recipes/complexSearch?query=${$('#searchValue').val()}&apiKey=73fcf3c9973341e2a8ec6ff4fd10ba35`,
		}).done(function (data) {
			data.results.forEach((recipe) => {
				const newItem = document.createElement('div');
				newItem.classList.add('recipe');
				newItem.innerHTML = `<h3>${recipe.title}</h3><a href="ingredients.html?id=${recipe.id}"><img src=${recipe.image} /></a>`;
				searchResults.appendChild(newItem);
			});
		});
	});
	$('#resetButton').on('click', function () {
		const searchResults = document.querySelector('.searchResults');
		searchResults.innerHTML = '';
	});
});
