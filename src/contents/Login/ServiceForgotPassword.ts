import api from "../../services/AxiosService";
export const addItemApi = (data: any) => {
    return new Promise((resolve, reject) => {
        api("POST", "fm-web", null, `/email/${data}`, "", "", "")
            .then((response: any) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const resetPasswordApi = (data: String) => {
    return new Promise((resolve, reject) => {
        api("PUT", "fm-web", null, "/userpasswordReset", "", data, "")
            .then((response: any) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
