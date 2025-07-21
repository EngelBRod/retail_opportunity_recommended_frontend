import { Formik } from "formik";
import * as Yup from 'yup'
import axios from "axios";



function Search({setStores}:set_stores) {

    async function handleSubmit(place:string) {
        const result = await axios.get('http://localhost:3500/v1/stores', {
            params: {
            place
            }
        })
        setStores(result.data.data);
    }
    return (
        <>
       <div>
     <Formik
                    initialValues={{ place: '' }}
                    validationSchema={Yup.object({
                        place: Yup.string().required('Required')
                    })}

       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
             //alert(JSON.stringify(values, null, 2));
             handleSubmit(values.place)
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
            }) => (
              <div >
                <div className="w-full flex-column  justify-items-center items-center ">
              <form onSubmit={handleSubmit} className="w-[1024px]">
                <div className="relative">
                  <input
                    type="text"
                    name="place"
                    onChange={handleChange}
                    onBlur={handleBlur}
                          value={values.place}
                          className="w-[1024px]   bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow text-center"
                                    
                  />
                  

                  <button type="submit" disabled={isSubmitting}  className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                       >
                    Submit
                      </button>
                      
                </div>

                  </form>
                  <div>{errors.place && touched.place && errors.place}</div>
                  
                </div>
                </div>
                
       )}
     </Formik>
   </div>
        </>
    )
}

export default Search;