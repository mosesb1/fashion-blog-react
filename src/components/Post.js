export default function Post(props) {
    return (
        <article className="blog-post">
            <h2 className="date">{props.date}</h2>
            <h1 className="blog-title">{props.title}</h1>
            <img src={props.img} alt={props.alt} className="blog-picture"/>
            <p>{props.text}</p>
            <a href='.' className="continue">Continues ...</a>
        </article>
    )
}