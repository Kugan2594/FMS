import api from "../../../services/AxiosService";

const getAllRevenueLicenseByUserId = (userId: number) => {//cudeson
  return new Promise((resolve, reject) => {
    api(
      "get",
      "fm-web",
      null,
      `/revenueLicense/${userId}`,
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

const getAllVehiclesAllocationsForDropDown = (userId: number) => {
  return new Promise((resolve, reject) => {
    api(
      "get",
      "fm-web",
      null,
      `/vehicleAllocation/${userId}`,
      "token",
      "",
      "")
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
    api(
      "post",
      "fm-web",
      null,
      `/revenueLicense`,
      "token",
      data,
      "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getAllRevenueLicenseByUserId, getAllVehiclesAllocationsForDropDown, addRevenueLicense };