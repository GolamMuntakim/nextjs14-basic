import Link from "next/link"
import getAllPosts from "../lib/getAllPosts"

export default async function Posts() {
    const posts= await getAllPosts()
    console.log(posts)
  return (
    <div>
      <h1 className="mt-6">
        All posts
      </h1>
      <div className="mt-6 grid grid-cols-4 gap-10">
        {
            posts.map((post)=>(
                <div className="w-[300px] bg-cyan-950 text-white p-4 rounded-md" key={post?.id}>
                  <Link href={`/post/${post?.id}`}><h1>{post?.title}</h1></Link>
                    <p>{post?.body}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}
