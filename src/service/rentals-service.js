const flats = [
    {
        id: '10',
        title: 'Lichtdurchflutete 3-Zimmer-Wohnung im Loft-Style',
        teaserTitle: 'Exklusive, lichtdurchflutete 3-Zimmer-Wohnung',
        teaserText: 'Die exklusive Dachgeschosswohnung',
        shortDescription: [
            'Die exklusive Dachgeschosswohnung verfügt über ein großzügiges Wohn- und Esszimmer und weckt ' +
            'dank der luxuriösen Innenausstattung Loft-Gefühle. Durch X Dachgauben sind alle Zimmer lichtdurchflutet. ' +
            'Abgerundet wird die Wohnung durch ein voll-ausgestattetes Tageslichtbad mit großer Regendusche und einer ' +
            'separaten Gästetoilette.',

            'Dank nachhaltiger Bauweise mit Zertifizierung als Effizienzhaus 40-plus kann man von stabilen, dauerhaft ' +
            'niedrigen Nebenkosten ausgehen. Machen Sie dieses seltene Fundstück zu Ihrem Wohlfühlzuhause!',

            'Die Ausstattung mit Eichenparkett, Fußbodenheizung und Lüftungsanlage mit Wärmerückgewinnung, sowie die ' +
            'gute Raumaufteilung machen diese Neubauwohnungen zu etwas ganz besonderem.',

            'Schauen Sie sich die Wohnung einfach an und überzeugen Sie sich selbst von dieser wunderschönen Immobilie ' +
            'in einer gut angebundenen, grünen Lage.',
        ],

        address: 'Leienfelsstraße 21, 81243 München',
        previewImg: '/img/DSC_7890.NEF.jpg',
        rooms: '3',
        squareMeter: '106,07',
        available: true,
        priceBase: '2.400',
        priceOverall: '2.600',
        surety: '7.800',
        availableAt: '1.8.2023',


        images: [
            '/img/20230514_175151.jpg',
            '/img/20230514_175156.jpg',
            '/img/20230514_175206.jpg',
            '/img/20230514_175259.jpg',
            '/img/DSC_7889.NEF.jpg',
            '/img/DSC_7890.NEF.jpg',
            '/img/DSC_7892.NEF.jpg',
        ],
        tags: ['Südbalkon', 'Kellerabteil', 'Gartenmitbenutzung', 'Gäste-WC', 'Stellplatz'],
        facets: {
            type: 'Dachgeschosswohnung',
            bathrooms: '2',
            pets: 'Ja',
            parkingSpot: '100 €',
            additionalCosts: '160 €',
            surety: '3 x Kaltmiete',
        },
        interiorImg: '/img/interior.png',
        interior: [
            '6,00 m² Südbalkon',
            'elegantes, modernes Tageslichtbad mit Regendusche und separater Badewanne',
            'direkter, innenliegender Zugang zum eigenen Einzeltiefgaragenstellplatz ',
            'Fußbodenheizung in allen Räumen (kann im sommer zum Kühlen genutzt werden)',
            'Wärmepumpe durch Photovoltaik auf dem Hausdach betrieben',
            'Wohnungszentrale Lüftungsanlage mit Wärmerückgewinnung',
            'durchgängiges,hochwertiges, helles Eichenparkett in allen Wohnräumen',
            'helle Fliesen in Küche und Diele',
            'elektrische Rolläden',
            'LAN-Anschluss in jedem Wohnraum',
            'Zugang zu Fahrradstellplätzen und Gartenfläche',
            'Kellerabteil',
            'KFW 40plus',
            'KFW Nachhaltiges Bauen',
        ],
        location: [
            'Der Standort im Stadtteil Aubing liegt in einem ruhigen Wohngebiet an einer Bogenstraße ohne' +
            'Durchgangsverkehr. In direkter Nachbarschaft befindet sich eine große Grünanlage mit zwei sehr schönen' +
            'Spielplätzen. Der Park erstreckt sich nach Norden bis zur Langwieder Haide, die zu ausgedehnten ' +
            'Spaziergängen und Sportaktivitäten direkt vor der Haustür startend einlädt.',

            'Eine Minute entfernt hält die S4 Leienfelsstraße in Richtung Hauptbahnhof und Geltendorf. Mit der S-Bahn' +
            'erreichen Sie Pasing mit Anbindung an den Fernverkehr, dem Einkaufszentrum “Pasing Arcaden" in nur 3 ' +
            'Minuten. Die Münchner Innenstadt und der Hauptbahnhof sind mit der S-Bahn nur 16 Minuten entfernt. ' +
            'Fußläufig erreichen Sie Bäckerei Mayer (5 min), einen Getränkemarkt (5 min), das Paul-Ottmann-Zentrum ' +
            '(15 min, mit EDEKA, PENNY, Rackls Backstubn, Café mit Außenplätzen, Apotheke, Sanitätshaus, Ärztehaus, ' +
            'großer Kita, großer Stadtbibliothek, Kiosk, Friseur und Juwelier) und das Aubinger Ortszentrum mit ' +
            'weiteren Ladengeschäften (15 min). Ebenso gibt es in Laufnähe mehrere Kitas, Kindergärten und Schulen.',

            'Über Grünstreifen und Nebenstraßen erreichen Sie mit dem Fahrrad ampelfrei den Fahrrad-Schnellweg in ' +
            'Richtung Innenstadt.',

            'E-Ladestationen für PKW der Stadtwerke München befinden sich 2 min entfernt.',

            'Im benachbarten Stadtteil Freiham befinden sich ein Möbelhaus, ein Küchenstudio, Baumärkte und zahlreiche ' +
            'Fachgeschäfte. Eine moderne Boulderhalle und Tennisplätze ergänzen das Angebot an Sportmöglichkeiten.',

        ],

    },
    {
        id: '7',
        teaserTitle: 'Neugebaute Erdgeschosswohnung mit Süd- und Ost-Terrasse',
        teaserText: 'Die zwei zusätzlichen Souterrainzimmer',
        previewImg: '/img/DSC_7889.NEF.jpg',
        rooms: '4',
        squareMeter: '100',
        available: false,
    },
    {
        id: '3',
        teaserTitle: 'Exklusive 2-Zimmer-Wohnung mit zwei Balkonen',
        teaserText: 'Das großzügige Wohnzimmer mit Süd- und Ostbalkon',
        previewImg: '/img/DSC_7892.NEF.jpg',
        rooms: '2',
        squareMeter: '70',
        available: false,
    },
]

export function listFlats() {
    return new Promise(resolve => resolve(flats));
}

export function getFlat(flatId) {
    return new Promise(resolve => resolve(flats.find(f => f.id === flatId)));
}