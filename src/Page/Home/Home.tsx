import Search from "../../Components/Search/Search";
import StoresList from "../../Components/Stores/StoresList";
import { useState } from "react";

function Home() {
    const [stores,setStores] = useState<stores_type>([])
    return (
        <>
            <Search setStores={setStores} />
            <StoresList stores={stores} />
        </>
    )
}

export default Home;