import api from "../../../services/AxiosService";

const createBranchAdmin = (data: object) => {
  return new Promise((resolve, reject) => {
    api("post", "fm-web", null, `/branch/admin/register`, "token", data, "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAllBranchAdmin = (companyId: number) => {
  return new Promise((resolve, reject) => {
    api("get", "fm-web", null, `/branch/admin/${companyId}`, "token", "", "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const updateBranchAdmin = (data: object) => {
  return new Promise((resolve, reject) => {
    api("put", "", null, `/api/v1/branch/admin`, "token", data, "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteBranchAdminById = (id: number) => {
  return new Promise((resolve, reject) => {
    api("delete", "fm-web", null, `/branch/admin/${id}`, "token", "", "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getBranchAdminByBrandId = (id: number) => {
  return new Promise((resolve, reject) => {
    api("get", "fm-web", null, `/branchadmin/${id}`, "token", "", "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export {
  getAllBranchAdmin,
  createBranchAdmin,
  updateBranchAdmin,
  deleteBranchAdminById,
  getBranchAdminByBrandId,
};
