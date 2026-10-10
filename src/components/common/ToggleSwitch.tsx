import React from 'react';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  ariaLabel?: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  ariaLabel,
}) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={() => onChange(!checked)}
      className={`w-12 h-7 rounded-full transition-colors duration-200 relative p-1 cursor-pointer focus:outline-none shrink-0 inline-flex items-center ${
        checked ? 'bg-amber-500' : 'bg-stone-200'
      }`}
      dir="ltr"
    >
      <span
        className={`w-5 h-5 rounded-full bg-white shadow-md pointer-events-none transform transition-transform duration-200 ease-out ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );
};
