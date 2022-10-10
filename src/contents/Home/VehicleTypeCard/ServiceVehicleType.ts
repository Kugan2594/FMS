import api from "../../../services/AxiosService";
const getAllVehicleType = () => {
    return new Promise((resolve, reject) => {
        api("get", "ad-web", null, `/vehicleType`, "token", "", "")
            .then((response: any) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
export { getAllVehicleType };
