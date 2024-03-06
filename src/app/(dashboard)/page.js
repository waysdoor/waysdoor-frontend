import PostForm from "@/components/add-post/PostForm";
import API_BASE_URL from "@/utils/baseURL";
import Post from "@/components/post"
const getPosts = async () => {
  "use server"
  // const response = await axios.get(`${API_BASE_URL}/api/posts`);
  const data = await fetch(`${API_BASE_URL}/api/posts`,{next:{tags:['posts']}})
  const response = await data.json();
  return response;
}

export default async function Home() {
  
const posts=await getPosts();
  return (
   <>
      <div className=' p-4'>
        <PostForm/>
        <h1 className='text-xl mt-10 font-bold text-black'>All Posts:</h1>
        {posts.map((post, index) => (
        <Post key={index} post={post} />
        
        ))}
      </div>
   </>
  );
}
