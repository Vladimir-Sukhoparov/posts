import { useRouter } from "next/router";
import React from "react";

const Post = ({ post }) => {
  const { query } = useRouter();

  return (
    <div>
      <h1>Post #{query.id}:</h1>
      <h1>{post.title}</h1>

    </div>
  );
};
export default Post;


export async function getServerSideProps ({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await response.json()
  return {
   props:{post}
  };
}
