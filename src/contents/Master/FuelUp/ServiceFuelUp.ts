import api from "../../../services/AxiosService";

const addFuelUp = (data: any) => {
    return new Promise((resolve, reject) => {
        api("post", "co-web", null, "/fuelUp", "token", data, "")
            .then((response: any) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export { addFuelUp };
