import api from "services/AxiosService";

const getAllEmissionTestDocumentByUserId = (employeeId: number) => {
  return new Promise((resolve, reject) => {
    api(
      "get",
      "fm-web",
      null,
      `/emissionTestByUserId/${employeeId}`,
      "",
      "",
      ""
    )
      .then((response: any) => {
        resolve(response.data.results.getEmployeeleavetypeByEmployeeId);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export {
    getAllEmissionTestDocumentByUserId,
  
  };