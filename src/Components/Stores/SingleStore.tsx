import { Link } from "react-router-dom";

function SingleStore({ id, region_id, name,opportunity_score,region_city,region_state,region_zipcode }: store) {
    return (<>

        <Link to={`/recomendations/${id}`}>
            <div className="w-[1024px] my-3 p-3 rounded bg-slate-300 hover:bg-slate-400">
                <div className="flex flex-col justify-center items-center ">
                    <span className="flex w-[60px] h-[60px] justify-center items-center bg-slate-800 text-white rounded-full p-3 ml-3">{(opportunity_score!==null)? parseFloat(opportunity_score).toFixed(2):0}</span>
                    <div className="flex h-[60px] items-center font-bold">Opportunity Score</div>
                </div>
            
                <div className="flex flex-col justify-start ">
                    <div> Store: <span className="font-bold"> {name} </span></div>
                    <div className="flex justify-between">
                        <div className="font-bold">{`${region_state}, ${region_city}, ${region_zipcode}`}</div>
                        <div className="underline text-shadow-2xs">click to see placement recommendations</div>
                    </div>

                </div>
           
            </div>
        </Link>
        
    </>);
    
}

export default SingleStore;