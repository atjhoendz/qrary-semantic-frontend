<!-- # Qrary Semantic (frontend) -->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/atjhoendz/qrary-semantic-frontend">
    <img src="public/img/icons/android-chrome-maskable-512x512.png" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center">Qrary Semantic</h2>

  <p align="center">
    Qrary is a lorem ipsum dolor sit amet blabalbalbalbal balbele
    <br />
    <a href="https://qrary-semantic.herokuapp.com/"><strong>View Demo »</strong></a>
    <br />
    <br />
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
    * [Setup Jena Fuseki Service](#setup-jena-fuseki-service)
    * [Setup Backend Service](#setup-backend-service)
    * [Setup Frontend Service](#setup-frontend-service)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## About The Project

[![About][about-screenshot]]()
[![Halaman Pencarian][hal-cari-screenshot]]()
[![Hasil Pencarian][hasil-cari-screenshot]]()
[![Detail Buku][detail-buku-screenshot]]()

### Built With
* [Vue JS](https://vuejs.org/)
* [Express JS](https://expressjs.com/)
* [Jena Fuseki](https://jena.apache.org/documentation/fuseki2/)

## Getting Started
### Prerequisites
    Pastikan environment kamu terinstall :
    - Docker
    - Node 12.0 and up
### Installation

To run project locally :

### Setup Jena Fuseki Service
1. Clone [https://github.com/atjhoendz/qrary-jena-fuseki-service](https://github.com/atjhoendz/qrary-jena-fuseki-service)
```sh
git clone https://github.com/atjhoendz/qrary-jena-fuseki-service.git
```
2. Open terminal into directory project
```sh
cd qrary-jena-fuseki-service
```
3. Run the docker
```sh
docker-compose up -d
```
4. The service will be run on [http://localhost:3030](http://localhost:3030)

### Setup Backend Service
1. Clone [https://github.com/atjhoendz/qrary-semantic-backend](https://github.com/atjhoendz/qrary-semantic-backend)
```sh
git clone https://github.com/atjhoendz/qrary-semantic-backend.git
```
2. Move to the directory
```sh
cd qrary-semantic-backend
```
3. For the first time, build the project first
```sh
docker-compose build
```
4. After this build, you just run it
```sh
docker-compose up -d
```
or
```sh
make run
```
5. The service will be run on [http://localhost:3000/api](http://localhost:3000/api)

### Setup Frontend Service
1. Clone https://github.com/atjhoendz/qrary-semantic-frontend
```sh
git clone https://github.com/atjhoendz/qrary-semantic-frontend.git
```
2. Move to directory project
```sh
cd qrary-semantic-frontend
```
3. Install dependencies
```sh
npm install
```
4. Serve it
```sh
npm run serve
```
5. The service will be run on [http://localhost:8080](http://localhost:8080)


<!-- MARKDOWN LINKS & IMAGES -->
[about-screenshot]: screenshots/About.png
[hal-cari-screenshot]: screenshots/Halaman-Pencarian.png
[hasil-cari-screenshot]: screenshots/Hasil-Pencarian.png
[detail-buku-screenshot]: screenshots/Detail-Buku.png
