import Title from './Title';
import Subtitle from './Subtitle';
import Nav from './Nav';

export default function Header(props) {
    return (
        <>
            <Title text="Sartre's List"/>
            <Subtitle text='Better-Dressed People'/>
            <Nav top={true} links={["Women's", "Men's", "On the Street", "The Catwalk", "Ad Watch", "About"]}/>
        </>
    )
}