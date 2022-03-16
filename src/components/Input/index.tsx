import React from 'react'

interface InputProps {
    label: string,
    value: string,
    setValue: Function
}
export function Input({label, value, setValue}: InputProps) {
  return (
    <label className='containerInput'>
        {label}
        <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
        </div>
    </label>
  )
}
