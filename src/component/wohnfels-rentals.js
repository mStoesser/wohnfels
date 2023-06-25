import {html, render} from "lit-html";
import {listFlats} from "../service/rentals-service";

class WohnfelsRentals extends HTMLElement {

    flats = []

    connectedCallback() {
        this.render();
        this.loadData();
    }

    loadData() {
        listFlats().then(data => {
            this.flats = data;
            this.render();
        })
    }

    render() {
        return render(html`
            <section>
                <h1 id="rental">Wohnungen</h1>
                <div class="cards">
                    ${this.flats.map(flat => flat.available ? html`
                        <a class="card" href="/rentals/${flat.id}">
                            <img class="teaser-image" src="${flat.previewImg}">
                            <h2 class="teaser-title">${flat.teaserTitle}</h2>
                            <p class="teaser-text">${flat.teaserText}</p>
                            <p class="rooms">${flat.rooms} Zimmer</p>
                            <p class="squareMeter">${flat.squareMeter} m²</p>
                        </a>
                    ` :  html`
                        <div class="card not-available">
                            <img class="teaser-image" src="${flat.previewImg}">
                            <h2 class="teaser-title">${flat.teaserTitle}</h2>
                            <p class="teaser-text">${flat.teaserText}</p>
                            <p class="rooms">${flat.rooms} Zimmer</p>
                            <p class="squareMeter">${flat.squareMeter} m²</p>
                        </div>
                    `)}
                </div>
            </section>
        `, this)
    }
}

customElements.define("wohnfels-rentals", WohnfelsRentals)