import api from "../../../services/AxiosService";

const addService = (data: object) => {
  return new Promise((resolve, reject) => {
    api("post", "co-web", null, `/vehicleService`, "token", data, "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const getAllVehiclesAllocationsForDropDown = (userId: number) => {
  return new Promise((resolve, reject) => {
    api("get", "co-web", null, `/vehicleAllocation/${userId}`, "token", "", "")
      .then((response: any) => {
        resolve(response.data.results.vehicleAllocation);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const getAllServices = () => {
  return new Promise((resolve, reject) => {
    api("get", "ad-web", null, `/service`, "token", "", "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAllVehicleServices = (vehicleNumber: any) => {
  return new Promise((resolve, reject) => {
    api(
      "get",
      "co-web",
      null,
      `/vehicleService/${vehicleNumber}`,
      "token",
      "",
      ""
    )
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

const getAllVehicleServicesByCompanyIdAndBranchId = (
  companyId: Number,
  branchId: Number
) => {
  return new Promise((resolve, reject) => {
    api(
      "get",
      "co-web",
      null,
      `/companyVehicleService/${companyId}/${branchId}`,
      "token",
      "",
      ""
    )
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

const deleteVehicleService = (id: number) => {
  return new Promise((resolve, reject) => {
    api("delete", "co-web", null, `/vehicleService/${id}`, "token", "", "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export {
  getAllVehiclesAllocationsForDropDown,
  getAllServices,
  addService,
  getAllVehicleServices,
  getAllVehicleServicesByCompanyIdAndBranchId,
  deleteVehicleService,
};
