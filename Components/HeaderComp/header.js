const headerTemp = document.createElement('template');
//importing to headers css above location host (liveServer)
headerTemp.innerHTML = `
<style>
@import url('http://${location.host}/Components/HeaderComp/header.css')
</style>

	<header>
			<div class="container">
				<div class="menuDiv">
					<div id="Home"><a href="#">Home</a></div>
					<div id="Favorites"><a href="#">Favorites</a></div>
					<div id="About"><a href="#">About</a></div>
				</div>
			</div>
	</header>
`;
class AppHeader extends HTMLElement {
	constructor() {
		super();
		//active ShadowDom and show his template here 'headerTemp' ..
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(headerTemp.content.cloneNode(true));
	}
}

window.customElements.define('app-header', AppHeader);
