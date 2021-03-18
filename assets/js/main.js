const search_text = document.querySelector('.search_text');
const moviess = document.getElementById('movies');

search_text.addEventListener('keydown', (event) => {
	if (event.keyCode == 13) {
		searchMovie();
	}
});

async function searchMovie() {
	moviess.innerHTML = '';
	const request = await fetch(
		`http://api.tvmaze.com/search/shows?q=${search_text.value}`
	);
	const data = await request.json();
	const movies = await data.map(({ show }) => {
		console.log(show.summary);
		//i did to manipulation for data its a easy.
		return {
			title: show.name,
			description: show.summary,
			image:
				show.image == null ? 'assets/image/default.png' : show.image.medium,
			language: show.language,
			isFavourite: false,
		};
	});
	prepareMovies(movies);
}

function prepareMovies(movies) {
	movies.forEach((movie) => {
		let movie_card = document.createElement('movie-card');
		movie_card.setAttribute('title', movie.title);
		movie_card.setAttribute('description', movie.description);
		movie_card.setAttribute('image', movie.image);
		movie_card.setAttribute('class', 'movie_card');

		movie_card.setAttribute('isFavourite', movie.isFavourite);
		// movie_card.innerHTML = movie.description;
		document.querySelector('#movies').append(movie_card);
	});
}

// show:
// externals: {tvrage: null, thetvdb: 284372, imdb: null}
// genres: ["Music"]
// id: 24690
// image: {medium: "https://static.tvmaze.com/uploads/images/medium_portrait/94/236390.jpg", original: "https://static.tvmaze.com/uploads/images/original_untouched/94/236390.jpg"}
// language: "Korean"
// name: "After School Club"
// network: {id: 1349, name: "Arirang TV", country: {…}}
// officialSite: "http://arirang.co.kr/Tv2/Tv_PlusHomepage_Full.asp?PROG_CODE=TVCR0688&MENU_CODE=101717"
// premiered: "2013-04-17"
// rating: {average: null}
// runtime: 55
// schedule: {time: "13:00", days: Array(1)}
// status: "Running"
// summary: "<p><b>After School Club </b>is a variety show of South Korea, as well known as simply ASC. It is a internet based live music request television talk show, which is hosted by K-pop idols Kevin Woo, Park Ji Min and Jae Park.</p>"
// type: "Variety"
// updated: 1615359704
// url: "https://www.tvmaze.com/shows/24690/after-school-club"
// webChannel: null
// weight: 74
