import api from "../../../services/AxiosService";

const getAllRevenueLicenseByUserId = (userId: number) => {
  //cudeson
  return new Promise((resolve, reject) => {
    api("get", "co-web", null, `/revenueLicense/${userId}`, "token", "", "")
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

const addRevenueLicense = (data: object) => {
  return new Promise((resolve, reject) => {
    api("post", "co-web", null, `/revenueLicense`, "token", data, "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const deleteRevenueLicense = (id: number) => {
  return new Promise((resolve, reject) => {
    api("delete", "co-web", null, `/revenueLicense/${id}`, "token", "", "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const updateRevenueLicense = (data: object) => {
  return new Promise((resolve, reject) => {
    api("put", "co-web", null, `/revenueLicense`, "token", data, "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAllRevenueLicenseByCompanyId = (companyId: number) => {
  return new Promise((resolve, reject) => {
    api(
      "get",
      "co-web",
      null,
      `/companyRevenueLicense/${companyId}`,
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
  getAllRevenueLicenseByUserId,
  getAllVehiclesAllocationsForDropDown,
  addRevenueLicense,
  updateRevenueLicense,
  getAllRevenueLicenseByCompanyId,
};
