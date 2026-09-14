interface FormTextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function FormTextarea({
  label,
  name,
  placeholder,
  required = false,
  rows = 5,
  value,
  onChange,
}: FormTextareaProps) {
  return (
    <div>
      <label htmlFor={name} className="text-overline mb-1 block text-foreground">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-gray-medium/30 bg-surface px-4 py-3 text-body text-foreground placeholder:text-gray-medium focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal transition-colors resize-vertical"
      />
    </div>
  );
}