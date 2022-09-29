import api from "../../../services/AxiosService";

const getAllDriverByCompanyIdAndBranchId = (
  companyId: number,
  branchId: number
) => {
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

const getAllVehicleByCompanyIdAndBranchId = (
  companyId: number,
  branchId: number
) => {
  return new Promise((resolve, reject) => {
    api(
      "get",
      "co-web",
      null,
      `/companyVehicle/${companyId}/${branchId}`,
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

const getAllocatedVehicleByDriverId = (userId: number) => {
  return new Promise((resolve, reject) => {
    api("get", "co-web", null, `/vehicleAllocation/${userId}`, "token", "", "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const addVehicleAllocationByDriverId = (data: any) => {
  return new Promise((resolve, reject) => {
    api("post", "co-web", null, "/vehicleAllocation", "token", data, "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const updateVehicleAllocationByDriverId = (data: any) => {
  return new Promise((resolve, reject) => {
    api("put", "co-web", null, "/vehicleAllocation", "token", data, "")
      .then((reponse: any) => {
        resolve(reponse.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAllDriverByCompanyId = (companyId: number) => {
  return new Promise((resolve, reject) => {
    api("get", "fm-web", null, `/driver/${companyId}`, "token", "", "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export {
  getAllDriverByCompanyIdAndBranchId,
  addDriver,
  deleteDriver,
  getAllVehicleByCompanyIdAndBranchId,
  getAllocatedVehicleByDriverId,
  addVehicleAllocationByDriverId,
  updateVehicleAllocationByDriverId,
  getAllDriverByCompanyId,
};
