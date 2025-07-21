
import SingleStore from "./SingleStore";

function StoresList({ stores }: stores) {
    console.log(stores);
    return (<>
        <div className="flex flex-col ">
            {stores?.map((value) => {
                return (<SingleStore id={value.id} region_id={value.region_id} name={value.name} region_city={value.region_city} region_state={value.region_state} region_zipcode={ value.region_zipcode} opportunity_score={value.opportunity_score} />)
            })}
        </div>

    </>);
    
}

export default StoresList