// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
employeesArray = []


// Collect employee data
  function collectEmployees() {
    // TODO: Get user input to create and return an array of employee object
    const addNew = true;
    while (addNew) {
    const employees = {
      firstName: window.prompt("Enter First Name"),
      lastName: window.prompt("Enter Last Name"),
      salary: parseFloat(window.prompt("Enter Salary")),
    };
    console.log(employees)
    employeesArray.push(employees)
    console.log(employeesArray)
    const shouldAddNew = window.confirm("Would you like to add another employee?");
    if (!shouldAddNew) {
      break;
    }
  }
    return employeesArray;
  }

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
    employeesArray.forEach(employee => {
        totalSalary += employee.salary;
    });
    const averageSalary = totalSalary / employeesArray.length;
    console.log(averageSalary);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomNum = Math.floor(Math.random()* employeesArray.length);
  const randomEmployee = employeesArray[randomNum];
  console.log(randomEmployee)
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
