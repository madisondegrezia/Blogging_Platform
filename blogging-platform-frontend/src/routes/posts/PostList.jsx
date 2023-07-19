import { Link, useLoaderData } from "react-router-dom";
import { BiDetail } from "react-icons/bi";

export async function loader() {
  // let url = "http://localhost:3000/posts";
  let url = "/api/posts";
  const response = await fetch(url);
  const posts = await response.json();
  return { posts };
}

const PostList = () => {
  const { posts } = useLoaderData();

  return (
    <>
      <div className="mt-5">
        {posts.map((post) => {
          const { id, title, content } = post;
          console.log(posts);
          return (
            <>
            <div className='flex flex-row justify-between'>
              <div key={`${id}${title}`} className="pb-5">
                <div className="text-3xl">{title}</div>
                <div>{content}</div>
              </div>
              <Link
                to={`/posts/${id}`}
                className="flex items-center gap-2 p-5 text-xl relative -top-6"
              >
                <BiDetail /> Info
              </Link>
              </div>
            </>
          );
        })}
        <div className="flex justify-between">
          <div></div>
          <div>
            <Link
              to="/posts/new"
              className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 hover:text-white transition"
            >
              + Add Post
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
