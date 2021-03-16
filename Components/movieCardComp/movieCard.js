const movieCard = document.createElement('template');
movieCard.innerHTML = `
<style>
@import url('http://${location.host}/Components/movieCardComp/movieCard.css')
</style>

<div class="movie-container">
			<div class="image-container">
				<img />
			</div>
			<div class="info">
				<h3 class="title"></h3>
				<p></p>
				<div class="action_container">
					<i class="isFavourite fa fa-heart"></i>
					<a target="_blank" class="button">IMDB</a>
				</div>
			</div>
</div>
`;

class MovieCards extends HTMLElement {
	constructor() {
		super();

		this.isFavourite = false;

		this.attachShadow({ mode: 'open' });
		//adding my moviecardTemplate
		this.shadowRoot.appendChild(movieCard.content.cloneNode(true));

		//mainden gelen dosyayi bekliyor
		setTimeout(() => {
			this.shadowRoot.querySelector(
				'h3.title'
			).innerText = this.getAttribute('title');

			this.shadowRoot.querySelector('movie-card');

			// this.shadowRoot.querySelector('img').src = this.getAttribute('poster');

			if (this.getAttribute('isFavourite') == 'true') {
				this.isFavourite = true;
				this.shadowRoot
					.querySelector('.isFavourite')
					.classList.add('is_favourite');
			}
		}, 100);

		if (this.getAttribute('isFavourite') == 'true') {
			this.isFavourite = true;
			this.shadowRoot
				.querySelector('.isFavourite')
				.classList.add('is_favourite');
		}
	}

	favToggle() {
		this.isFavourite = !this.isFavourite;
		if (this.isFavourite) {
			this.shadowRoot
				.querySelector('.isFavourite')
				.classList.add('is_favourite');
		} else {
			this.shadowRoot
				.querySelector('.isFavourite')
				.classList.remove('is_favourite');
		}
	}

	connectedCallback() {
		//ikinci arg verebilmemiz icin olan 2.par i aldigimiz kisim
		this.action = () => {
			this.favToggle();
		};
		this.shadowRoot
			.querySelector('.isFavourite')
			.addEventListener('click', this.action);
	}
	//ikinci arg verebilmemiz icin olan 2.par i aldigimiz kisim
	disconnectedCallback() {
		this.shadowRoot
			.querySelector('.isFavourite')
			.removeEventListener('click', this.action);
	}
}

window.customElements.define('movie-card', MovieCards);
