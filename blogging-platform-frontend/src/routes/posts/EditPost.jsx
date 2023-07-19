import {
  Form,
  useLoaderData,
  useActionData,
  Link,
  redirect,
} from "react-router-dom";

export async function loader({ params }) {
  const postResponse = await fetch(`/api/posts/${params.id}`);
  const post = await postResponse.json();
  return { post };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const preparedPost = { ...updates };
  const response = await fetch(`/api/posts/${params.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(preparedPost),
  });

  if (response.ok) {
    return redirect(`/posts/${params.id}`);
  } else {
    const { errors } = await response.json();
    return errors;
  }
}

function EditPost() {
  const { post } = useLoaderData();
  const errors = useActionData();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Link to={`/posts/${post.id}`}>{"<"} Back</Link>
      <Form method="post" className="selection:bg-blue-200 flex flex-col gap-2">
        <h1 className="text-white">Edit Blog Posting</h1>
        {errors && <div className="text-red-300">{errors}</div>}

        <fieldset className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="border-4 focus:outline-none p-2"
            defaultValue={post.title}
          />
        </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="company">Content</label>
            <input
              type="text"
              name="content"
              id="content"
              className="border-4 focus:outline-none p-2"
              defaultValue={post.content}
            />
          </fieldset>
        <input
          className="bg-blue-500 hover:bg-blue-600 text-white transition mt-4 py-2 cursor-pointer "
          type="submit"
        ></input>
      </Form>
    </div>
  );
}

export default EditPost;
