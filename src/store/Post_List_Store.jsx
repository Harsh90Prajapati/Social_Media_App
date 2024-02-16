import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList:[],
  addPost: ()=>{},
  delPost:()=>{}, 
});

const postListReducer = ( currPostList , action)=>{
  let newPostList = currPostList;
  if( action.type === "Delete_Post" ){
    newPostList = currPostList.filter((post)=>post.id !== action.payload.postId)
  } else if(action.type === "ADD_POST"){
    newPostList = [action.payload , ...currPostList];
  }
  return newPostList;
}

const PostListProvider =({ children })=>{
  const[postList , dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_VALUE);
  
  const addPost =(userId , photo , caption , tags)=>{
    dispatchPostList({
      type:"ADD_POST",
      payload:{
        id: Date.now(),
        photo:photo,
        caption:caption,
        reaction: 15,
        tags:tags,
        userId:userId
        }
     })
  };

  const delPost =(postId)=>{
   dispatchPostList({
    type:"Delete_Post",
    payload:{
      postId
    }
   })
  };
    return (
    <PostList.Provider value={{postList , addPost , delPost }}>
        {children}
    </PostList.Provider>)
}

const DEFAULT_VALUE = [
  {
  id:'1',
  photo:'harsh.jpg',
  caption:'manali view',
  reaction: 15,
  tags:['vacation','enjoying'],
  userId:'user-69'
  },
  {
    id:'2',
    photo:'varanasi.jpg',
    caption:'Ganga ji ',
    reaction: 5,
    tags:['vacation','enjoying','gangaji'],
    userId:'user-59'
    }
]

export default PostListProvider;