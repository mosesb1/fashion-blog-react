import Nav from './Nav';
import Copyright from './Copyright';

export default function Footer(props) {
    return (
        <>
            <Nav top={false} links={["Home", "Women's", "Men's", "On the Street", "The Catwalk", "Ad Watch", "About", "Tips"]}/>
            <Copyright />
        </>
    )
}