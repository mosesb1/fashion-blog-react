export default function Nav(props){
    return (
        <nav className="nav">
            <ul aria-label="Main Navigation" role="navigation" className={props.top ? 'nav-ul nav-head' : 'nav-ul nav foot'}>
                {
                    props.links.map((link, idx) => {
                        return(
                            <li key={idx}>
                                <a href='.' className={props.top ? 'nav-link-header' : 'nav-link-footer'}>
                                    {link}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}