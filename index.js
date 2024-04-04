// Initialize the employee Object
const employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
  };
  
  // Function to update an employee Object with a given key and value
  const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    return {
      ...employee,
      [key]: value
    };
  };
  
  // Function to destructively update an employee Object with a given key and value
  const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
  };
  
  // Function to delete a key-value pair from an employee Object
  const deleteFromEmployeeByKey = (employee, key) => {
    const { [key]: deletedKey, ...newEmployee } = employee;
    return newEmployee;
  };
  
  // Function to destructively delete a key-value pair from an employee Object
  const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
  };