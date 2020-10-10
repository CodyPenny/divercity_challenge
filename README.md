## Coding Challenge

### Req1:
1. Create express.js app and use postgres sql as database.
2. Make routes where user can register itself. Required fields of user are name, email and password.
3. User can login with its email and password and gets a JWT token.
4. Logged in users can create a post. Post has 3 attribues title, description and a photo.

### Approach

1. Create the following routes:
- POST api/register
  <img width="717" alt="api_register" src="https://user-images.githubusercontent.com/53372490/95550671-1d99ff80-09be-11eb-9f29-9295ab562d88.png">

- POST api/login
  <img width="718" alt="api_login" src="https://user-images.githubusercontent.com/53372490/95550553-f3e0d880-09bd-11eb-900b-4855971c98ba.png">

- POST api/posts
  <img width="961" alt="api_posts" src="https://user-images.githubusercontent.com/53372490/95643718-bdf72f00-0a65-11eb-9f51-46822adbd686.png">


2. Setup JWT token authentication

3. Setup route handlers and validators

4. Generate models and migration files

5. Store image files in S3
