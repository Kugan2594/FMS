import api from "../../../services/AxiosService";

const getGeneratorByCompanyId = (companyId: number) => {
    return new Promise((resolve, reject) => {
        api(
            "get",
            "co-web",
            null,
            `/companyGenerator/${companyId}`,
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

const addGenerator = (data: any) => {
    return new Promise((resolve, reject) => {
        api("post", "co-web", null, "/generator", "token", data, "")
            .then((response: any) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const updateGeneratorById = (data: any) => {
    return new Promise((resolve, reject) => {
        api("put", "co-web", null, "/updateGenerator", "token", data, "")
            .then((reponse: any) => {
                resolve(reponse.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export { getGeneratorByCompanyId, addGenerator, updateGeneratorById };
