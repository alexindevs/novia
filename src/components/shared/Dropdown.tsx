"use client"

// Dropdown.js
import React, { useState } from 'react';

const Dropdown = ({ options, onSelect }: { options: string[], onSelect: (option: string) => void }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className={`w-max min-w-[150px] h-full rounded-xl p-2 bg-[#272727] ${isOpen ? 'rounded-b-none' : ''} cursor-pointer border-white border-[1px] relative inline-block`}>
      <div className="text-[12px]" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption : 'Select an option'}
        <span className={`arrow ${isOpen ? 'translate-y-[-50%] rotate-180 absolute right-[10px] top-[50%]' : 'translate-y-[-50%] absolute right-[10px] top-[50%]'}`}>&#9660;</span>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 z-50 min-w-[150px] flex flex-col border border-gray-300 border-t-0 rounded-b-lg bg-[#272727]">
          {options.map((option) => (
            <div key={option} className={`cursor-pointer p-2 border-b border-gray-300 text-white hover:bg-gray-200`} onClick={() => handleSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
