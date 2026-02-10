import { Link } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

export default function Blogs () {
    const externalData = useLoaderData()

    return (
        <>
            <h2>Data Eksternal</h2>
            <ul>
                {externalData.map((item, index) => (
                    <div key={index}>
                        <Link to={`/blogs/${item.id}`}>
                            <li key={index}>
                                <h3>{item.title}</h3>
                            </li>
                        </Link>
                    </div>
            ))}
            </ul>
        </>
    )
}