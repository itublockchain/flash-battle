export const resolver = async ({ contract, eventName, promise }) => {
  return new Promise((res, rej) => {
    promise?.();

    contract.on(eventName, (...args) => {
      res(...args);
    });

    setTimeout(() => {
      rej("Timeout exceeded");
    }, 120000);
  });
};
