import PostForm from "@/components/add-post/PostForm";
import AllPosts from "@/components/AllPosts/AllPosts";
import API_BASE_URL from "@/utils/baseURL";
import axios from "axios";


const getPosts = async () => {

  const response = await axios.get(`${API_BASE_URL}/api/posts`);
  return response.data;
}

export default async function Home() {
const posts=await getPosts();
  return (
   <>
      <div className='bg-cyan-200 p-4'>
        <PostForm/>
        <AllPosts posts={posts} />
      </div>
   </>
  );
}
