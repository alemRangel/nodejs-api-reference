# Node.js API

This repository holds the source code of a **template** for the development of a **Node.js api** written mainly in typescript.
<br/><br/><br/>

## Before start ##

### Demo ###

This template uses a Pet CRUD example to explain the API flux. Each example file has an underscore prefix, *e.g. _Pet.ts*. 

### Cascade explanation ###

Each module of the architecture contains a **guidelines&#46;md** file with specific explanation about the details of each module. (e.g. /http/controllers).
<br/><br/>

## Architecture design

The template uses a architecure based on [Uncle Bob Clean architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html). and a Generic Model View Controller pattern

### Overview ### 
In general terms, the architecture uses the following structure:
  - /src: Business logic source.
  - /http: Http resources such as endpoints, controllers and websockets.
  - /assets: Project resources such as scripts, images and files.

### Business logic > */src* ###
  - /models: Store the system model, *e.g. Car, Agency, etc*.
  - /repositories: Represent the abstractions (interfaces) of system actions, e.g queries, transaction, etc.
    > Each repository is grouped by source, *e.g. sql, gmail, aws, etc.*
  - /sources: Are the implementations of the repository methods. 

 > In other words the repositories handle what is going to be done. *e.g. getPetList()* and the sources implement that action e.g. *query_to_database*

### Http resources > */http* ###
  - routes.ts: Handle the endpoints representations. [Details](/http/guidelines.md).
  - /controllers: Are the link between the business logic and http routes (GETs, SETs, PUTs). [Details](/http/controllers/guidelines.md).

    > It is the most important module of the architecture because it is the responsable of linking the data requirements (repositories), with the business logic (use cases).

  - /extensions: Are auxiliary classes of controllers in case of complex use cases *e.g complex algorithms, AI, ML.
  - /tests: Are jMeter files for endpoint testing.

### Assets > */assets* ###
  - /dev: Resources related to the development of the project *e.g db.sql*.
  - /public: Resources that are publicly accessible *e.g profile_image.png, doc.pdf*.
<br/><br/>

### Configuration > */* ###
  - app.ts: Handle server initialization and version managment of endpoints.
  - package.json & tsconfig.json: Handle the project configuration such as dependencies, paths and module definition
  - .env.example & .env: Define the environment variables which are mainly used to store secret_keys.

## Pre-requisites:

 * Download & install [Node js](https://nodejs.org/en/download/) or an equivalent
 * Download & install [Visual Studio code](https://code.visualstudio.com/) or an equivalent (optional)

### To start coding and build:

 * Clone this repository
 * Create an .env file with the project credentials (See [example](./.env.example))
 * Install dependencies
 ```bash
 $ npm install
 ```
 * Install typescript
 ```bash
 $ npm install -g typescript
 ```
 * Compile typescript (Optional)
 ```bash
 $ tsc
 ```
 * Run server
 ```bash
 $ npm start
 ```

 ### To generate documentation

 * Install apidoc
 ```bash
 $ npm install apidoc -g
 ```
 * Generate docs
 ```bash
 $ apidoc -i http/ -o docs/ -t assets/dev/docs_template/
 ```

  ### Examples *Pets CRUD*

 * Example docs
 ```bash
 http://localhost:4004/docs
 ```
  * Example requests 
 ```bash
 GET http://localhost:4004/v1/toys
 ```


