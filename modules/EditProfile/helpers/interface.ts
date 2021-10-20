export interface EDIT_PROFILE_FORM_VALUES {
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
    day: number;
    month: number;
  };
}
