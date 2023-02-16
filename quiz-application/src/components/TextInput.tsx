import type { ChangeEvent, FC } from "react";

type Props = {
    type?: string;
    placeholder: string;
    icon: string;
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
};

const TextInput: FC<Props> = ({ placeholder, icon, name, onChange, type = "text" }) => {
    return (
        <div className="textInput">
            <input name={name} type={type} placeholder={placeholder} onChange={onChange} />
            <span className="material-icons-outlined">{icon}</span>
        </div>
    );
};

export default TextInput;
