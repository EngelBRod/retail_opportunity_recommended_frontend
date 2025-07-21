declare global {

    type store = {
        id: string;
        region_id: string;
        name: string;
        region_city: string;
        region_state: string;
        region_zipcode: string;                
        opportunity_score?: number;
    }

    type stores_type = Array<store>

    type stores = {
        stores:stores_type
    }
    
    type set_stores = {
        setStores: (data: stores_type) => void
    }

    type recomendation = {
            product_name:string,
            score_avg:string,
            rejection_rate:string,
            daily_sales_avg:string,
            daily_sales_performance:string,
            recommended_score:string,
    }

    type recomendations =  Array<recomendation>

}

export { };