// the component function
const Projects = (props) => {

    //The Components Returned JSX
    return <div className="Projects">
        <span id="card">
        <h2>Project {props.project}</h2>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <h4><a href={props.link}>Deployed Link</a></h4>
        <h4><a href={props.github}>Github Link</a></h4>
        </span>
    </div>
}

// export the component
export default Projects
