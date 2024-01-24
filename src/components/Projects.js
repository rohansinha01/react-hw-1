// the component function
const Projects = (props) => {

    //The Components Returned JSX
    return <div className="Projects">
        <span id="card">
        <h2>Project {props.project}</h2>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        </span>
    </div>
}

// export the component
export default Projects
