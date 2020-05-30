<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/atjhoendz/qrary-semantic-frontend">
    <img src="public/img/icons/android-chrome-maskable-512x512.png" alt="Logo" width="100" height="100">
  </a>

  <h2 align="center">Qrary Semantic</h2>

  <p align="center">
    Qrary semantic is a website version from Qrary Android Mobile application, which in this application we apply SPARQL with RDF turtle for the database technology. The main function of this website is to search the book in the database using a semantic system. The applying of semantic is the innovation we add from the mobile version.
    <br />
    <a href="https://qrary-semantic.herokuapp.com/"><strong><span style="font-size:20px">View Demo »</span></strong></a>
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
    * [API Documentation](#api-documentation)
    * [Setup Frontend Service](#setup-frontend-service)
* [Usage](#usage)
* [Dataset Schema](#dataset-schema)
* [Development Progress](#development-progress)
* [Contact](#contact)

## About The Project
### Overview
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
    Make sure your environment has ready by installing these down below:
    - Docker
    - Node 12 and up

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

### Upload Dataset
1. Go to Jena Fuseki Service <br>
> local : [http://localhost:3030](http://localhost:3030) <br>
> Demo : [https://qrary-fuseki-service.herokuapp.com/](https://qrary-fuseki-service.herokuapp.com/)
2. Click **manage dataset**
3. Add new Dataset with name **qrary**
4. Choose Dataset Type = Persistent
5. Upload the ttl file to the dataset
> turtle file: [https://raw.githubusercontent.com/atjhoendz/qrary-jena-fuseki-service/master/dataset/qrary.ttl](https://raw.githubusercontent.com/atjhoendz/qrary-jena-fuseki-service/master/dataset/qrary.ttl)
6. Wait until upload data success

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
make rundev
```
5. The service will be run on [http://localhost:3000/api](http://localhost:3000/api)

> Demo backend: [https://qrary-semantic-backend.herokuapp.com/api](https://qrary-semantic-backend.herokuapp.com/api)

### API Documentation

[https://documenter.getpostman.com/view/10257401/SztD4Sg6](https://documenter.getpostman.com/view/10257401/SztD4Sg6)

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

> Demo Frontend: [https://qrary-semantic.herokuapp.com/](https://qrary-semantic.herokuapp.com/)

## Usage
1. Open frontend service 
> local: [http://localhost:8080](http://localhost:8080) <br>
> demo: [https://qrary-semantic.herokuapp.com/](https://qrary-semantic.herokuapp.com/)
2. Open it in Mobile Device and Add to home screen (recommended)
3. Go to **Pencarian** menu
4. Search your favorite book at the search bar (ex: Laskar Pelangi)

## Dataset Schema
[![Dataset Schema][qrary-schema]]()

## Development Progress
- [x] Create mockup layout
- [x] Implement frontend layout
- [x] Setup jena fuseki
- [x] Setup Backend API
- [x] Get All Data
- [x] Get Spesific Book Data
- [x] Search Book
- [ ] Advanced search book

## Contact
- Mohamad Achun Armando - [achunarmando@gmail.com](mailto:achunarmando@gmail.com)
- Arif Rhizky Gilang - [rmkspls@mail.com](mailto:rmkspls@gmail.com)
- Refa Annisatul Ilma - [refaands@gmail.com](mailto:refaands@gmail.com)


<!-- MARKDOWN LINKS & IMAGES -->
[about-screenshot]: screenshots/About.png
[hal-cari-screenshot]: screenshots/Halaman-Pencarian.png
[hasil-cari-screenshot]: screenshots/Hasil-Pencarian.png
[detail-buku-screenshot]: screenshots/Detail-Buku.png
[qrary-schema]: screenshots/qrary-turtle-schema.png