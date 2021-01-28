import db from "../config/database.js";
 
// Get All Employee
export const getEmployee = (result) => {
    db.query("SELECT * FROM employee", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Employee
export const getEmployeeById = (id, result) => {
    db.query("SELECT * FROM employee WHERE employee_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Employee to Database
export const insertEmployee = (data, result) => {
    db.query("INSERT INTO employee SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Employee to Database
export const updateEmployeeById = (data, id, result) => {
    db.query("UPDATE employee SET employee_name = ?, employee_salary = ? WHERE employee_id = ?", [data.employee_name, data.employee_salary, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Employee to Database
export const deleteEmployeeById = (id, result) => {
    db.query("DELETE FROM employee WHERE employee_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}