## Setting up a local back end server

1. Make sure you're in the backend directory `cd backend`
2. Install the backend dependencies `npm install`
3. Install [mongodb](https://docs.mongodb.com/manual/administration/install-community/)
4. Start the mongodb database `mongod --config mongod.conf`
5. Start the actual server `npm start`
6. Initialize the database `node ./src/init.server.js`
   - ONLY RUN THIS ONCE.
