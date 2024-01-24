// the component function
import Projects from "./Projects.js"

// the component function
const Main = (props) => {

    //The Components Returned JSX
    return <div className="Main"> 
    <Projects project="1" title="Cliché Bank" description="Quote Generator"/>
    <Projects project="2" title="Karaoke List" description="Track what Karaoke songs you have sang or want to sing."/></div>
}

// export the component
export default Main
