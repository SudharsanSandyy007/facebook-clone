import React, { useEffect, useState } from "react";
import db from "./firebase";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryRow from "./StoryRow";
import { collection, getDocs } from "firebase/firestore";
function Feed() {
  const [posts, setPosts] = useState([]);
  const postsRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsRef);
      console.log(data);
    };
    getPosts();
  }, []);

  console.log("posts>>>", posts);

  return (
    <div className="feed">
      <StoryRow />
      <MessageSender />
      <div className="feed__posts">
        {posts.map((post) => (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            displayName={post.data.displayName}
            timestamp={post.data.timestamp}
            msg={post.data.msg}
            image={post.data.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
