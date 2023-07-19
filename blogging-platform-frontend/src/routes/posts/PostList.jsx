import { useLoaderData } from "react-router-dom";

export async function loader() {
  // let url = "http://localhost:3000/posts";
  let url = "/api/posts/posts";
  const response = await fetch(url);
  const posts = await response.json();
  return { posts };
}

const PostList = () => {
  const { posts } = useLoaderData();

  return (
    <>
      <div>
        {posts.map((post) => {
          const { id, title, content } = post;
          console.log(posts);
          return (
            <div key={`${id}${title}`}>
              <div>{title}</div>
              <div>{content}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PostList;
