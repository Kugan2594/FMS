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

  // Insurance Document
  errorBox("12201", "Insurance Document already exist for this Vehicle");

  // Vehicle
  errorBox("1306", "Vehicle Number Already Exists");
  errorBox("107", "Vehicle Depend");
  errorBox("1300", "Vehicle doesn't exists in Resources");
  errorBox("120002", "Invalid Resource Path");
  errorBox("103", "Company Not Exists");
  errorBox("102", "Branch Not Exists");
  errorBox("120001", "Invalid OAUTH Path");
  errorBox("104", "Vehicle Not Exists");

  // Revenue License
  errorBox("12001", "Revenue License Already Exist for this Vehicle");

  // Emission Test
  errorBox("12101", "Emission Test Already Exist for this Vehicle");
  errorBox("12102", "Emission Test Not Exist");

  // Driver
  errorBox("100016", "Email Already Exists");
  errorBox("13025", "Driving License No Already Exists");
  errorBox("100019", "Mobile No Already Exists");
  errorBox("100020", "Nic No Already Exists");

  // Vehicle Service
  errorBox("401", "Vehicle Service Already Exists");
  errorBox("105", "Vehicle Not Exists");

  // User
  errorBox("100018", "You already Verified");

  // Branch
  errorBox("1001", "Branch is depended");
  errorBox("1000", "Branch Already Exists");

  // User
  errorBox("100018", "You already Verified");
  errorBox("1000002", "Invalid Token");
  errorBox("100013", "Invalid Email");
  errorBox("1000003", "Token Expired");
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

export const revenueLicenseDocumentUpdateSuccess = () =>
  notification.success({
    message: "Revenue License Document Updated Successfully",
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
export const partUpdateSuccess = () =>
  notification.success({
    message: "Part Updated Successfully",
    duration: 3,
  });
export const partDeleteSuccess = () =>
  notification.success({
    message: "Part Deleted Successfully",
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

export const vehicleUpdateSuccess = () =>
  notification.success({
    message: "Vehicle Updated Successfully",
    duration: 3,
  });

export const vehicleDeleteSuccess = () =>
  notification.success({
    message: "Vehicle Deleted Successfully",
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

export const driverUpdateSuccess = () =>
  notification.success({
    message: "Driver Updated Successfully",
    duration: 3,
  });

export const branchAdminAddSuccess = () =>
  notification.success({
    message: "Branch Admin Created Successfully",
    duration: 3,
  });

export const branchAdminUpdateSuccess = () =>
  notification.success({
    message: "Branch Admin Details Updated Successfully",
    duration: 3,
  });

export const branchAdminDeleteSuccess = () =>
  notification.success({
    message: "Branch Admin Deleted Successfully",
    duration: 3,
  });

export const serviceAddSuccess = () =>
  notification.success({
    message: "service Added Successfully",
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
export const partAddSuccess = () =>
  notification.success({
    message: "part Added Successfully",
    duration: 3,
  });

export const userVerifiedSuccess = () =>
  notification.success({
    message: "User Verified Successfully",
    duration: 3,
  });

export const assignedVehicleSuccess = () =>
  notification.success({
    message: "Vehicle Assigned Successfully",
    duration: 3,
  });

export const VehicleServiceDeletedSuccess = () =>
  notification.success({
    message: "Vehicle Service Deleted Successfully",
    duration: 3,
  });

export const revenueLicenseDocumentDeleteSuccess = () =>
  notification.success({
    message: "Revenue License Document Deleted Successfully",
    duration: 3,
  });

export const insuranceDocumentDeleteSuccess = () =>
  notification.success({
    message: "Insurance Document Deleted Successfully",
    duration: 3,
  });

export const ecoDocumentDeleteSuccess = () =>
  notification.success({
    message: "Emission Test Document Deleted Successfully",
    duration: 3,
  });
