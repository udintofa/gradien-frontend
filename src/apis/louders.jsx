export const blog = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts/')
}

export const blogById = ({ params }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
}