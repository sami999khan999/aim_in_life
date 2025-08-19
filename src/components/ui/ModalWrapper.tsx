import { ClassValue, clsx } from "clsx";
import React from "react";

export const ModalWrapper = ({
  children,
  setIsOpen,
  isOpen,
  className,
}: {
  children: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  className?: ClassValue;
}) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 bg-bg-dark/10 backdrop-blur-xs flex justify-center items-center z-50 duration-300",
        !isOpen && "pointer-events-none opacity-0",
        className
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </div>
  );
};

export const ModalContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassValue;
}) => {
  return (
    <div onClick={(e) => e.stopPropagation()} className={`${className}`}>
      {children}
    </div>
  );
};
