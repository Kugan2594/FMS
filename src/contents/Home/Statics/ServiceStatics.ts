import api from "../../../services/AxiosService";

const getAllExpensesByCompanyId = (
    companyId: number,
  ) => {
    return new Promise((resolve, reject) => {
      api(
        "get",
        "co-web",
        null,
        `/expenses/company/${companyId}`,
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

  export {getAllExpensesByCompanyId};