"use client"
import { useState, useRef, useEffect } from "react";

export default function MultiSelectDropdown({ options, selectedOptions, onChange, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {

    const closeOnClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeOnClickOutside);
    return () => document.removeEventListener("click", closeOnClickOutside);
  }, []);

  const handleToggle = (option) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((o) => o !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="border p-2 rounded bg-white cursor-pointer"
      >
        {selectedOptions.length > 0 ? selectedOptions.join(", ") : "Select..."}
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 bg-white border rounded shadow max-h-48 overflow-y-auto w-full">
          {options.map((option) => (
            <label key={option} className="block px-4 py-2 hover:bg-gray-100">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleToggle(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
