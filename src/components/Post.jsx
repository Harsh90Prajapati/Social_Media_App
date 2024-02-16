import { useContext } from "react";
import { FcLike } from "react-icons/fc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PostList as PostListData } from "../store/Post_List_Store";
const Post = ({ post }) => {

  const{ delPost }=useContext(PostListData)
  return (
    <div className="w-full sm:w-[550px] rounded-md">
      <hr />
      <div className="p-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
          <img src="harsh.jpg" alt="" className="w-8 rounded-full" />
          <h1>{post.userId}</h1>
          </div>
          <RiDeleteBin6Line className="font-light hover:text-red-500 cursor-pointer" onClick={()=>delPost(post.id)}/>
      </div>
      <img src={post.photo} className="border" alt="..." />
      <div className=" p-2 space-y-2">
        <div className="flex w-14 p-1 gap-1 justify-center items-center shadow-inner shadow-slate-200 text-slate-500 rounded-full">
        <FcLike  className="cursor-pointer " size={20} />{post.reaction}
        </div>
          <p className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-e-lg  uppercase ">{post.caption}</p>
          {post.tags.map(tags=><span key={tags} className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mr-1">#{tags}</span>)}
          <input className="shadow-inner w-full rounded-md px-2 py-1 outline-none placeholder:text-slate-200 border" placeholder='Comments'/>
      </div>
      <hr />
    </div>
  );
};

export default Post;
