
import SingleStore from "./SingleStore";

function StoresList({ stores }: stores) {
    console.log(stores);
    return (<>
        <div className="flex flex-col ">
            {stores?.map((value) => {
                return (<SingleStore id={value.id} region_id={value.region_id} name={value.name} />)
            })}
        </div>

    </>);
    
}

export default StoresList