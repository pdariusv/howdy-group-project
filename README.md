## Setting up a local back end server

1. Make sure you're in the backend directory `cd backend`
2. Install the backend dependencies `npm install`
3. Install [mongodb](https://docs.mongodb.com/manual/administration/install-community/)
4. Start the mongodb database `mongod --config mongod.conf`
5. Start the actual server `npm start`
6. Initialize the database `node ./src/init.server.js`
   - ONLY RUN THIS ONCE.

## First release

We need the following features to go live with the forum.

1) Home Page: list of posts (title and short snippet), categories
2) Individual Post Page: title and body, hash tags, comments (name and avatar), time, author (name and avatar) reply function, ratings (post and comments), social media share.
3) New post page
4) Filter by category
5) User creation with avatar.
