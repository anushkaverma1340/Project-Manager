import Spinner from "./Spinner"
import { useQuery } from "@apollo/client"
import ProjectCard from "./ProjectCard";
import { GET_PROJECTS } from "../queries/projectQueries";

export default function Projects() {
    const { loading, error, data } = useQuery(GET_PROJECTS); // useQuery is a hook and we can destructure useQuery(GET_PROJECTS) (passing GET_PROJECTS to useQuery hook, which gives data) to get loading, error and data
    
    if(loading) return <Spinner />;
    if(error) return <p>Something went wrong</p>;

    return (
        <>
            { data.projects.length > 0 ? (
                <div className="row mt-4">
                    { data.projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    )) }
                </div>
            ) : (<p>No Projects</p>) }
        </>
    )
    // <></> is called empty fragment
}
