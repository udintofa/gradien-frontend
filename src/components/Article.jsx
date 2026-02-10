export default function Article (props) {
    return (
        <>
            <h3>{ props.title }</h3>
            <small>Tags: { props.tags.join(', ') }</small>
            <p>{ props.content }</p>
        </>
    )
}