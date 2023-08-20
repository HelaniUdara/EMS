import "./App.css";
import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee";
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
