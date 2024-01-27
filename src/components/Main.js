// the component function
import Projects from "./Projects.js"


// the component function
const Main = (props) => {

    //The Components Returned JSX
    return <div className="Main"> 
    <div style={{backgroundImage: `url("https://www.shutterstock.com/image-photo/thoughtful-man-260nw-198612905.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}><Projects project="1" title="Cliché Bank" description="Quote Generator" link="https://seal-project-1.vercel.app/" github="https://github.com/rohansinha01/seal-project-1" /></div>
    <div style={{backgroundImage: `url("https://media.npr.org/assets/img/2022/05/18/sol-cotti---npr-sing_slide-973b3e8ad2b6450ef459be6ca4ef43e683b02f0a-s1100-c50.jpg")`, color: "darkblue", textShadow: "1px 1px 2px pink"}}><Projects project="2" title="Karaoke List" description="Track what Karaoke songs you have sang or want to sing." link="https://karaoke-list.onrender.com/songs" github="https://github.com/rohansinha01/karaoke-link" /></div>
    <div style={{color: "red", textShadow: "1px 1px 2px pink"}}><Projects project="3" title="Group Project" description="Possibly the greatest Group Project GA has ever seen." link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" github="https://www.youtube.com/watch?v=47n6v4e3QJE" /></div>
    </div>
}

// export the component
export default Main
