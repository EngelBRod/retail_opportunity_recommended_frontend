import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import SingleProduct from "./SingleProduct";
import { Tooltip } from "react-tooltip";

function ProductList() {
    const { id } = useParams();

    const [recommendations,setRecommendations] = useState<recomendations>([])
    
    
    useEffect(() => {
        handleSearchRecommendations()
    }, [])
    
    async function handleSearchRecommendations() {
        console.log(`${import.meta.env.VITE_BASE_URL}recomendations/${id}`)
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}recommendations/${id}`)

        setRecommendations(result.data.data)

    }
    return (
        <>
            <div className="flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <Link to="/"> Search other stores</Link>
            </div>

            
            <div className="w-[1024px] flex justify-end text-right underline text-xs my-2" data-tooltip-id="my-tooltip">
                how it works?

            </div>
            <Tooltip id="my-tooltip" place="bottom-end" noArrow={true} opacity={1} >
                <div className="w-[500px]">
                    <div>Retail Opportunity Recommender uses 3 main factors to calculate the placement score: user score, daily sales performance, and rejection rate
                       <br/> Each category is evaluated on a scale of 1-5 (except daily sales performance, which can exceed the base 5)</div>
                    <div><span className="font-bold underline">User Score avg:<br/></span> Average user score for  consumed product in a given store</div>
                    <div><span className="font-bold underline">Daily sales avg:<br/></span> Calculates the average daily sales and compares them with the sales from that product overall. It takes into consideration the time a given product is in the store, using the formula <br/><span className="font-bold">(quantity_left/current_day-placement_day)</span> <br/> or for placements completely  sold <br/> <span className="font-bold">(quantity_sold/last_sale_day-placement_day)</span>   </div>
                    <div><span className="font-bold underline">Rejection rate:<br/></span> What percentage of all the sales are rejected</div>
                </div>
                    
                </Tooltip>
            {recommendations?.map((value) => {
                return (
  

                    <SingleProduct
                        product_name={value.product_name}
                        recommended_score={value.recommended_score}
                        score_avg={value.score_avg}
                        daily_sales_performance={value.daily_sales_performance}
                        rejection_rate={value.rejection_rate}
                        daily_sales_avg={value.daily_sales_avg}
                        key={`${value.product_name}-${value.recommended_score}-${id}`}
                            
                    />
 



                    
                );
            })}
        </>);
}

export default ProductList;