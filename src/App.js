import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import UserList from "./pages/home/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Messages from "./pages/messages/Messages";
import Manage from "./pages/manage/Manage";

function App() {
  return (
    <div>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path='/user/:userId' element={<User/>}/>
          <Route path='/newUser' element={<NewUser/>}/>
          <Route path='/products' element={<ProductList/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/newproduct' element={<NewProduct/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/manage' element={<Manage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
