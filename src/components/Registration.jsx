import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Contact = () => {
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

  const inputEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

   const dataSubmit = async (e) => {
    const newData = data;
    const res = await axios
      .post("http://localhost:3001/students", newData)
      .then(() => {
        setData(
          {
            fname: "",
            lname: "",
            email: "",
            phone: "",
            address: "",
            birthday: "",
            gender: "",
          },
          alert("successful")
        );
      })
      .catch((err) => {
        alert(err.message);
      });
    console.log(res.data);
  };

  return (
    <>
      <div className="container">
        <h3 className="d-flex justify-content-center p-2">
          This is Registration Page
        </h3>

        <form onSubmit={dataSubmit}>
          <div className="row">
            <div className="mb-3 col col-6">
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

            <div className="mb-3 col col-6">
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
          </div>

          <div className="row">
            <div className="mb-3 col col-6">
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

            <div className="mb-3 col col-6">
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

          <div className="mb-3">
            <label for="exampleInputBirthday" className="form-check-label">
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

          <h6 class="mb-2 pb-1">Gender: </h6>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="female"
              onChange={inputEvent}
              checked={data.gender === "female"}
            />
            <label for="exampleInputFemaleGender" className="form-check-label">
              Female
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="male"
              onChange={inputEvent}
              checked={data.gender === "male"}
            />
            <label for="exampleInputMaleGender" className="form-label">
              Male
            </label>
          </div>

          <div className="row">
            <button type="submit" className="btn btn-primary col col-1">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
