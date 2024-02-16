import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post_List_Store";

const PostList =()=>{
    
    const{ postList }=useContext(PostListData);

    return( 
        <div className="flex flex-col justify-center items-center">
        {postList.map((post)=>(
            <Post key={post.id} post={post}/>
        ))}
        </div>
    );
}

export default PostList;