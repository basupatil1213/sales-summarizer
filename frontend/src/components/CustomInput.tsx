import React from "react";
import { Input } from "./ui/input";

type CustomInputProps = {
    value: string | File;
    handleChange: (value: string | File) => void;
    type?: "text" | "password" | "file";
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'>;

const CustomInput = ({ value, handleChange, type = "text", ...inputProps }: CustomInputProps) => {
    return (
        <Input
            type={type}
            {...(type !== "file" && { value: value as string })}
            onChange={(e) => {
                if (type === "file") {
                    const file = e.target.files ? e.target.files[0] : null;
                    if (file) {
                        handleChange(file);
                    }
                } else {
                    handleChange(e.target.value);
                }
            }}
            {...inputProps}
        />
    );
};

export default CustomInput;
