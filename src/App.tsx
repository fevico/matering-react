import { Route, Routes } from "react-router-dom"
import BlogDetail from "./components/BlogDetail"
import Home from "./Home"

function App (){

return     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:slug" element={<BlogDetail />} />
    </Routes>

}
export default App