// components/admin/ColorPicker.tsx
'use client';

import { useState } from 'react';

interface ColorPickerProps {
  label: string;
  name: string;
  defaultValue: string;
}

export default function ColorPicker({ label, name, defaultValue }: ColorPickerProps) {
  const [color, setColor] = useState(defaultValue);

  const handleColorChange = (value: string) => {
    setColor(value);
  };

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-1 flex items-center gap-2">
        <input 
          type="color" 
          id={`${name}Input`}
          name={name} 
          value={color}
          className="w-10 h-10 p-1 border border-gray-300 rounded-md cursor-pointer"
          onChange={(e) => handleColorChange(e.target.value)}
        />
        <input 
          type="text"
          id={`${name}Text`}
          value={color}
          className="w-full border border-gray-300 rounded-md shadow-sm p-2"
          onChange={(e) => handleColorChange(e.target.value)}
        />
      </div>
    </div>
  );
}