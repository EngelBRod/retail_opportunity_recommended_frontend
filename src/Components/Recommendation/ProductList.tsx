import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import SingleProduct from "./SingleProduct";

function ProductList() {
    const { id } = useParams();

    const [recommendations,setRecommendations] = useState<recomendations>([])
    
    
    useEffect(() => {
        handleSearchRecommendations()
    }, [])
    
    async function handleSearchRecommendations(){
        const result = await axios.get(`http://localhost:3500/v1/recommendations/${id}`)

        setRecommendations(result.data.data)

    }
    return (
        <>
            <Link to="/"><div> Search other stores</div></Link>
            {recommendations?.map((value) => {
                return (
                    <>
                        <SingleProduct
                            product_name={value.product_name}
                            recommended_score={value.recommended_score}
                            score_avg={value.score_avg}
                            daily_sales_performance={value.daily_sales_performance}
                            rejection_rate={value.rejection_rate}
                            daily_sales_avg={value.daily_sales_avg}
                        />
                        {/* <h1>{value.product_name}</h1>
                        <h3>Placement Recommendation Score: {parseFloat(value.recommended_score).toFixed(2) }</h3>
                        <h3> User score avg: {parseFloat(value.score_avg).toFixed(2)}</h3>
                        <h3> Daily sales avg: {parseFloat(value.daily_sales_avg).toFixed(2)}</h3>
                        <h3> Daily sales Performance: {parseFloat(value.daily_sales_performance).toFixed(0) * 100} %</h3>
                        <h3> Rejection Rate: {parseFloat(value.rejection_rate).toFixed(0) * 100 } %</h3> */}
                </>
                    
                )
        })}
        </>);
}

export default ProductList;