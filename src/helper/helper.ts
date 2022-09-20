import { notification } from "antd";

export const errHandler = (err: any) => {
  console.log(err);

  let error;

  if (err.status === "VALIDATION_FAILURE") {
    error = err.validationFailures[0];
  }
  let { code } = error;

  const errorBox = (errCode: any, errMessage: any) => {
    if (code === errCode) {
      return notification.error({
        message: errMessage,
        duration: 3,
      });
    }
  };

  // Common
  errorBox("120000", "Notify Account Balance Not Enough");

  // Vehicle
  errorBox("1306", "Vehicle Number Already Exists");

  // Insurance Document
  errorBox("12201", "Insurance Document already exist for this Vehicle");

  // Revenue License
  errorBox("12001", "Revenue License Already Exist for this Vehicle");

  // Emission Test
  errorBox("12101", "Emission Test Already Exist for this Vehicle");

  // Driver
  errorBox("100016", "Email Already Exists");
  errorBox("13025", "Driving License No Already Exists");
  errorBox("100019", "Mobile No Already Exists");
  errorBox("100020", "Nic No Already Exists");

  // Branch
  errorBox("1001", "Branch is depended");
};

//success message popups
export const insuranceDocumentAddSuccess = () =>
  notification.success({
    message: "Insurance Document Added Successfully",
    duration: 3,
  });

export const revenueLicenseDocumentAddSuccess = () =>
  notification.success({
    message: "Revenue License Document Added Successfully",
    duration: 3,
  });

export const emissionTestDocumentAddSuccess = () =>
  notification.success({
    message: "Emission Test Document Added Successfully",
    duration: 3,
  });

export const loginSuccess = () =>
  notification.success({
    message: "Successfully logged in",
    duration: 3,
  });

export const loginError = () =>
  notification.error({
    message: "Incorrect username or password",
    duration: 3,
  });

export const Notification = (message: any) => {
  return notification.success({
    message: message,
  });
};

export const generatorAddSuccess = () =>
  notification.success({
    message: "Generator Added Successfully",
    duration: 3,
  });

export const generatorUpdateSuccess = () =>
  notification.success({
    message: "Generator Updated Successfully",
    duration: 3,
  });

export const generatorDeleteSuccess = () =>
  notification.success({
    message: "Generator Deleted Successfully",
    duration: 3,
  });

export const vehicleAddSuccess = () =>
  notification.success({
    message: "Vehicle Added Successfully",
    duration: 3,
  });

export const fuelUpAddSuccess = () =>
  notification.success({
    message: "Fuel Up Added Successfully",
    duration: 3,
  });

export const mileageAddSuccess = () =>
  notification.success({
    message: "Mileage Added Successfully",
    duration: 3,
  });

export const driverAddSuccess = () =>
  notification.success({
    message: "Driver Added Successfully",
    duration: 3,
  });

export const driverDeleteSuccess = () =>
  notification.success({
    message: "Driver Deleted Successfully",
    duration: 3,
  });

export const branchAddSuccess = () =>
  notification.success({
    message: "Branch Added Successfully",
    duration: 3,
  });

export const branchUpdateSuccess = () =>
  notification.success({
    message: "Branch Updated Successfully",
    duration: 3,
  });

export const branchDeleteSuccess = () =>
  notification.success({
    message: "Branch Deleted Successfully",
    duration: 3,
  });
