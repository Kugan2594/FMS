import api from "../../services/AxiosService";

const getAllNotificationsByUserId = (userId: any) => {
  return new Promise((resolve, reject) => {
    api("get", "co-web", null, `/userNotification/${userId}`, "token", "", "")
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const readNotification = (id: any) => {
    return new Promise((resolve, reject) => {
      api("put", "co-web", null, `/notification/status/${id}`, "token", "", "")
        .then((response: any) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

export { getAllNotificationsByUserId, readNotification };