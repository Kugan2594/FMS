import api from "../../../services/AxiosService";

const addInsurance = (data: object) => {
  return new Promise((resolve, reject) => {
    api("post", "co-web", null, `/insurance`, "token", data, "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getInsuranceByUserId = (userId: number) => {
  //cudeson
  return new Promise((resolve, reject) => {
    api("get", "co-web", null, `/userInsurance/${userId}`, "token", "", "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteInsurance = (id: number) => {
  return new Promise((resolve, reject) => {
    api("delete", "co-web", null, `/insurance/${id}`, "token", "", "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const updateInsurance = (data: object) => {
  return new Promise((resolve, reject) => {
    api("put", "co-web", null, `/insurance`, "token", data, "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { addInsurance, getInsuranceByUserId, deleteInsurance, updateInsurance };
