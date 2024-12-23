// import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
// import { allBlogs } from 'contentlayer/generated'
// import Main from './Main'

// export default async function Page() {
//   const sortedPosts = sortPosts(allBlogs)
//   const posts = allCoreContent(sortedPosts)
//   return <Main posts={posts} />
// }

import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Helping Math Teachers Show Why Math Matters' })

export default function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <>
      <div className="text-sm">
        We help middle and high school math teachers engage students with free video clips
        showcasing real-world applications of everyday math concepts.
      </div>
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Why Math Matters"
      />
    </>
  )
}
