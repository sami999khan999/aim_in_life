import { DateData, TestTypes } from "@/constants/AppointmentConstants";
import { bangladeshDistrictData } from "@/constants/DistrictsConstants";
import { AppointmentFormState } from "@/types/appointmentType";
import React, { useContext, useState } from "react";
import ReservationModal from "./AppointmentModal";
import { Select, SelectBody, SelectHeader, SelectItem } from "./Select";
import { ToastContext } from "./ToastProvider";

const ReservationForm = () => {
  const [zila, setZila] = useState("");
  const [upazila, setUpsZila] = useState("");
  const [date, setDate] = useState("");
  const [selectTest, setSelectTest] = useState("");

  const [isOpen, setIsopen] = useState(false);

  const [appointmentForm, setAppointmentForm] = useState<AppointmentFormState>({
    patientName: "",
    patientPhoneNumber: "",
    ageYear: null,
    ageMonth: null,
    gender: "",
    zila: zila ? zila : "",
    upazila: upazila ? upazila : "",
    date: date ? date : "",
    testType: selectTest ? selectTest : "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const toast = useContext(ToastContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAppointmentForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const selectedDistrict = bangladeshDistrictData.find((d) => d.zila === zila);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!appointmentForm.patientName.trim())
      newErrors.patientName = "Patient name is required.";
    if (!appointmentForm.ageYear)
      newErrors.ageYear = "Age (Years) is required.";
    if (!appointmentForm.patientPhoneNumber.trim())
      newErrors.patientPhoneNumber = "Phone number is required.";
    if (!appointmentForm.gender) newErrors.gender = "Please select gender.";
    if (!zila) newErrors.zila = "District is required.";
    if (!upazila) newErrors.upazila = "Upazila is required.";
    if (!date) newErrors.date = "Date is required.";
    if (!selectTest) newErrors.testType = "Please select a test type.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("✅ Form submitted successfully:", {
        ...appointmentForm,
        zila,
        upazila,
        date,
        testType: selectTest,
      });
      toast?.addToast({
        title: "Success",
        subtitle: "Your appointment has been successfully reserved.",
        varient: "success",
      });
    }
  };

  return (
    <div className="lg:mt-[4rem] mt-[2rem] space-y-space-xl relative">
      <ReservationModal isOpen={isOpen} setIsOpen={setIsopen} />

      <div className="flex flex-col lg:flex-row lg:px-space-xl gap-space-xl">
        <form
          onSubmit={handleSubmit}
          className="lg:p-space-base p-space-sm rounded-lg w-full space-y-space-base bg-bg-light shadow-md"
        >
          {/* Patient Name */}
          <div className="space-y-space-sm">
            <label
              htmlFor="patientName"
              className="text-sm font-medium text-text-color-muted"
            >
              Patient Name
            </label>
            <input
              type="text"
              placeholder="Enter patient name"
              name="patientName"
              id="patientName"
              value={appointmentForm.patientName}
              onChange={handleInputChange}
              className="bg-bg-light px-4 py-2 w-full rounded-md border border-border-muted focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
            />
            {errors.patientName && (
              <p className="text-danger text-sm">{errors.patientName}</p>
            )}
          </div>

          {/* Age */}
          <div className="flex gap-space-base">
            <div className="flex flex-col gap-space-xs w-full">
              <label
                htmlFor="ageYear"
                className="text-sm font-medium text-text-color-muted"
              >
                Age (Years)
              </label>
              <input
                type="text"
                name="ageYear"
                id="ageYear"
                placeholder="Years"
                value={appointmentForm.ageYear || ""}
                onChange={handleInputChange}
                className="bg-bg-light px-4 py-2 w-full rounded-md border border-border-muted focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
              />
              {errors.ageYear && (
                <p className="text-danger text-sm">{errors.ageYear}</p>
              )}
            </div>
            <div className="flex flex-col gap-space-xs w-full">
              <label
                htmlFor="ageMonth"
                className="text-sm font-medium text-text-color-muted"
              >
                Age (Months)
              </label>
              <input
                type="text"
                name="ageMonth"
                id="ageMonth"
                placeholder="Months"
                value={appointmentForm.ageMonth || ""}
                onChange={handleInputChange}
                className="bg-bg-light px-4 py-2 w-full rounded-md border border-border-muted focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
              />
              {errors.ageMonth && (
                <p className="text-danger text-sm">{errors.ageMonth}</p>
              )}
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-space-xs">
            <label
              htmlFor="patientPhoneNumber"
              className="text-sm font-medium text-text-color-muted"
            >
              Patient Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter phone number"
              name="patientPhoneNumber"
              id="patientPhoneNumber"
              value={appointmentForm.patientPhoneNumber}
              onChange={handleInputChange}
              className="bg-bg-light px-4 py-2 rounded-md border border-border-muted focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
            />
            {errors.patientPhoneNumber && (
              <p className="text-danger text-sm">{errors.patientPhoneNumber}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <div className="flex gap-space-base items-center">
              <p className="text-sm font-medium text-text-color-muted">
                Gender
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={appointmentForm.gender === "male"}
                  onChange={handleInputChange}
                  className="accent-primary w-4 h-4"
                />
                <label htmlFor="male" className="text-sm">
                  Male
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={appointmentForm.gender === "female"}
                  onChange={handleInputChange}
                  className="accent-primary w-4 h-4"
                />
                <label htmlFor="female" className="text-sm">
                  Female
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  checked={appointmentForm.gender === "other"}
                  onChange={handleInputChange}
                  className="accent-primary w-4 h-4"
                />
                <label htmlFor="other" className="text-sm">
                  Other
                </label>
              </div>
            </div>
            {errors.gender && (
              <p className="text-danger text-sm">{errors.gender}</p>
            )}
          </div>
          {/* Zila & Upazila Dropdown */}
          <div className="flex gap-space-base">
            <div className="space-y-space-sm w-full">
              <label className="text-sm font-medium text-text-color-muted">
                District (Zila)
              </label>
              <Select setValue={setZila} value={zila}>
                <SelectHeader className="bg-bg-light border border-border-muted rounded-md px-3 py-2">
                  {zila || <p className="text-text-color-muted">Select Zila</p>}
                </SelectHeader>
                <SelectBody className="bg-bg-light z-30 h-[15rem] border border-border rounded-lg overflow-y-auto shadow">
                  {bangladeshDistrictData.map((district) => (
                    <SelectItem
                      key={district.zila}
                      itemValue={district.zila}
                      className="border-b border-border hover:bg-primary/10 px-3 py-2 cursor-pointer"
                    >
                      {district.zila}
                    </SelectItem>
                  ))}
                </SelectBody>
              </Select>
              {errors.zila && (
                <p className="text-danger text-sm">{errors.zila}</p>
              )}
            </div>

            {/* Upazila Dropdown */}
            <div className="space-y-space-sm w-full">
              <label className="text-sm font-medium text-text-color-muted">
                Upazila
              </label>
              <Select setValue={setUpsZila} value={upazila}>
                <SelectHeader className="bg-bg-light border border-border-muted rounded-md px-3 py-2">
                  {upazila || (
                    <p className="text-text-color-muted">Select Upazila</p>
                  )}
                </SelectHeader>
                <SelectBody className="bg-bg-light z-30 h-[15rem] border border-border rounded-lg overflow-y-auto shadow">
                  {selectedDistrict ? (
                    selectedDistrict.upazila.map((up) => (
                      <SelectItem
                        key={up}
                        itemValue={up}
                        className="border-b border-border hover:bg-primary/10 px-3 py-2 cursor-pointer"
                      >
                        {up}
                      </SelectItem>
                    ))
                  ) : (
                    <p className="p-2 text-sm text-gray-400">
                      Please select a district first
                    </p>
                  )}
                </SelectBody>
              </Select>
              {<p className="text-danger text-sm">{errors.upazila}</p>}
            </div>
          </div>

          {/* Date */}
          <div className="space-y-space-sm w-full">
            <label className="text-sm font-medium text-text-color-muted">
              Date
            </label>
            <Select setValue={setDate} value={date}>
              <SelectHeader className="bg-bg-light border border-border-muted rounded-md px-3 py-2">
                {date || <p className="text-text-color-muted">Select Date</p>}
              </SelectHeader>
              <SelectBody className="bg-bg-light z-30 h-[15rem] border border-border rounded-lg overflow-y-auto shadow">
                {DateData.map((date) => (
                  <SelectItem
                    key={date}
                    itemValue={date}
                    className="border-b border-border hover:bg-primary/10 px-3 py-2 cursor-pointer"
                  >
                    {date}
                  </SelectItem>
                ))}
              </SelectBody>
            </Select>
            {errors.date && (
              <p className="text-danger text-sm">{errors.date}</p>
            )}
          </div>

          {/* Test Type */}
          <div>
            <label className="text-sm font-medium text-text-color-muted">
              Select a Test
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {TestTypes.map((test, i) => (
                <div
                  key={i}
                  className={`${
                    selectTest === test
                      ? "bg-primary text-white shadow-md"
                      : "bg-bg-light text-text-color-muted border border-border-muted hover:bg-primary/10"
                  } px-4 py-2 rounded-md cursor-pointer transition`}
                  onClick={() => setSelectTest(test)}
                >
                  {test}
                </div>
              ))}
            </div>
            {errors.testType && (
              <p className="text-danger text-sm">{errors.testType}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-primary text-bg-light w-full px-6 py-2 rounded-md hover:bg-text-color duration-200"
          >
            Submit
          </button>
        </form>

        <div className="hidden lg:block border-l border-border-muted h-auto"></div>

        {/* Summary */}
        <div className="lg:w-[30rem] w-full flex flex-col justify-between">
          <div className="bg-bg-light p-6 rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-semibold text-primary border-b pb-2">
              Appointment Summary
            </h2>

            <div className="space-y-2 text-text-color-muted">
              <p>
                <span className="font-medium text-text-color">Name:</span>{" "}
                {appointmentForm.patientName || "N/A"}
              </p>
              <p>
                <span className="font-medium text-text-color">Phone:</span>{" "}
                {appointmentForm.patientPhoneNumber || "N/A"}
              </p>
              <p>
                <span className="font-medium text-text-color">Age:</span>{" "}
                {appointmentForm.ageYear || "-"} years{" "}
                {appointmentForm.ageMonth || "-"} months
              </p>
              <p>
                <span className="font-medium text-text-color">Gender:</span>{" "}
                {appointmentForm.gender || "N/A"}
              </p>
              <p>
                <span className="font-medium text-text-color">
                  District (Zila):
                </span>{" "}
                {appointmentForm.zila || zila || "N/A"}
              </p>
              <p>
                <span className="font-medium text-text-color">Upazila:</span>{" "}
                {appointmentForm.upazila || upazila || "N/A"}
              </p>
              <p>
                <span className="font-medium text-text-color">Date:</span>{" "}
                {appointmentForm.date || date || "N/A"}
              </p>
              <p>
                <span className="font-medium text-text-color">Test Type:</span>{" "}
                <span
                  className={`px-2 py-1 rounded-md text-sm ${
                    appointmentForm.testType || selectTest
                      ? "bg-primary/10 text-primary"
                      : "text-gray-400"
                  }`}
                >
                  {appointmentForm.testType || selectTest || "N/A"}
                </span>
              </p>
            </div>
          </div>
          <div>
            <button
              className="bg-secondary/80 text-bg-dark w-full py-space-sm hover:bg-text-color rounded-md flex items-center justify-center cursor-pointer duration-200 mt-space-base"
              onClick={() => setIsopen(true)}
            >
              Have a question?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
