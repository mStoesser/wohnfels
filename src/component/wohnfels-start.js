import {html, render} from "lit-html";

class WohnfelsStart extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        return render(html`
            <div class="background">&nbsp;</div>
            <wohnfels-overus class="component"></wohnfels-overus>
            <wohnfels-rentals class="component"></wohnfels-rentals>
            <wohnfels-contact class="component"></wohnfels-contact>
        `, this)
    }
}

customElements.define("wohnfels-start", WohnfelsStart)