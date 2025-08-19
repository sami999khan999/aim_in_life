export type AppointmentFormState = {
  patientName: string;
  patientPhoneNumber: string;
  ageYear: number | null;
  ageMonth: number | null;
  gender: "male" | "female" | "other" | "";
  zila: string;
  upazila: string;
  date: string;
  testType: string;
};
