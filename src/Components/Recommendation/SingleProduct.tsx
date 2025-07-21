function SingleProduct({product_name,recommended_score,rejection_rate,daily_sales_performance,daily_sales_avg, score_avg}:recomendation) {
    return (<>
        <div className="w-[1024px] my-3 p-3 rounded bg-slate-300">
            <div className="flex flex-col justify-center items-center ">
             <span className="flex w-[60px] h-[60px] justify-center items-center bg-slate-800 text-white rounded-full p-3 ml-3">{parseFloat(recommended_score).toFixed(2)}</span>
                <div className="flex h-[60px] items-center font-bold">Placement Recommendation Score</div>
            </div>
            
            <div className="flex flex-col justify-start ">
                <div className="underline font-bold">Details:</div>
                <div> Product Name: <span className="font-bold"> {product_name} </span></div>
                <div className="flex justify-between">
                    <div> User score avg: <span className="font-bold">{parseFloat(score_avg).toFixed(2)}</span></div>
                    <div> Daily sales avg: <span className="font-bold">{parseFloat(daily_sales_avg).toFixed(2)}</span></div>
                    <div> Daily sales Performance: <span className="font-bold">{(parseFloat(daily_sales_performance) * 100)} %</span></div>
                    <div> Rejection Rate: <span className="font-bold">{(parseFloat(rejection_rate) * 100).toFixed(2)} %</span></div>
                </div>

            </div>
           
        </div>

    </>);
}

export default SingleProduct