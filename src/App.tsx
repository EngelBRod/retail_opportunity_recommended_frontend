import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Page/Home/Home";
import Navigation from "./Page/Navigation/Navigation";
import ProductList from "./Components/Recommendation/ProductList";


function App() {



  return (
    <>
      RETAIL OPPORTUNITY RECOMMENDER
      <Routes>
        <Route
          path="/"
          element={<Navigation/>}
        >
          <Route path="/" element={<Home />} />
          <Route path="/recomendations/:id" element={<ProductList/> } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
