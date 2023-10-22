import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Employee } from "./Employee";
import axios from "axios";


const Reservation = () => {

    const[employee, setEmployee] = useState<Employee[]>([]);
    const [error, setErrors] = useState("");
    const [isLoading, setLoading] = useState(false);
    
    useEffect(() => {
        axios
          .get("http://localhost:8080/employee") //success  of APi Call
          .then((res) => setEmployee(res.data))
          .catch((err) => {
            setErrors(err.message);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);
    return (
        <>
        <NavBar />
        <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Vehicle No</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((index) => (
            <tr key={index.epmID}>
              <td>{index.name}</td>
              <td>{index.vehicleNo}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    );
}

export default Reservation();