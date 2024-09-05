const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('XX');
    reject('Error');
    resolve('OK');
  }, 1000);
});

console.log('p=', p);

p.then(succResult => {
  console.log('🚀  succResult:', succResult, p);
}).catch(error => {
  console.log('🚀  error:', error, p);
});
