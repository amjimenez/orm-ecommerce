# E-commerce Back End Starter 

## User Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

# Steps to Run App
- Create `.env` file in project root with the following key value pairs

```
DB_HOST="127.0.0.1" # replace with hos
DB_USER=user # replace with username
DB_PASS=pass # replace with password
DB_NAME=ecommerce_db
```

- Make sure mysql server is running locally
  - mysql.server status
  - mysql.server start
- Navigate to project root
- Import database schema
  - mysql -u root -p < db/schema.sql
- Run seeds command to generate test data
  - node seeds/index.js 
- Install dependencies
  - npm install
- Run app
  - node server.js
```
## Walkthrough Video Links
```
https://www.kapwing.com/videos/62bcc6b51e1a6400de101484
```
https://www.kapwing.com/videos/62bcc6b51e1a6400de101484
```
## Github Link
```
https://amjimenez.github.io/orm-ecommerce/
