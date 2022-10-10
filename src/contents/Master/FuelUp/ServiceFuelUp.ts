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

const getAllFuelUpHistoryById = (vehicleId: string) => {
    return new Promise((resolve, reject) => {
        api(
            "get",
            "co-web",
            null,
            `/fuelUp/${vehicleId}`,
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

export { addFuelUp, getAllFuelUpHistoryById };
