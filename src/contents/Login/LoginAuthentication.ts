const setAuthentication = (value:any) => {
  localStorage.setItem('authenticate', value);
};

const getAuthentication = () => {
  return localStorage.getItem('authenticate') === 'true' ? true : false;
};
const setToken = (value:any) => {
  localStorage.setItem('token', value);
};
const getToken = () => {
  return localStorage.getItem('token');
};
const setUserDetails = (value:any) => {
  localStorage.setItem('user', value);
};
const getUserDetails = () => {
  let userData:any = localStorage.getItem('user');
  return JSON.parse(userData);
};

const setUserName = (value:any) => {
  localStorage.setItem('userName', value);
};
const getUserName = () => {
  let userData = localStorage.getItem('userName');
  return userData;
};


const setUserRolePermission = (permission:any) => {
  let permissionStr = JSON.stringify(permission);
  localStorage.setItem('permission', permissionStr);
};
const getUserRolePermission = () => {
  let userPermission:any = localStorage.getItem('permission');
  return JSON.parse(userPermission);
};
export {
  setAuthentication,
  getAuthentication,
  setToken,
  getToken,
  setUserDetails,
  getUserDetails,
  setUserRolePermission,
  getUserRolePermission,
  setUserName,
  getUserName
};
