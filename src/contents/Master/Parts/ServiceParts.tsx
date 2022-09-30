import React from "react";
import api from "../../../services/AxiosService";

const addPart = (data: object) => {
  return new Promise((resolve, reject) => {
    api("post", "co-web", null, `/corporateParts`, "token", data, "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const getAllParts = () => {
  return new Promise((resolve, reject) => {
    api("get", "ad-web", null, `/part`, "token", "", "")
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

const getAllPartsByCompanyIdAndBranchId = (
  companyId: Number,
  branchId: Number
) => {
  return new Promise((resolve, reject) => {
    api(
      "get",
      "co-web",
      null,
      `/companyParts/${companyId}/${branchId}`,
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

const deletePart = (id: number) => {
  return new Promise((resolve, reject) => {
    api("delete", "co-web", null, `/parts/${id}`, "token", "", "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export {
  addPart,
  getAllParts,
  getAllVehiclesAllocationsForDropDown,
  getAllPartsByCompanyIdAndBranchId,
  deletePart,
};
