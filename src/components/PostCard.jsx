import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostCard() {
  const userId = useParams().id
  let [posts, setPosts] = useState([]);
  async function getData() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const result = await response.json();
    setPosts((posts = result));
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      {posts && (
        <>
          {posts.map((item) => (
            <div className="post__card" key={item.id}>
              <h2 className="post__title">{item.title}</h2>
              <p className="post__body">{item.body}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
}
export default PostCard;
