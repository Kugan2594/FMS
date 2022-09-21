import api from "../../../services/AxiosService";

const getAllDriverByCompanyIdAndBranchId = (companyId: number,branchId: number) => {
  return new Promise((resolve, reject) => {
    api(
      "get",
      "fm-web",
      null,
      `/driver/${companyId}/${branchId}`,
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

const addDriver = (data: object) => {
  return new Promise((resolve, reject) => {
    api("post", "fm-web", null, `/driver`, "token", data, "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteDriver = (id: number) => {
  return new Promise((resolve, reject) => {
    api("delete", "fm-web", null, `/driver/${id}`, "token", "", "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export {getAllDriverByCompanyIdAndBranchId, addDriver,deleteDriver}