import Post from './Post';
import brooklynPic from '../images/blog-image-1.jpeg';
import voguePic from '../images/blog-image-2.jpeg';

export default function Main(props) {
    return (
        <div>
            <Post date='11/12/20' 
                title='On the Street in Brooklyn' 
                img={brooklynPic} 
                alt='a brooklyn street'
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum nam beatae ratione atque aut veniam quos ipsum maiores a recusandae, accusantium provident amet, laborum quidem labore pariatur voluptatum ea dolore."
            />
            <Post 
                date='11/11/20'
                title='Vintage in Vogue'
                img={voguePic}
                alt='3 people gathered'
                text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea libero ipsam est voluptate maxime nam alias blanditiis quam ipsum asperiores, dolorum, earum velit tempore aspernatur eaque, similique quia at sed."/>
        </div>
    )
}