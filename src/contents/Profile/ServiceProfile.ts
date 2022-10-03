import api from "../../services/AxiosService";

const changeUserPassword = (data: any) => {
    return new Promise((resolve, reject) => {
        api("put", "fm-web", null, `/changePassword`, "token", data, "")
            .then((response: any) => {
                resolve(response);
            })
            .catch((error: any) => {
                reject(error);
            });
    });
};

export { changeUserPassword };
