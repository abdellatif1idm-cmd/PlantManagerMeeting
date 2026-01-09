import { Asterisk } from "lucide-react";
import React from "react";
import { FieldError } from "react-hook-form";

type FormTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  required?: boolean;
  boxClassName?: string;
  err?: FieldError;
};

export default function FormTextarea({
  label,
  required = false,
  className = "",
  boxClassName = "",
  id,
  err,
  ...props
}: FormTextareaProps) {
  const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={`w-full relative flex flex-col gap-y-2 ${boxClassName}`}>
      <label
        htmlFor={textareaId}
        className="w-fit flex items-center gap-1 text-sm font-normal"
      >
        {label}
        {required && <Asterisk className="size-3 text-red-600" />}
      </label>

      <textarea
        id={textareaId}
        required={required}
        className={`w-full min-h-25 resize-y rounded-md bg-(--color-background) px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500"} ${className}`}
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
