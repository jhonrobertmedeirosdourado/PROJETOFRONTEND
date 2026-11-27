import { useId } from 'react';
import './FilterGroup.css';

// Props: title, inputType ("checkbox" | "radio"), options [{ text, value? }],
// e opcionalmente: name, selected (array p/ checkbox ou string p/ radio), onChange(value)
export default function FilterGroup({ title, inputType = 'checkbox', options = [], name, selected, onChange }) {
  const autoId = useId();
  // Radios só funcionam como grupo se compartilharem o mesmo "name"
  const groupName = name ?? autoId;
  const controlled = selected !== undefined;
  const isChecked = (value) => (Array.isArray(selected) ? selected.includes(value) : selected === value);

  return (
    <div className="filter-group" role="group" aria-labelledby={`${groupName}-title`}>
      <h3 id={`${groupName}-title`} className="filter-group__title">{title}</h3>
      {options.map((option) => {
        const value = option.value ?? option.text;
        return (
          <label key={value} className="filter-group__option">
            <input
              type={inputType}
              name={groupName}
              value={value}
              onChange={() => onChange?.(value)}
              {...(controlled ? { checked: isChecked(value) } : {})}
            />
            <span>{option.text}</span>
          </label>
        );
      })}
    </div>
  );
}
