# Challenge
## Setup
This project was built and tested in node 8. 
Dependencies:
sqlite3
yarn

### To Run
- `yarn install`

- `yarn db:seed` to seed your sqlite database with some predefined user data

- if you want to reset your database, run `yarn db:drop` to clear your database or find the file ebhomework.db in your db folder and remove it

- `yarn server` will kick off the api server

- `yarn start` will kick off the react development server

## Frontend

### User list
- Create a user list as specified in the design.png drawing using the data from the api server (should be able to paginate after you finish the pagination task from the backend portion)

### User page
- Create a user details page that can be shown when a user clicks on a user from the user list, note the back button in the top left hand corner

## Backend

### Pagination
- Update the user route to handle pagination, the api should accept ?page=<page_number> and the api response should include the next page, null if there is no next page. Up to you if you'd like to include more data like total object count or a ?page_size=<page_size_number> argument

## Full stack

### Create server side search
- Update the user route to handle a ?query=<search_string> parameter, then implement fetching that search query from the client in the search bar shown in the design.png file. 

