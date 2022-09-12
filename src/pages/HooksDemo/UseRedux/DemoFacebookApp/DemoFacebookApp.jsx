
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addComent } from "../../../../redux/facebookReducer";

export const DemoFacebookApp = (props) => {
  const { arrComent } = useSelector((state) => state.facebookReducer);

  const dispatch = useDispatch();

  const userComent = useRef({name:'',content:''});

  const renderComent = () => {
    return arrComent.map((coment, index) => {
      return (
        <div className="d-flex" key={index}>
          <div className="avatar" style={{ width: 50 }}>
            <img
              src="https://i.pravatar.cc?u=1"
              alt="avatar"
              className="w-100"
              style={{ display: "block" }}
            />
          </div>
          <div className="content mx-2">
            <h5 className="text-danger">{coment.name}</h5>
            <p>{coment.content}</p>
          </div>
        </div>
      );
    });
  };

  const handleChange=(e) => {
    const {id,value} = e.target;
    userComent.current[id]=value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newComent = {...userComent.current}
    const action = addComent(newComent);
    dispatch(action);
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Demo Facebook App</h3>
      <div className="card">
        <div className="card-header">{renderComent()}</div>
        <div className="card-body">
          <div className="form-group">
            <p>Name</p>
            <input type="text" className="form-control" id="name" onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>Content</p>
            <input type="text" className="form-control" id="content"onChange={handleChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-success" type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
