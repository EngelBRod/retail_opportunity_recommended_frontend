import { Link } from "react-router-dom";

function SingleStore({ id, region_id, name }: store) {
    return (<>

            <Link to={`/recomendations/${id}`}>
                <div className="w-100 my-3 p-3 rounded bg-slate-300 hover:bg-slate-400">
                    {name}
                </div>
            </Link>
        
    </>)
    
}

export default SingleStore;