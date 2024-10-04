// This function takes a boolean parameter and returns a promise
// If the parameter is true, it resolves the promise with a success response
// If the parameter is false, it rejects the promise with an error message
export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({
          status: 200,
          body: 'Success',
        });
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    });
  }
  
  // This function divides two numbers and throws an error if the denominator is zero
  export function divideFunction(numerator, denominator) {
    if (denominator === 0) {
      throw new Error('cannot divide by 0');
    }
    return numerator / denominator;
  }