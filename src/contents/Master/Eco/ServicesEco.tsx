import api from "../../../services/AxiosService";

const getAllEmissionTestDocumentByUserId = (userId: number) => {
  return new Promise((resolve, reject) => {
    api(
      "get",
      "fm-web",
      null,
      `/emissionTestByUserId/${userId}`,
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
    getAllEmissionTestDocumentByUserId,
  
  };