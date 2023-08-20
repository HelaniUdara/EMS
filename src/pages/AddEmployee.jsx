import React, { useState } from "react";
import client from '../AxiosCilent';


export default function AddEmployee() {
  const [empFirstName, setEmpFirstName] = useState("");
  const [empLastName, setEmpLastName] = useState("");
  const [empAddress, setEmpAddress] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empPhone, setEmpPhone] = useState("");

  const addEmployee = () => {
    client
      .post("/addEmployee", {
        empFirstName: empFirstName,
        empLastName: empLastName,
        empEmail: empEmail,
        empAddress: empAddress,
        empPhone: empPhone,
      })
      .then(() => {
        alert("Student Successfully Added !");
        clearTexts();
      })
      .catch(() => {
        alert("Student Adding Failed !");
      });
  };

  const clearTexts = () => {
    setEmpFirstName("");
    setEmpLastName("");
    setEmpAddress("");
    setEmpEmail("");
    setEmpPhone("");
  };

  return (
    <div>
      <div className="container">
        <h1 className="text-center topic">Add an Employee</h1>
        <div className="row form-box">
          <form>
            <div className="container">
              <div className="form-group">
                <label for="firstName">Employee's First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Romain"
                  value={empFirstName}
                  onChange={(e) => {
                    setEmpFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label for="lastName">Employee's Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Wills"
                  value={empLastName}
                  onChange={(e) => {
                    setEmpLastName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="romain@gmail.com"
                  value={empEmail}
                  onChange={(e) => {
                    setEmpEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label for="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Colombo"
                  value={empAddress}
                  onChange={(e) => {
                    setEmpAddress(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label for="phone">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="0771234567"
                  value={empPhone}
                  onChange={(e) => {
                    setEmpPhone(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="btns">
              <button type="button" className="btn btn-success " onClick={addEmployee}>
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={clearTexts}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
