import api from "../../../services/AxiosService";

const getAllVehiclesByCompanyId = (companyId: any) => {
    return new Promise((resolve, reject) => {
        api(
            "get",
            "co-web",
            null,
            `/companyVehicle/${companyId}`,
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

const addVehicle = (data: any) => {
    return new Promise((resolve, reject) => {
        api("post", "co-web", null, "/companyVehicle", "token", data, "")
            .then((response: any) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export { addVehicle, getAllVehiclesByCompanyId };
