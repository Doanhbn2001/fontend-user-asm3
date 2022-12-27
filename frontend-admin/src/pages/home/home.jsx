import './home.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from '../../components/products/products';
import UpdateProduct from '../../components/update-product/update-product';
// import { Route, Routes } from "react-router-dom";
// import Sidebar from "../../components/sidebar/sidebar";
// import Transactions from "../../components/transaction/transaction";
// import NewHotel from "../../components/newHotel/newHotel";
// import Hotel from '../../components/hotels/hotels';
// import Users from "../../components/users/users";
// import Rooms from "../../components/rooms/rooms";
// import NewRoom from "../../components/newRoom/newRooms";

const Home = ({ setAdmin }) => {
  useEffect(() => {}, []);
  return (
    <div className="container" style={{ maxWidth: '1500px' }}>
      {/* <h1 className="admin-page">Products</h1> */}
      {/* <div className="row"> */}
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/:id" element={<UpdateProduct />} />

        {/* <Route path="/ff" component={<div>2</div>} /> */}
      </Routes>
      {/* </div> */}
    </div>
  );
};

export default Home;
