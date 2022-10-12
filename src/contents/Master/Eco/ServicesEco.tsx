import api from "../../../services/AxiosService";

const getAllEmissionTestDocumentByUserId = (userId: number) => {
  //keerthana
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
    api("post", "co-web", null, `/emissionTest`, "token", data, "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteEmissionTest = (id: number) => {
  return new Promise((resolve, reject) => {
    api("delete", "co-web", null, `/emissionTest/${id}`, "token", "", "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const updateEmissionTest = (data: object) => {
  return new Promise((resolve, reject) => {
    api("put", "co-web", null, `/emissionTest`, "token", data, "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAllEmissionTestDocumentByCompanyId = (companyId: number) => {
  return new Promise((resolve, reject) => {
    api(
      "get",
      "co-web",
      null,
      `/companyEmissionTest/${companyId}`,
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

const getAllEmissionTestDocumentByCompanyIdAndBranchId = (
  companyId: number,
  branchId: number
) => {
  return new Promise((resolve, reject) => {
    api(
      "get",
      "co-web",
      null,
      `/companyEmissionTest/${companyId}/${branchId}`,
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

export {
  getAllEmissionTestDocumentByUserId,
  addEmissionTest,
  deleteEmissionTest,
  updateEmissionTest,
  getAllEmissionTestDocumentByCompanyId,
  getAllEmissionTestDocumentByCompanyIdAndBranchId,
};
