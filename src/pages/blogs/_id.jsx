import { useLoaderData } from "react-router-dom";

export default function SingleBlog() {
    const blogData = useLoaderData();

    return (
        <>
            <h2>Blog Detail</h2>
            <h3>{blogData?.title}</h3>
            <p>{blogData?.body}</p>
        </>
    );
}