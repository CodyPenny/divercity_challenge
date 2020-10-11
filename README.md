## Coding Challenge

## Req 2:
1. A post will have an attribute when it was created.
2. Post returning api will calculate the time difference like 2s ago, 10d ago, 4w ago, 8m ago and 1yr ago.
3. A post can have multiple photos but atmost 5.
4. A post can be editied.

### Approach

1. Create the following routes:

  GET api/posts
  <img width="851" alt="get_api_posts" src="https://user-images.githubusercontent.com/53372490/95653889-c58ff580-0ab0-11eb-9781-5e734f27d894.png">

  PUT api/posts/body/:id
  <img width="819" alt="put_api_posts_body" src="https://user-images.githubusercontent.com/53372490/95664636-92745300-0afe-11eb-9ded-195af2e3bff2.png">

  PUT api/posts/add/images/:id
  <img width="843" alt="put_api_add_image" src="https://user-images.githubusercontent.com/53372490/95667191-6addb480-0b17-11eb-8efd-070b9a68628d.png">

  PUT api/posts/remove/images/:id
  <img width="854" alt="put_api_remove_image" src="https://user-images.githubusercontent.com/53372490/95668539-450ddb00-0b2a-11eb-9a32-bdd256612462.png">

  DELETE api/posts/:id
  <img width="848" alt="delete_api_post" src="https://user-images.githubusercontent.com/53372490/95668739-d2eac580-0b2c-11eb-81dd-fba9c7350b05.png">


2. Modify middleware methods to handle multiple image file uploads, max 5. If more than 5 images, it'll ignore the excess and handle the first 5.

3. Generate new migration files to reflect changes in dataType.

4. Sort posts by newest with time difference calculated on get all posts route

5. Store only the unique part of the s3 links in postgres

6. Handle edit requests for title and description

7. Handle edit requests for new file uploads and keep 5 max

8. Remove unwanted image files from S3

9. Delete post if user is author

