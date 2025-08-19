import React from "react";

interface FormInputProps {
  label: string;
  id: string;
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  pattern?: string;
  title?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  label,
  id,
  type = "text",
  name,
  value,
  placeholder,
  pattern,
  title,
  required = false,
  onChange,
}: FormInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
        required={required}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      />
    </div>
  );
}
