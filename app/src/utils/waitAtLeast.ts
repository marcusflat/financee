const waitAtLeast = (time: number, promise: Function) => {
  const promiseTimeout = new Promise((resolve) => {
    setTimeout(resolve, time);
  });
  const promiseCombined = Promise.all([promise, promiseTimeout]);
  return promiseCombined.then((values) => values[0]);
};

export default waitAtLeast;
