import { useLoaderData, Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";

export async function loader({ params }) {
  const postResponse = await fetch(`/api/posts/${params.id}`);
  const post = await postResponse.json();
  return { post };
}

function Post() {
  const { post } = useLoaderData();
  const { id, title, content } = post;
  console.log(post)

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Link to="/">{"<"} Back</Link>
      <h1 className='text-2xl font-bold pt-3'>{title}</h1>
      <p className='pt-2'>
        <i>{content}</i>
      </p>

      <div className="flex my-2 justify-end">
        <Link
          to={`/posts/${id}/edit`}
          className="flex items-center gap-2 bg-blue-400 p-2 rounded-sm"
        >
          <FaPencilAlt /> Edit
        </Link>
      </div>
    </div>
  );
}

export default Post;
