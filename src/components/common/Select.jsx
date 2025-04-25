
import React from 'react';

export const Select = ({
  label,
  options,
  value,
  onChange,
  error,
  multiple = false,
}) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <select
        multiple={multiple}
        value={value}
        onChange={(e) => {
          if (multiple) {
            const selected = Array.from(e.target.selectedOptions).map((o) => o.value);
            onChange(selected);
          } else {
            onChange(e.target.value);
          }
        }}
        className={`form-control ${error ? 'is-invalid' : ''}`}
      >
        <option value="" disabled={!multiple}>
          {multiple ? 'Select employees...' : 'Select an option'}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};


export default Select;
