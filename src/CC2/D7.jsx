import React,{ useState,useEffect } from "react";
import axios from "axios";


export default function D7() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://642a6f8700dfa3b54745ac1d.mockapi.io/books`).then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return null;

  return (
    <div>
        {post.map((item)=>(
            <table class="table">
            <tr>
             <td scope="row" key={item.id}>{item.Author}</td>
             <td key={item.id}>{item.Book}</td>
            </tr>
            </table>
        ))}
     

    </div>
  );
}