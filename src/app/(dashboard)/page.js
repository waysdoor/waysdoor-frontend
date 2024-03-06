import PostForm from "@/components/add-post/PostForm";
import Post from "@/components/post/Post";
import API_BASE_URL from "@/utils/baseURL";

const getPosts = async () => {
  "use server"
  // const response = await axios.get(`${API_BASE_URL}/api/posts`);
  const data = await fetch(`${API_BASE_URL}/api/posts`,{next:{tags:['posts']}})
  const response = await data.json();
  return response;
}

export default async function index() {
  
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
