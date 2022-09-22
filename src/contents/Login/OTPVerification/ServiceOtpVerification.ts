import api from "../../../services/AxiosService";

export const otpVerification = (data: Object) => {
  return new Promise((resolve, reject) => {
    api("PUT", "fm-web", null, "/OTP-verification", "", data, "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};
