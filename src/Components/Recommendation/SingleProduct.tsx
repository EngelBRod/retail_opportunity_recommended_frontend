function SingleProduct({product_name,recommended_score,rejection_rate,daily_sales_performance,daily_sales_avg, score_avg}:recomendation) {
    return (<>
        <h1>{product_name}</h1>
        <h3>Placement Recommendation Score: {parseFloat(recommended_score).toFixed(2)}</h3>
        <h3> User score avg: {parseFloat(score_avg).toFixed(2)}</h3>
        <h3> Daily sales avg: {parseFloat(daily_sales_avg).toFixed(2)}</h3>
        <h3> Daily sales Performance: {parseFloat(daily_sales_performance).toFixed(0) * 100} %</h3>
        <h3> Rejection Rate: {parseFloat(rejection_rate).toFixed(0) * 100} %</h3>
    </>);
}

export default SingleProduct