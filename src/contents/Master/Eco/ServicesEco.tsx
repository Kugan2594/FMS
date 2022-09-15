import api from "../../../services/AxiosService";

const getAllEmissionTestDocumentByUserId = (userId: number) => {//keerthana
  return new Promise((resolve, reject) => {
    api(
      "get",
      "co-web",
      null,
      `/emissionTestByUserId/${userId}`,
      "token",
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

const addEmissionTest = (data: object) => {
  return new Promise((resolve, reject) => {
    api(
      "post",
      "co-web",
      null,
      `/emissionTest`,
      "token",
      data,
      "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export {
    getAllEmissionTestDocumentByUserId,addEmissionTest
  
  };