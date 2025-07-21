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
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="place"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.place}
           />
           {errors.place && touched.place && errors.place}

           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
        </>
    )
}

export default Search;