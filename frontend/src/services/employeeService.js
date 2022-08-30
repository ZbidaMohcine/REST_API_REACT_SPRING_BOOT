import axios from 'axios'

const employee_rest_api_url = 'http://localhost:8085/api/v1/employees'

class EmployeeService {
    getAllEmployee() {
        return axios.get(employee_rest_api_url)
    }
    createEmployee(employee) {
        return axios.post(employee_rest_api_url, employee)
    }
    getemployeeById(id) {
        return axios.get(employee_rest_api_url + '/' + id)
    }
    deleteemployee(id) {
        return axios.delete(employee_rest_api_url + '/' + id);
    }
    updateEmployee(id, employee) {
        return axios.put(employee_rest_api_url + '/' + id, employee);
    }
}
export default new EmployeeService();