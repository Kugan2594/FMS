import api from "../../../services/AxiosService";

const getAllDrivingLicenseTypes = () => {
    return new Promise((resolve, reject) => {
        api("get", "fm-web", null, `/drivingLicenseType`, "token", "", "")
          .then((response: any) => {
            resolve(response.data.results.drivingLicenseType);
          })
          .catch((error) => {
            reject(error);
          });
      });
};

export {getAllDrivingLicenseTypes}