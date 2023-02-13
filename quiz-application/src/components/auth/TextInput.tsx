import type { ChangeEvent, FC } from "react";

type Props = {
    type?: string;
    placeholder: string;
    icon: string;
    name: string;
    onChange: (name: string, value: string) => void;
};

const TextInput: FC<Props> = ({ placeholder, icon, name, onChange, type = "text" }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        onChange(name, value);
    };
    return (
        <div className="textInput">
            <input name={name} type={type} placeholder={placeholder} onChange={handleChange} />
            <span className="material-icons-outlined">{icon}</span>
        </div>
    );
};

export default TextInput;
