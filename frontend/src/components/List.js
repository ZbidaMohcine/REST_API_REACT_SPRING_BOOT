import React, { useEffect, useState } from 'react';
import employeeService from '../services/employeeService';
import { useParams, useNavigate } from "react-router-dom"
import Navigation from './Navigation';

const List = () => {
    const { id } = useParams();
    const [employees, setEmployee] = useState([]);
    const history = useNavigate();
    const editEmployee = (id) => {
        history("/edit/" + id)
    }

    useEffect(() => {
        employeeService.getAllEmployee().then((Response) => {
            setEmployee(Response.data);
        })
    }, []);

    const deleteEmployee = (id) => {
        employeeService.deleteemployee(id).then((Response) => {
            employeeService.getAllEmployee().then((Response) => {
                setEmployee(Response.data);
            })
        })
    }
    return (
        <div className='container text-center'>
            <Navigation />
            <h2>List employees</h2>
            <table className='table table-bordered mt-5'>
                <thead><tr>
                    <th>Employee id</th>
                    <th>Employee firstName</th>
                    <th>Employee lastName</th>
                    <th>Employee Email</th>
                    <th>actions</th>
                </tr></thead>
                <tbody>
                    {employees.map(
                        (employee, index) =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>

                                    {/* <Link className=' btn btn-success' to={'/edit/${params.id}'} >edit</Link> */}
                                    <button className='btn btn-success' onClick={() => editEmployee(employee.id)}>edit</button>
                                    <button className='btn btn-danger ml-3' onClick={() => deleteEmployee(employee.id)}>delete</button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default List;