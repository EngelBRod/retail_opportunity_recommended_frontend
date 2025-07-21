import { Link } from "react-router-dom";

function SingleStore({ id, region_id, name }: store) {
    return (<>
        <Link to={`/recomendations/${id}`}>{ name}</Link>
    </>)
    
}

export default SingleStore;