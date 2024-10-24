import getAllPosts from "@/app/lib/getAllPosts";
import getPost from "@/app/lib/getPost";
import getPostComment from "@/app/lib/getPostComment";
// dynamic meta data 
export async function generateMetadata({params}){
    const {id} = params;
    const post = await getPost(id);
    return {
        title : post.title ,
        description : "Generate By Create Next App"
    }
}
export default async function postPage({params}) {
    const {id} = params;
    const postPromise = await getPost(id);
    const commentsPromise = await getPostComment(id)
    const [post, comments] = await Promise.all([postPromise, commentsPromise])
    
    
  return (
    <div className="mt-6">
      <h2>post page</h2>
      <h1>{post?.title}</h1>
      <p className="mt-3">{post?.body}</p>
      <hr></hr>
      <div className="mt-10">
        <h1>Comments</h1>
        <div>
            {
                comments.map((comment)=>(
                    <div key={comment?.id}>
                        <h1>{comment?.body}</h1>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}
export async function generateStaticParams(){
    const posts = await getAllPosts()
    return posts.map((post)=>({
        id: post?.id.toString(),
        
    }))
}
