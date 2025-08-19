import React from "react";
import { ModalContent, ModalWrapper } from "./ModalWrapper";

const ReservationModal = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}) => {
  return (
    <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalContent
        className={`duration-300 ease-in-out lg:w-[800px] rounded-xl border border-border lg:p-space-xl p-space-base bg-bg-light w-[90%] ${
          isOpen
            ? "opacity-100 scale-100"
            : "scale-50 opacity-0 pointer-events-none"
        }`}
      >
        <div>
          <h2 className="text-[var(--text-size-24)] sm:text-[var(--text-size-32)] font-extrabold text-center mb-4 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-[var(--color-primary)]">
            BMU Radiology & Imaging Lab Appointment
          </h2>
          <div className="space-y-[var(--spacing-space-md)] sm:space-y-[var(--spacing-space-lg)]">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-bg-light)] font-bold text-base sm:text-lg mr-3 sm:mr-4">
                  1
                </div>
              </div>
              <div>
                <p className="font-semibold text-[var(--text-size-16)] sm:text-[var(--text-size-18)] leading-snug">
                  To book your lab test, please fill out the official
                  <span className="text-[var(--color-primary)] font-bold">
                    {" "}
                    Appointment Form
                  </span>
                  .
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-bg-light)] font-bold text-base sm:text-lg mr-3 sm:mr-4">
                  2
                </div>
              </div>
              <div>
                <p className="font-semibold text-[var(--text-size-16)] sm:text-[var(--text-size-18)] leading-snug">
                  Once confirmed, you will receive an SMS from
                  <span className="font-[var(--font-geist-mono)] bg-[var(--color-border)] px-[var(--spacing-space-xs)] py-[var(--spacing-space-xs)] rounded-md text-sm text-[var(--color-text-color)] ml-1">
                    +8801552146202
                  </span>
                  . You must show this message at the
                  <span className="text-[var(--color-primary)] font-bold">
                    {" "}
                    F Block gate
                  </span>{" "}
                  to access the lab.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-bg-light)] font-bold text-base sm:text-lg mr-3 sm:mr-4">
                  3
                </div>
              </div>
              <div>
                <p className="font-semibold text-[var(--text-size-16)] sm:text-[var(--text-size-18)] leading-snug">
                  {`${"All radiology and imaging test fees must be paid according to the university's prescribed rates."}`}
                </p>
              </div>
            </div>
          </div>
          <div
            className="mt-6 sm:mt-8 bg-[var(--color-warning)] bg-opacity-10 border-l-4 border-[var(--color-warning)] p-3 sm:p-4 rounded-md"
            role="alert"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 text-[var(--color-warning)]">
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.25a9.75 9.75 0 00-1.077 19.462 9.75 9.75 0 001.077-19.462zm-1.5 8.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 18.75a.75.75 0 01-.75-.75V12a.75.75 0 011.5 0v6a.75.75 0 01-.75.75z" />
                </svg>
              </div>
              <div className="ml-1">
                <p className="sm:text-[var(--text-size-16)] font-medium text-[var(--color-text-color)]">
                  <span className="font-bold">Special Note:</span> If you are
                  absent from an appointment without a valid reason, authorities
                  may deny future appointment requests to your mobile number.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ReservationModal;
