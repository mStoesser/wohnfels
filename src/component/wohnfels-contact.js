import {html, render} from "lit-html";

class WohnfelsContact extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        render(html`
            <section>
                <h1 id="contact">Kontakt</h1>
                <div class="contact-container">
                    <div class="contact-text">
                        <h2>Bei Interesse oder Rückfragen</h2>
                        <h2>kontaktieren Sie uns gerne direkt per Mail.</h2>
                    </div>
                    <a  class="contact-mail" href="mailto:wohnfels@gmail.com">wohnfels@gmail.com</a>
                </div>
            </section>
        `, this)
    }
}

customElements.define("wohnfels-contact", WohnfelsContact)