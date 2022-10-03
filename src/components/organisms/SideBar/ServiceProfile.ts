import api from "../../../services/AxiosService";

const getUserProfileDetails = (userId: number) => {
    return new Promise((resolve, reject) => {
      api(
        "get",
        "fm-web",
        null,
        `/fleet-management/oauth2/user/${userId}`,
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

export default getUserProfileDetails;