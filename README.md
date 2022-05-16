# Progressive Web Apps

![example workflow](https://img.shields.io/github/languages/count/DaanKetelaars/PWA?style=flat-square)
![example workflow](https://img.shields.io/github/last-commit/DaanKetelaars/PWA?style=flat-square)
![example workflow](https://img.shields.io/github/repo-size/DaanKetelaars/PWA?style=flat-square)


## Live DEMO
https://rijks-online.herokuapp.com

<img src="screenshot.png" alt="example of the live application" />

## Description
Voor progressive web applicaties kregen wij de taak om onze client side app van WAFS om te zetten naar een server side app. De app blijft hetzelfde, maar de functionaliteiten veranderen. Je bent nu meer met de server bezig dan client side javascript. Wij hebben voor de server side app nodejs en express gebruikt. Server side en een PWA bied je ook meer opties om je app nog robuuster te maken.

## Client side VS Server side
Voor dit project heb ik mijn client side Rijksmuseum app omgezet naar een server side app. Server side bied veel voordelen, tuurlijk is server side niet nodig voor een simpele app. Het ligt echt aan de app die je bouwt en de functionaliteiten van je app. Mijn Rijks Museum app zou best wel via server side kunnen werken. Hierdoor kan ik de routing simpeler en beter laten werken, ook wordt het regelen van data makkelijker. 

Ik zal eerst even kort client side en server side vergelijken met elkaar, wat zijn sommige verschillen tussen de 2.

Client Side
- The belangrijkste functie van client side is om de gevraagde output aan de eindgebruiker te leveren
- De client side is de front-end, dit is waar de eindgebruiker krijgt te zien waar hij of zij naar gezocht had.
- Client side apps werken op het systeem van de eindgebruiker
- Client side is minder qua beveiliging, dit omdat je gemakkelijker bij de code kan.

Server Side
- De belangrijkste functie van server side is het manipuleren en toegang geven tot de vereiste database op het verzoek van de eindgebruiker.
- Server side is meer een soort back-end, de code wordt verwerkt en het is niet zichtbaar voor de eindgebruiker.
- Server side apps werken op een web server
- Server side wordt gezien als meer veilige optie van het bouwen van applicaties.


Zoals je kan zien zijn er veel verschillen, server side is toch vaak een betere optie. Het is veiliger en je hebt meer opties qua het verwerken van data. Maar zoals ik al aangaf, ligt het echt aan de applicatie die je bouwt. Want soms kan client side genoeg zijn en heb je niet alle heisa van server side nodig.


## Activity Diagram
<img src="activity-diagram.jpg" alt="activity diagram" />

## Reflectie
Het was even wennen, maar na een tijdje was het eigenlijk best simpel en overzichtelijk. Ik vond het wel prettig werken en helemaal de service worker vond ik echt top. Dat je offline nog van alles kan aanbieden is heel mooi en maakt je app of website nog beter in mijn ogen. Ik moet wel eerlijk zijn dat ik in het begin echt moeite heb gehad met express, omdat ik er zelf nog niet veel mee gewerkt had. Alleen ben ik toch tevreden uiteindelijk over mijn app. 

## Table of Contents

- [Install](#install)
- [Features](#features)
- [Used Tools](#used-tools)
- [Meta](#meta)
- [License](#license)

## Install

Clone the GitHub Repo locally
```
git clone https://github.com/DaanKetelaars/PWA
```

Connect your API Key.

- Go to the Rijks Studio.
- Create an account.
- Go to advanced settings and ask for your own personal API key.
- Create an .env file and add your own API key. Name it API_KEY in the .env file.
```
`https://www.rijksmuseum.nl/api/nl/collection/?key=${api}`
```

Install all packages
```
npm install
```

Host this project on localhost. 
```
PORT = 8080
```

## Used Tools

- [git](https://git-scm.com/)
- [NodeJS](https://node.jshttps://nodejs.org)
- [ExpressJS](https://expressjs.com/)
- [rijks-api](https://data.rijksmuseum.nl/object-metadata/api/)

## Meta
For any questions, don't hesitate to reach out!
Daan Ketelaars - daanketelaars@gmail.com - https://github.com/DaanKetelaars/PWA

## License

Usage is provided under the [MIT License](https://github.com/git/git-scm.com/blob/master/MIT-LICENSE.txt) MIT. See [LICENSE](https://github.com/DaanKetelaars/PWA/blob/master/LICENSE) for the full details.


