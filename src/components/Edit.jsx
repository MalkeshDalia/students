/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();

  const history = useHistory();

  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    birthday: "",
    gender: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const newData = await axios.get(`http://localhost:3001/students/${id}`);
    setData(newData.data);
  };

  const inputEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const dataSubmit = async () => {
    const updateData = data;
    const res = await axios
      .put(`http://localhost:3001/students/${id}`, updateData)
      .then((res) => alert("data"))
      .catch((err) => alert("There is something wrong"));
  };

  return (
    <>
      <h3 className="d-flex justify-content-center p-2"> This is Edit Page </h3>

      <form onSubmit={dataSubmit}>
        <div className="mb-3">
          <label for="exampleInputFirstname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            name="fname"
            value={data.fname}
            onChange={inputEvent}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputLastname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            name="lname"
            value={data.lname}
            onChange={inputEvent}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputBirthday" className="form-label">
            Birthday
          </label>
          <input
            type="text"
            className="form-control"
            name="birthday"
            value={data.birthday}
            onChange={inputEvent}
          />
        </div>

        <div class="col-md-6 mb-4">
          <h6 class="mb-2 pb-1">Gender: </h6>

          <div className="mb-3">
            <label for="exampleInputFemaleGender" className="form-label">
              Female
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="female"
              onChange={inputEvent}
              checked={data.gender === "female"}
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputMaleGender" className="form-label">
              Male
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="male"
              onChange={inputEvent}
              checked={data.gender === "male"}
            />
          </div>
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={data.email}
            onChange={inputEvent}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPhone" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            name="phone"
            value={data.phone}
            onChange={inputEvent}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={data.address}
            onChange={inputEvent}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Edit;
