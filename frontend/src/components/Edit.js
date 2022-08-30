import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import employeeService from '../services/employeeService';

const Edit = () => {
    const [firstName, setFistname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    let history = useNavigate();
    const { id } = useParams();
    const saveEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, email };
        employeeService.getemployeeById(id).then((Response) => {
            setFistname(Response.data.firstName)
            setLastname(Response.data.lastName)
            setEmail(Response.data.email)
        }).catch(error => { console.log(error) })
        employeeService.updateEmployee(id, employee).then((Response) => {
            history("/")
        }).catch(error => {
            console.log(error);
        })
    }
    useEffect(() => {
        employeeService.getemployeeById(id).then((Response) => {
            setFistname(Response.data.firstName)
            setLastname(Response.data.lastName)
            setEmail(Response.data.email)
        }).catch(error => { console.log(error) })

    }, [])
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 mt-5'>
                        <h2 className='text-center'>update employee</h2>
                        <div className='card-body'>
                            <form action='' method='post'>
                                <div className='form-group'>
                                    <label> firstName: </label>
                                    <input type='text' name='fristname'
                                        className='form-control'
                                        value={firstName}
                                        onChange={(e) => setFistname(e.target.value)} />
                                </div>
                                <div className='form-group'>
                                    <label> lastName: </label>
                                    <input type='text' name='lastname'
                                        className='form-control'
                                        value={lastName}
                                        onChange={(e) => setLastname(e.target.value)
                                        } />
                                </div>
                                <div className='form-group'>
                                    <label> Email: </label>
                                    <input type='text' name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='form-control' />
                                </div>
                                <button className='btn btn-primary ' onClick={(e) => saveEmployee(e)}> Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;