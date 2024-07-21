export const emailService = async (
  email: string,
  message: string
): Promise<void> => {
  console.log({ email, message });

  // TODO: Send data to a BE service. ie. using fetch

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomError = Math.floor(Math.random() * 100) < 50;

      if (randomError) {
        reject("oops something went wrong");
        return;
      }

      resolve();
    }, 2_000);
  });
};
