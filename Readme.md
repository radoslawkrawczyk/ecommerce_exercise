# Installation

This project uses Laravel and React with React Redux

## Backend Installation
1. `cd backend/` - Enter the backend folder in terminal
2. `composer install` - Install all the PHP dependencies
3. Edit the .env file providing right credentials for the database
4. `php artisan migrate` - Migrate the MySQL tables
5. `php artisan db:seed` - Seed the database with sample data
6. `php artisan serve` - Run the development project locally on port 8000

## Frontend Installation
1. `cd frontend/` - Same as above but with the frontend catalog
2. `yarn install` - Install node_modules
3. Edit `src/index.js` line 17 to provide the right API URL
4. `yarn start` - Start the local app on port 3000

## REST Route list
`POST /api/products/add` - Route expecting a `csv` field with a CSV file. Sample CSV file is provided
`GET /products` - Lists all of the products
`GET /product/:id` - Shows details about a single product
`POST /products/search` - Route expecting a `search` file, returning found products