## Coding Challenge

### Req1:
1. Create express.js app and use postgres sql as database.
2. Make routes where user can register itself. Required fields of user are name, email and password.
3. User can login with its email and password and gets a JWT token.
4. Logged in users can create a post. Post has 3 attribues title, description and a photo.

### Approach

1. Create the following routes:
- POST api/register
<img width="718" alt="api_login" src="https://user-images.githubusercontent.com/53372490/95550553-f3e0d880-09bd-11eb-900b-4855971c98ba.png">
![image](https://user-images.githubusercontent.com/53372490/95549672-8b452c00-09bc-11eb-863a-376eaff76743.png)

- POST api/login
https://user-images.githubusercontent.com/53372490/95549775-bb8cca80-09bc-11eb-94b8-1134bf997fdf.png

- POST api/posts
- GET api/posts

2. Setup JWT token authentication

3. Setup validators

4. Generate models and migration files

5. Store photo in S3
