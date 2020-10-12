## Coding Challenge

## Req 3:
1. A post can have multiple comments. Comments will show the user who commented and the comment.
2. Need to add pagination in the post and in the comments of the post.
3. User have the option to create their username. Update the user model.

### Approach
1. Create a Comment Model and its attributes/associations via sequelize-cli

2. Restructure files and organize end-points
  - api/user
  - api/posts
  
3. Create route to create comments
  ### POST api/comments/:id
  <img width="921" alt="create_api_comment" src="https://user-images.githubusercontent.com/53372490/95673639-4ad1e380-0b5f-11eb-91ad-a491d2728c1c.png">

4. Create pagination api to get all posts and comments 
- going with the method where the client provides page number and size through query. API returns the instances with total count. 

  Shows most recent post first and oldest first for comments. 
  Here's a version that returns only the posts and count
  ### GET api/posts?page=1&limit=3
  <img width="830" alt="paginate_posts" src="https://user-images.githubusercontent.com/53372490/95691976-282fe100-0bd8-11eb-9239-7630332ff7b5.png">

  And here's another version that returns posts, post count, and its associated comments count (same api as above)

  <img width="856" alt="paginate_posts_commentCount" src="https://user-images.githubusercontent.com/53372490/95702046-1104e980-0c00-11eb-936d-9959868fa2a6.png">

  This route will provide comments for a single post
  ### GET api/comments/:id?page=1&limit=3
  <img width="832" alt="paginate_comments" src="https://user-images.githubusercontent.com/53372490/95696776-5ec62580-0bf1-11eb-8694-38f6916f8f52.png">

5. Users can setup an optional username/screen-name

6. Use aws EB


