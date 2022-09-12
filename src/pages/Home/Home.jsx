import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Home(props) {
  const [arrProduct, setArrProduct] = useState([]);

  const getApiProduct = async () => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      });

      console.log("Kết quả", result.data.content);
      //Sau khi lấy kết quả từ Api về đưa vào arrProduct
      setArrProduct(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  const renderProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-3 mt-2" key={index}>
          <div className="card">
            <img src={item.image} alt="" />
            <div className="card-body bg-dark text-light">
              <p>{item.name}</p>
              <p>{item.price}</p>
              {/* <button className="btn btn-success">View detail</button> */}
             
              <NavLink to={`/detail/${item.id}`} className="btn btn-success">View detail</NavLink>
            </div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    //sau khi giao diện,oad xong thì gọi API
    getApiProduct();
  }, []);

  return (
    <div className="container">
      <h3>Shoes app</h3>
      <div className="row">
        {renderProduct()}
      </div>
    </div>
  );
}
