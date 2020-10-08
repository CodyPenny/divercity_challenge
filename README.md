## Coding Challenge

### Req1:
1. Create express.js app and use postgres sql as database.
2. Make routes where user can register itself. Required fields of user are name, email and password.
3. User can login with its email and password and gets a JWT token.
4. Logged in users can create a post. Post has 3 attribues title, description and a photo.

### Approach

1. Create the following routes:
- POST api/register
- POST api/login
- POST api/posts
- GET api/posts

2. Setup JWT token authentication

3. Setup validators

4. Generate models and migration files

5. Store photo in S3