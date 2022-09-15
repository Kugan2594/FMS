import api from "../../../services/AxiosService";

const getAllEmissionTestDocumentByUserId = (userId: number) => {//keerthana
  return new Promise((resolve, reject) => {
    api(
      "get",
      "fm-web",
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
      "fm-web",
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