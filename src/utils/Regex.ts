export const noSplCharAndLetterRegex = /^[0-9]{2,10}$/;
export const phoneNumberRegex = /^(94)?(?:(7)(0|1|2|3|4|5|6|7|8|9)\d)\d{6}$/;
export const noSplCharAndNoRegex = /^[a-zA-Z\s]*$/;
export const nicNoRegex = /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/;
export const drivingLicenseNoRegex =
  /^([A-Z]{1}[0-9]{7}[A-Z]{1})|([A-Z]{1}[0-9]{7})$/;
export const amountNoRegex = /^([0-9])+$/;
export const lifeTiimeMonthNoRegex = /^([0-9])+$/;
export const lifeTimeMileageNoRegex = /^([0-9])+$/;
export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const contactNoRegex =
  /^(?:0|0094|\+94)?(?:(7)|21(0|1|2|3|4|5|6|7|8|9)\d)\d{7}$/;
