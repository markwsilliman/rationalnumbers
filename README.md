# RationalNumbers.org blog

[RationalNumbers.org](https://rationalnumbers.org)

## How to add a new blog post

### Author

1. copy data/authors/default.mdx to data/authors/NEWAUTHOR.mdx
2. edit NEWAUTHOR.mdx to update author name and youtube channel link

### Blog Post

1. Though you can write your content from scratch it's often more efficient to have the [Math in Action custom GPT](https://chatgpt.com/g/g-673cd07fe6f88191b220164a887a9447-math-in-action) (built on top of ChatGPT) do the first copy for you.
2. You will want to do two prompts. One for middle school and the second for high school. Copy and paste the following examples and change the subject.

- For Middle School:

```
Write an article for middle school students discussing how math is used to successfully land the SpaceX boosters autonomously.  Provide markdown format which will be copied to a mdx file.  Include at least 2 math equations. Change all mathbf to use block math (with a $$ in front and back). For example change ( \mathbf{t} ) to $$\mathbf{t}$$.

Remember that middle school students do not know calculus and therefore the article cannot include derivates. Additionally middle school students do not know trigonometry and therefore the article cannot include cos, sin, tan.

After the article is created suggest a title and description as well as an image with dimensions 1792x1024.
```

- For High School:

```

Write an article for high school students explaining the math behind the monty hall problem and how it can help them win gameshows.  Provide markdown format which will be copied to a mdx file.  Include at least 2 math equations. Change all mathbf to use block math (with a $$ in front and back). For example change \( \mathbf{t} \) to $$\mathbf{t}$$.

Remember that high school students do know calculus and therefore the article can include derivates. Additionally high school students do know trigonometry and therefore the article can include cos, sin, tan. Additionally high school students know statistics so you can include that.

```

3. Save the image from the middle school prompt to public/static/images/TITLEOFARTICLE.png

4. Copy data/blog/default.mdx to data/blog/TITLEOFARTICLE.mdx. Edit data/blog/TITLEOFARTICLE.md

At the top of the file (directly under ---) set:

- title = use title from middle school prompt
- date = todays date in yyyy-mm-dd format
- lastmod = todays date in yyyy-mm-dd format
- tags = add relevant topics
- draft = false (it won't be published on the live website if left as true)
- summary = use description from middle school prompt
- images = ['public/static/images/TITLEOFARTICLE.png'] which you created in step 3
- authors = ['NEWAUTHOR'] which you created in step 1
- youtubeVideoID = LPZh9BOjkQs if your youtube video is https://www.youtube.com/watch?v=LPZh9BOjkQs
- youtubeStartTime = 48 would start the video at 48 seconds. 108 would start the video at 1 minute and 48 seconds.
- youtubeEndTime = 61 would end the video at 1 minute and 1 second.

5. Body of article. Continue editing data/blog/TITLEOFARTICLE.md

- Scroll down to "## MIDDLE SCHOOL GOES HERE" and replace it with the entire body of the middle school prompt the GPT made in step 2. Update the first H2 header "## Title of header" in the body to read "## MIDDLE SCHOOL: Title of header"
- Scroll down to "## HIGH SCHOOL GOES HERE" and replace it with the entire body of the high school prompt the GPT made in step 2. Update the first H2 header "## Title of header" in the body to read "## HIGH SCHOOL: Title of header"

6. yarn run dev

- Use the above command to run the development server locally and preview the blog at http://localhost:3000/

7. Pull request

- Use git to make a pull request for your change to be live on https://rationalnumbers.org/

## Technology

Blog built using [tail-windjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)

## Licence

[MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/LICENSE)

```

```

```

```

```

```
