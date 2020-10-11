## Coding Challenge

## Req 3:
1. A post can have multiple comments. Comments will show the user who commented and the comment.
2. Need to add pagination in the post and in the comments of the post.
3. User have the option to create their username. Update the user model.

### Approach
1. Create a Comment Model and its attributes/associations

2. Restructure files and organize end-points
  - api/user
  - api/posts
  
3. Create routes to accept comments
  POST api/comments/:id
  <img width="921" alt="create_api_comment" src="https://user-images.githubusercontent.com/53372490/95673639-4ad1e380-0b5f-11eb-91ad-a491d2728c1c.png">

4. Create pagination api to get all posts and comments
  GET api/posts?page=1&limit=5


5. Users can setup an optional username/screen-name

6. Use aws EB


