import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Page/Home/Home";
import Navigation from "./Page/Navigation/Navigation";
import ProductList from "./Components/Recommendation/ProductList";


function App() {



  return (
    <>
      <div className=" flex flex-col justify-items-center items-center m-auto">
        <div className="w-[100vw] bg-slate-800">
          <div className=" flex justify-center items-center text-center text-white p-4 text-2xl">
            RETAIL OPPORTUNITY RECOMMENDER
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-10">
          <Routes>
            <Route
              path="/"
              element={<Navigation />}
            >
              <Route path="/" element={<Home />} />
              <Route path="/recomendations/:id" element={<ProductList />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>

          </Routes>
        </div>

      </div>

    </>
  );
}

export default App
