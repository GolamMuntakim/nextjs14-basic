import Link from "next/link"

export default function page() {
    const blogs=[
        {
            "id" : 1,
            "title" : "Javascript",
            "description" : "Best for web development"
        },
        {
            "id" : 2,
            "title" : "Python",
            "description" : "Enhance the power of AI"
        },
    ]
  return (
    <div>
     <h1 className="text-center font-bold text-4xl text-cyan-400">My Blogs</h1>
     <p className="grid grid-cols-2  mt-10 m-4">
        {
            blogs.map((blog)=>(
                <Link href={`/blog/${blog?.id}`} key={blog?.id} className="bg-zinc-800 text-white font-mono w-56 h-28 p-4 rounded-md text-center">
                    <h1 className="text-xl">{blog?.title}</h1>
                    <p>{blog?.description}</p>
                </Link>
            ))
        }
     </p>
    </div>
  )
}
