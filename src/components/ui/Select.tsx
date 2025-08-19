"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { IoCheckmark } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

type SelectContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<string>> | undefined;
  value: string | undefined;
};

const SelectContext = createContext<SelectContextType | null>(null);

export const Select = ({
  children,
  value,
  setValue,
  className,
}: {
  children: React.ReactNode;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);

  const context: SelectContextType = {
    open,
    setOpen,
    setValue,
    value,
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      <SelectContext.Provider value={context}>
        {children}
      </SelectContext.Provider>
    </div>
  );
};

export const SelectHeader = ({
  children,
  className,
  placeHolder,
}: {
  children?: React.ReactNode;
  className?: string;
  placeHolder?: string;
}) => {
  const context = useContext(SelectContext);

  if (!context) {
    console.error("SelectHeader must be used within a Select component.");
    return null;
  }

  return (
    <div
      className={`flex justify-between items-center px-space-md py-space-sm rounded-md bg-bg-light border border-border ${className}`}
      onClick={() => context.setOpen((prv) => !prv)}
    >
      <span>{!!children ? children : placeHolder ?? "Select a value"}</span>
      <span
        className="ml-2 transform transition-transform duration-200"
        style={{ transform: context.open ? "rotate(180deg)" : "rotate(0deg)" }}
      >
        <TiArrowSortedDown size={20} />
      </span>
    </div>
  );
};

export const SelectBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const context = useContext(SelectContext);

  if (!context) {
    console.error("SelectBody must be used within a Select component.");
    return null;
  }

  return (
    <div
      className={`absolute z-10 w-full mt-1 px-1 border border-muted bg-on-surface shadow-lg py-1 rounded-radius-sm overflow-y-auto max-h-[22rem] transform origin-top transition-all duration-300 ease-in-out ${
        context.open
          ? "scale-100 opacity-100"
          : "scale-95 opacity-0 pointer-events-none"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export const SelectItem = ({
  children,
  itemValue,
  className,
}: {
  children: React.ReactNode;
  itemValue?: string;
  className?: string;
}) => {
  const context = useContext(SelectContext);

  if (!context) {
    console.error("SelectItem must be used within a Select component.");
    return null;
  }

  return (
    <div
      className={`px-3 py-2 cursor-pointer hover:bg-muted transition-colors duration-100 border-b border-muted last:border-0 rounded-radius-sm ${className}`}
      onClick={() => {
        const valueToSelect =
          itemValue !== undefined
            ? itemValue
            : typeof children === "string"
            ? children
            : "";

        if (context.setValue) {
          context.setValue(valueToSelect);
        }

        context.setOpen(false);
      }}
    >
      <div className="flex items-center justify-between">
        {children}
        <span>{context.value === itemValue && <IoCheckmark />}</span>
      </div>
    </div>
  );
};
