import {
  Form,
  redirect,
  useActionData, Link, useLoaderData
} from "react-router-dom";

export async function loader() {
    const postResponse = await fetch(`/api/posts`);
    const post = await postResponse.json();
    return { post };
  }

export async function action({ request }) {
  let formData = await request.formData();
  let postData = Object.fromEntries(formData);
  try {
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    if (response.ok) {
      return redirect("/");
    }
    const { errors } = await response.json();
    return errors;
  } catch (error) {
    console.error(error);
    return "Whoops! Something went wrong";
  }
}

function AddPost() {
  const errors = useActionData();
  const { post } = useLoaderData();

  return (
    <Form method="post" className="selection:bg-blue-200 flex flex-col gap-2">
      <h1 className="text-2xl pt-3">Add Blog Post</h1>
      <Link to={`/`}>{"<"} Back</Link>
      {errors && <div className="text-red-300">{errors}</div>}
      <fieldset className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="border-4 focus:outline-none p-2"
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="title">Content</label>
        <input
          type="text"
          name="content"
          id="content"
          className="border-4 focus:outline-none p-2"
        />
      </fieldset>

      <input
        className="bg-blue-500 hover:bg-blue-600 text-white transition mt-4 py-2 cursor-pointer "
        type="submit"
      ></input>
    </Form>
  );
}

export default AddPost;
