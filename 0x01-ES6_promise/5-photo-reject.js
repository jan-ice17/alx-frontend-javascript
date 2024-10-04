// Reject a promise 5-promise
//

export default function uploadPhoto(filename) {
    return Promise.reject(new Error(`${filename} cannot be processed`));
  }