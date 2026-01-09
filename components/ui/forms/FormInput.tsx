import { Asterisk } from "lucide-react";
import React from "react";
import { FieldError } from "react-hook-form";

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  required?: boolean;
  boxClassName?: string;
  err?: FieldError;
};

export default function FormInput({
  label,
  type = "text",
  required = false,
  className = "",
  boxClassName = "",
  id,
  err,
  ...props
}: FormInputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={`w-full relative flex flex-col gap-y-2 ${boxClassName}`}>
      <label
        htmlFor={inputId}
        className="w-fit flex items-center gap-1 text-sm font-normal"
      >
        {label}
        {required && <Asterisk className="size-3 text-red-600" />}
      </label>

      <input
        id={inputId}
        type={type}
        required={required}
        className={`w-full rounded-md bg-(--color-background) px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 ${className}`}
        {...props}
      />

      {err && (
        <p className="text-xs line-clamp-1 left-0 -bottom-5 text-red-600 bg-(--red-12) px-1 rounded-full absolute">
          {err?.message}
        </p>
      )}
    </div>
  );
}
