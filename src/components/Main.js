// the component function
import Projects from "./Projects.js"

// the component function
const Main = (props) => {

    //The Components Returned JSX
    return <div className="Main"> 
    <Projects project="1" title="Cliché Bank" description="Quote Generator" link="https://seal-project-1.vercel.app/" github="https://github.com/rohansinha01/seal-project-1"/>
    <Projects project="2" title="Karaoke List" description="Track what Karaoke songs you have sang or want to sing." link="https://karaoke-list.onrender.com/songs" github="https://github.com/rohansinha01/karaoke-link"/></div>
}

// export the component
export default Main
