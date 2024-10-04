// This function returns a promise that currently resolves immediately without any additional value
export default function getResponseFromAPI() {
    // Creating a new promise that resolves immediately without any value
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
