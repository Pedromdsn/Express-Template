# Express Template with TypeScript, Jest and ESLint

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs/install) OR [NPM](https://www.npmjs.com/get-npm)
- [Docker](https://www.docker.com/get-started)


### Starting Production Server

1. Clone the repository.
2. Install dependencies.  
	`yarn` OR `npm install`
3. Create a `.env` file based on `.env.template`.
4. Start docker container OR use your own database.  
	`docker compose up -d`
5. Run migrations.
	`yarn migrate:deploy` OR `npm run migrate:deploy`
6. Start the server.  
	`yarn start` OR `npm start`
7. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  
### Starting Development Server

1. Clone the repository.
2. Install dependencies.  
	`yarn` OR `npm install`
3. Create a `.env` file based on `.env.template`.
4. Start docker container.  
	`docker compose up -d`
5. Run migrations.
	`yarn migrate:dev` OR `npm run migrate:dev`
6. Start the server.  
	`yarn dev` OR `npm run dev`
7. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.