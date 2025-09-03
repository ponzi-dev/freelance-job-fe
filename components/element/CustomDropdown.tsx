'use client'

import React, { useState } from "react"

type DropdownItem = {
    label: string
    count?: number
}

interface CustomDropdownProps {
    label: string
    items: DropdownItem[]
    onSelect?: (item: DropdownItem) => void
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, items, onSelect }) => {
    const [open, setOpen] = useState(false)

    const handleSelect = (item: DropdownItem) => {
        if (onSelect) onSelect(item)
        setOpen(false)
    }

    return (
        <div className="custom-dropdown dropdown">
            <button
                className={`custom-dropdown-toggle dropdown-toggle ${open ? "show" : ""}`}
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                {label}
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={6} viewBox="0 0 12 6" fill="none">
                    <path
                        d="M12 0.633816C11.9468 0.446997 11.8569 0.28353 11.6806 0.158011C11.3811 -0.0492418 10.9485 -0.0550799 10.649 0.155092C10.5925 0.195958 10.5359 0.239744 10.4826 0.286449C9.02519 1.56499 7.5644 2.84645 6.10694 4.125C6.07367 4.15419 6.04705 4.18922 5.96719 4.24176C5.94389 4.20673 5.93059 4.16294 5.89731 4.13375C4.42654 2.84062 2.95245 1.5504 1.48168 0.257257C1.22213 0.0295716 0.922652 -0.0579998 0.563279 0.0412478C0.0408573 0.1872 -0.172104 0.776848 0.157321 1.16216C0.193924 1.20595 0.237182 1.24681 0.280439 1.28768C1.97748 2.7764 3.67119 4.26511 5.36823 5.75091C5.67769 6.02238 6.07034 6.07492 6.42639 5.89394C6.5129 5.85015 6.58944 5.78594 6.65931 5.72464C8.30644 4.27971 9.95024 2.83478 11.6007 1.39277C11.7837 1.23222 11.9468 1.06875 12 0.838149C12 0.771011 12 0.703873 12 0.633816Z"
                        fill="#06131C"
                    />
                </svg>
            </button>
            {open && (
                <ul className="custom-dropdown-menu dropdown-menu show" style={{ marginTop: "10px" }}>
                    {items.map((item, idx) => (
                        <li
                            key={idx}
                            className="dropdown-item cursor-pointer"
                            onClick={() => handleSelect(item)}
                        >
                            {item.label} {item.count !== undefined && <span>({item.count})</span>}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default CustomDropdown
