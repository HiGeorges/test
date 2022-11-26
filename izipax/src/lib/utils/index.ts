export const generateOtp = (): string =>
  (Math.floor(Math.random() * 9000000) + 1000000).toString(); //Generate 7 digits number
