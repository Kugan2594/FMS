import api from "../../../services/AxiosService";

const getAllBranchesByCompanyId = (companyId: number) => {
  return new Promise((resolve, reject) => {
    api("get", "fm-web", null, `/branch/${companyId}`, "token", "", "")
      .then((response: any) => {
        resolve(response.data.results.Branch);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const addBranch = (data: object) => {
  return new Promise((resolve, reject) => {
    api("post", "", null, `/api/v1/branch`, "token", data, "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const editBranch = (data: object) => {
  return new Promise((resolve, reject) => {
    api("put", "", null, `/api/v1/branch`, "token", data, "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getAllBranchesByCompanyId, editBranch, addBranch };
