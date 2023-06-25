import {html, render} from "lit-html";
import {router} from "../app.js";
import {getFlat} from "../service/rentals-service";

class WohnfelsRentalsDetail extends HTMLElement {

    flatId = null;
    flat = null;

    connectedCallback() {
        this.flatId = router.location.params.flatId;
        this.render();
        this.loadData();
    }

    loadData() {
        if (this.flatId) {
            getFlat(this.flatId).then(data => {
                this.flat = data;
                this.selectedImage = this.flat.previewImg
                this.render();
            })
        }
    }

    selectImage(img) {
        this.selectedImage = img;
        this.render();
    }

    renderInterior(interior) {
        return html`
            <ul>
                ${interior.map(i=>Array.isArray(i) ? this.renderInterior(i) : html`<li>${i}</li>`)}
            </ul>`
    }
    render() {
        const content = this.flat ? html`
    
            <section>
                <h1>${this.flat.title}</h1>
            </section>
            <section class="gallery">
                <div class="preview-container">
                    <img class="preview" src="${this.selectedImage}" @click="${_=>this.openModal(this.selectedImage)}">    
                </div>
                
<!--                <div class="thumbnail-container">-->
                    ${this.flat.images.map((img,i) => html`<img class="thumbnail" @click="${_=>this.selectImage(img)}" src="${img}">`)}    
<!--                </div>-->
            </section>
            
            <section>
                
                ${this.flat.shortDescription.map(s => html`<p>${s}</p>`)}
             

                <div class="short-facts">
                    <span>${this.flat.priceBase} €</span>
                    <span>Kaltmiete</span>
                    <span>${this.flat.squareMeter} qm</span>
                    <span>Fläche</span>
                    <span>${this.flat.rooms}</span>
                    <span>Zimmer</span>
                    <span>${this.flat.priceOverall} €</span>
                    <span>Warmmiete</span>
                    <span>${this.flat.availableAt}</span>
                    <span>Verfügbar ab</span>
                </div>
                
                <div class="tags">
                    ${this.flat.tags.map(tag => html`<span>${tag}</span> `)}
                </div>
                
                <div class="facets">
                    <span>Typ</span>
                    <span>${this.flat.facets.type}</span>
                    <span>Badezimmer</span>
                    <span>${this.flat.facets.bathrooms}</span>
                    
                    <span>Haustiere</span>
                    <span>${this.flat.facets.pets}</span>
                    <span>Tiefgaragenstellplatz</span>
                    <span>${this.flat.facets.parkingSpot}</span>
                    
                    <span>Nebenkosten</span>
                    <span>${this.flat.facets.additionalCosts}</span>
                    <span>Kaution</span>
                    <span>${this.flat.facets.surety}</span>
                </div>
            </section>

            <section class="section">
                <h1>Ausstattung</h1>
                <img class="interior-preview" src="${this.flat.interiorImg}">
                ${this.renderInterior(this.flat.interior)}
            </section>
                        
            <section>
                <h1>Lage</h1>
                ${this.flat.location.map(l => html`<p>${l}</p>`)}
            </section>
            

            <section class="overlay images" @click="${e=>this.onClickOverlay(e)}">
                <div class="modal">
                    <div class="slideshow-container">
                        ${this.flat.images.map((img,i) => html`
                            <div class="mySlides fade">
                                <div class="numbertext">${(i+1)} / ${this.flat.images.length}</div>
                                <img src="${img}">
                                <div class="text">Gang</div>
                            </div>
                        `)}
                        <a class="prev" @click="${_=>this.plusSlides(-1)}">&#10094;</a>
                        <a class="next" @click="${_=>this.plusSlides(1)}">&#10095;</a>
                    </div>
                    <br>
                    <div style="text-align:center">
                        ${this.flat.images.map((img,i) => html`<span class="dot" @click="${_=>this.currentSlide(i)}"></span>`)}
                    </div>
                </div>
            </section>

            <wohnfels-contact></wohnfels-contact>
            
        ` : html`no flat`;
        render(content, this)
        this.overlay = this.querySelector('.overlay')
        //this.showSlides(this.slideIndex);
    }

    onClickOverlay(e) {
        if (e.target===this.overlay && this.overlay.classList.contains('visible')) {
            this.overlay.classList.remove('visible');
            e.stopPropagation();
        }
    }

    openModal(i) {
        this.overlay.classList.add('visible');
        this.currentSlide(i);
    }

    slideIndex = 1;


    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }

    showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {this.slideIndex = 1}
        if (n < 1) {this.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex - 1].style.display = "block";
        dots[this.slideIndex - 1].className += " active";
    }
}

customElements.define("wohnfels-rentals-detail", WohnfelsRentalsDetail)