// import {FaQuestionCircle} from "react-icons/fa"
import "./textInput.css"

type InputProps = {
    name: string,
    inputHeading?: string,
    type?: string,
    value: string,
    onChange: (e: any) => void,
    placeholder?: string,
    isObligatory?: boolean,
    isError?: boolean,
    errorMessage?: string,
}

export default function TextInput(
    {
        name,
        inputHeading = "", 
        type = "text",
        value, 
        onChange, 
        placeholder, 
        isObligatory = false, 
        isError = false, 
        errorMessage, 
    }: InputProps) {
    
  return (
    <div
        className="input"
    >
        <div
            className="inputTitle"
        >
            <p className="inputHeading">
                {inputHeading}
            </p>
            {isObligatory && <p className="error"><sup>*</sup></p>}
        </div>
        <input
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="inputField"
            type={type}
        />
        {isObligatory && isError && <p className="error">{errorMessage}</p>}
    </div>
  )
}