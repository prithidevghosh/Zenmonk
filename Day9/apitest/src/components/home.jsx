import { useEffect, useState } from "react";
import { getPost } from "../services/api"

export default function Home() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getPost().then((response) => {
      setPost(response.data);
    }).catch((err) => {
      setError(err);
      console.log(error);
    })

      ;
  }, []);

  return (
    <div>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};