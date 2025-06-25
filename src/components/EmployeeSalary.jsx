"use client";

import { useState, useMemo } from "react";

const EmployeeSalary=()=> {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  const averageSalary = useMemo(() => {
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    return employees.length > 0 ? total / employees.length : 0;
  }, [employees]);

  const addEmployee = () => {
    if (name === "" || salary === "") return;

    const newEmp = {
      name: name,
      salary: parseFloat(salary),
    };

    setEmployees([...employees, newEmp]);
    setName("");
    setSalary("");
  };

  return (
    <div>
      <h2>Employee Salaries</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <button onClick={addEmployee}>Add</button>

      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.name}: ₹{emp.salary}
          </li>
        ))}
      </ul>

      <p>Average Salary: ₹{averageSalary.toFixed(2)}</p>
    </div>
  );

}

export default EmployeeSalary;