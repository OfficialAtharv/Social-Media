import { createContext, useReducer } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  else if(action.type === "ADD_POST"){
    newPostList = [action.payload, ...currentPostList]
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, postTitle, postBody, reaction, tags) => {
    dispatchPostList({
      type:'ADD_POST',
      payload:{
        
          id: Date.now(),
          title: postTitle,
          body: postBody,
          reactions: reaction,
          userId: userId,
          tags: tags,
       
      }
    })
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "Hii friends i am going to mumbai for my vactions , Hope to enjoy alot",
    reactions: 2,
    userId: "user-9",
    tags: ["vacations", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Going to learn MERN STACK",
    body: "Hey Folks I am Going To Learn MERN STACK For my better cerrier goals and my best job in IT Field",
    reactions: 15,
    userId: "user-8",
    tags: ["REACT", "MERN", "MANAGOS", "NODE", "Coooing"],
  },
];
export default PostListProvider;
