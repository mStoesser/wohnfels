import {html, render} from "lit-html";

class WohnfelsOverus extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        render(html`
            <section>
                <h1>Herzlich Willkommen</h1>
                <p class="overus">Wir sind...</p>
                <p class="overus">... bei unserem Herzensprojekt für mehr Wohnraum mit nachhaltiger Bauweise. Wir sind vier Erwachsene, Julia
                    Bak, Eva Braß, Ralph Falk und Michael Stößer, die vor fünf Jahren vor einem Grundstück standen mit zwei
                    baufälligen bzw. renovierungsbedürftigen Häusern. Daraus entstand der Wunsch etwas gegen die Wohnungsnot
                    in Münchener Wohnraum zu tun und dabei gleichzeitig in nachhaltiges Bauen und Wohnen zu investieren.</p>

                <p class="overus">Die kleine Wohnanlage in der Leienfelsstr. 21/21a besteht aus zwei separaten Mietshäusern mit je fünf
                    Wohneinheiten und einem Einfamilienhaus, in dem wir wohnen. Bei allen Wohnungen handelt es sich um
                    Erstbezug nach Neubau. Die nachhaltiger Holzständerbauweise als Effizienzhaus 40-plus entspricht den
                    neuesten technischen und energetischen Standards. Neben dem 40-plus-Standard ist das Haus auch mit dem
                    neuen Standard “Nachhaltigem Bauen” Zertifiziert. Das ökologische und hochdämmende ÖvoNaturTherm-Materia
                    der Außenwändel ist die Basis für ein energieeffizientes und gesundes Wohnen. Das Material steht für
                    seine hervorragende Raumluftqualität, die sogar mit "wohnmedizinisch empfohlen" ausgezeichnet wurde.
                </p>
            </section>
        `, this)
    }

}

customElements.define("wohnfels-overus", WohnfelsOverus)