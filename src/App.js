import "./App.css";
import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element={ <EmployeeList />} />
      <Route path="/addEmployee" element={ <AddEmployee />} />
      <Route path="/updateEmployee/:empId" element={ <UpdateEmployee />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
