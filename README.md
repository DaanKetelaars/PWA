# Progressive Web Apps

![example workflow](https://img.shields.io/github/languages/count/DaanKetelaars/PWA?style=flat-square)
![example workflow](https://img.shields.io/github/last-commit/DaanKetelaars/PWA?style=flat-square)
![example workflow](https://img.shields.io/github/repo-size/DaanKetelaars/PWA?style=flat-square)


## Live DEMO
https://rijks-online.herokuapp.com

<img src="screenshot.png" alt="example of the live application" />

## Description
Voor progressive web applicaties kregen wij de taak om onze client side app van WAFS om te zetten naar een server side app. De app blijft hetzelfde, maar de functionaliteiten veranderen. Je bent nu meer met de server bezig dan client side javascript. Wij hebben voor de server side app nodejs en express gebruikt. Server side en een PWA bied je ook meer opties om je app nog robuuster te maken. 


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


