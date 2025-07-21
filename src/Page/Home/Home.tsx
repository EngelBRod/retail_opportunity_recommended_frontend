import Search from "../../Components/Search/Search";
import StoresList from "../../Components/Stores/StoresList";
import { useState } from "react";

function Home() {
    const [stores, setStores] = useState<stores_type>([])
    function handleSorting() {
        const sorted_stores = [...stores];
        sorted_stores.sort((a, b) => b.opportunity_score - a.opportunity_score);
        setStores(sorted_stores);
    }
    return (
        <>
            <div className=" ">
                <Search setStores={setStores} />
                { (stores.length>0) && <div className="cursor-pointer underline my-3 text-right" onClick={handleSorting}>sort</div>}
                <StoresList stores={stores} />
            </div>

        </>
    );
}

export default Home;