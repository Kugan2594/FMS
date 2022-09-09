import api from "../../../services/AxiosService";

const getAllRevenueLicenseByUserId = (userId: number) => {//cudeson
  return new Promise((resolve, reject) => {
    api(
      "get",
      "fm-web",
      null,
      `/revenueLicense/${userId}`,
      "",
      "",
      ""
    )
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export {
    getAllRevenueLicenseByUserId,
  
  };