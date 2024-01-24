// the component function
const Projects = (props) => {

    //The Components Returned JSX
    return <div className="Projects">
        <h2>Project {props.project}</h2>
        <h3>{props.title}</h3>
        <p>{props.description}</p>

    </div>
}

// export the component
export default Projects
