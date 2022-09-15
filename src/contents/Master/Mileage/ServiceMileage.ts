import api from "../../../services/AxiosService";

const getAllMileageHistoryById = (vehicleId: string) => {
    return new Promise((resolve, reject) => {
        api(
            "get",
            "co-web",
            null,
            `/mileageHistory/${vehicleId}`,
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

const addMileage = (data: object) => {
    return new Promise((resolve, reject) => {
        api("post", "co-web", null, "/mileageHistory", "token", data, "")
            .then((response: any) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export { getAllMileageHistoryById, addMileage };
