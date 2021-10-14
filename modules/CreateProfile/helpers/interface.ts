export interface CREATE_PROFILE_FORM_VALUES {
  firstName: string;
  lastName: string;
  organizationType: string;
  organizationName: string;
  emailAddress: string;
  country: string;
  phoneNumber: string;
  gender: string;
  nationality: string;
  birthDate: {
    year: string;
    day: string;
    month: string;
  };
}

export const defaultFormValues = {
  firstName: "",
  lastName: "",
  organizationType: "",
  organizationName: "",
  emailAddress: "",
  country: "",
  phoneNumber: "",
  gender: "",
  nationality: "",
  month: "",
  day: "",
  year: "",
};
