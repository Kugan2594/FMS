import api from "../../../services/AxiosService";

const getAllVehiclesByCompanyId = (companyId: any) => {
  return new Promise((resolve, reject) => {
    api("get", "co-web", null, `/companyVehicle/${companyId}`, "token", "", "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const addVehicle = (data: any) => {
  return new Promise((resolve, reject) => {
    api("post", "co-web", null, "/companyVehicle", "token", data, "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteVehicleByVehicleNumberAndCompanyId = (
  vehicleNumber: string,
  companyId: number
) => {
  return new Promise((resolve, reject) => {
    api(
      "delete",
      "co-web",
      null,
      `/vehicleCompany/${vehicleNumber}/${companyId}`,
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

const getAllVehiclesFromResourcesForDropDown = () => {
  return new Promise((resolve, reject) => {
    api("get", "ad-web", null, `/vehicle`, "token", "", "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAllVehiclesByCompanyIdAndBranchId = (
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

const updateVehicle = (data: any) => {
  return new Promise((resolve, reject) => {
    api("put", "co-web", null, "/companyVehicle", "token", data, "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getRevenueLicense = (
  vehicleNumber: string,
) => {
  return new Promise((resolve, reject) => {
    api(
      "get",
      "co-web",
      null,
      `/vehicleRevenueLicense/${vehicleNumber}`,
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

const getInsurance = (
  vehicleNumber: string,
) => {
  return new Promise((resolve, reject) => {
    api(
      "get",
      "co-web",
      null,
      `/insurance/${vehicleNumber}`,
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

const getEmissionTest = (
  vehicleNumber: string,
) => {
  return new Promise((resolve, reject) => {
    api(
      "get",
      "co-web",
      null,
      `/emissionTest/${vehicleNumber}`,
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
  addVehicle,
  getAllVehiclesByCompanyId,
  deleteVehicleByVehicleNumberAndCompanyId,
  getAllVehiclesFromResourcesForDropDown,
  getAllVehiclesByCompanyIdAndBranchId,
  updateVehicle,
  getRevenueLicense,
  getInsurance,
  getEmissionTest,
};
