import React, { useEffect, useState  } from "react";
import { useParams , useNavigate} from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Detail(props) {
  const params = useParams();
  const [productDetail, setProductDetail] = useState({});
  const navigate = useNavigate();

  const getProductDetailApi = async () => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + params.id,
        method: "GET",
      });

      console.log("Kết quả", result.data.content);
      //Sau khi lấy kết quả từ Api về đưa vào arrProduct
      setProductDetail(result.data.content);
      console.log(productDetail);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductDetailApi();
  }, [params.id]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={productDetail.image} alt="" className="w-100" />
        </div>
        <div className="col-8">
          <h3>{productDetail.name}</h3>
          <p>{productDetail.description}</p>
          <button className="btn btn-success">Add to carts</button>
        </div>
      </div>
      <div className="mt-2">
        <h3>Related Product</h3>
        {/*?: toán tử optional chaining: nếu có thuộc tính đó thì mới chấm tiếp phương thức tiếp theo được, ko có thì bỏ qua*/}
        <div className="row">
          {productDetail.relatedProducts?.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card">
                  <img
                    style={{ objectFit: "cover" }}
                    src={item.image}
                    className="w-100"
                    alt=""
                  />
                  <div className="card-body">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <NavLink className="btn btn-success" to = {`/detail/${item.id}`} >View detail</NavLink>
                    <button className="btn btn-secondary mx-2" onClick={()=>{
                      navigate(`/detail/${item.id}`)
                    }} >View detail</button>
                  </div>
                </div>
              </div>
            );
          })};
        </div>
      </div>
    </div>
  );
}
