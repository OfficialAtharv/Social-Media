import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./componants/Header";
import Footer from "./componants/Footer";
import SideBar from "./componants/SideBar";
import CreatePost from "./componants/CreatePost";
// import Post from "./componants/Post";
import PostList from "./componants/PostList";
import { useState } from "react";
import PostListProvider from "./store/Post-list-store";

function App() {
  const [selectedtab, setSelectedtab] = useState("Home");
  return (
    <PostListProvider>
    <div className="app_container">
      <SideBar selectedtab ={selectedtab} setSelectedtab ={setSelectedtab}></SideBar>
      <div className="content">
        <Header></Header>
        {selectedtab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
        
        
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
