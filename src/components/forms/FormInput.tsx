interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange,
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={name} className="text-overline mb-1 block text-foreground">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-gray-medium/30 bg-surface px-4 py-3 text-body text-foreground placeholder:text-gray-medium focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal transition-colors"
      />
    </div>
  );
}