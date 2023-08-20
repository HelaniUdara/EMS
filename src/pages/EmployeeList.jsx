import React, { useEffect, useState } from "react";
import "./EmployeeList.css";
import client from "../AxiosCilent";
import { useNavigate } from "react-router-dom";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    client.get("/getAllEmployees").then((response) => {
      setEmployees(response.data);
    });
  }, []);

  const editEmployeeById = (id) => {
    navigate(`/updateEmployee/${id}`);
  };

  const navigateAddEmployee = () => {
    navigate("/addEmployee");
  };

  const deleteEmployee = (id) => {
    client.delete(`/deleteEmployee/${id}`).then(() => 
    {
         alert("Employee Successfully Deleted !");
         window.location.reload(true);
    }
    ).catch(() => {
        alert("Employee Deleting Failed !");
    })
  }

  return (
    <div>
      <div className="container">
        <h1 className="text-center topic">Employee List</h1>
        <div className="row">
          <button
            type="button"
            class="btn btn-info"
            onClick={navigateAddEmployee}
          >
            Add Employee
          </button>
        </div>
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
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary aletbtn"
                      onClick={() => editEmployeeById(employee.empId)}
                    >
                      Update
                    </button>
                    <button type="button" class="btn btn-danger" onClick={() => deleteEmployee(employee.empId)}>Delete</button>
                  </td>
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
