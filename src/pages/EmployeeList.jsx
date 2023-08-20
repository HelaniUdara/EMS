import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./EmployeeList.css";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8080/api/v1/employee",
});

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    client.get("/getAllEmployees").then((response) => {
      setEmployees(response.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center topic">Employee List</h1>
        <div className="row">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Employee FirstName</th>
                <th>Employee LastName</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.empFirstName}</td>
                  <td>{employee.empLastName}</td>
                  <td>{employee.empEmail}</td>
                  <td>{employee.empAddress}</td>
                  <td>{employee.empPhone}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
}
