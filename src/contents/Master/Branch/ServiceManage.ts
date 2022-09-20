import api from "../../../services/AxiosService";

const getAllBranchesByCompanyId = (companyId:number) => {
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

export {getAllBranchesByCompanyId}