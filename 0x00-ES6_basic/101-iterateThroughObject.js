export default function iterateThroughObject(reportWithIterator) {
    // Create an empty array to hold the employee names
    const employeeNames = [];
    
    // Iterate through the reportWithIterator
    for (const name of reportWithIterator) {
        employeeNames.push(name); // Push each name into the array
    }

    // Join the names with ' | ' and return the result
    return employeeNames.join(' | ');
}