import "./selectInput.css";
import { FaQuestionCircle } from "react-icons/fa";
import BrandHint from "../brandHint/BrandHint";

type SelectProps = {
    name: string,
    inputHeading?: string,
    type?: string,
    value: string,
    onChange: (e: any) => void,
    placeholder?: string,
    isObligatory?: boolean,
    isError?: boolean,
    errorMessage?: string,
    isHinted?: boolean,
}

export default function SelectInput(
    {
        name,
        inputHeading = "", 
        value, 
        onChange, 
        isObligatory = false, 
        isError = false, 
        errorMessage, 
        isHinted = false,
    }: SelectProps) {
  return (
    <div className="selectInput">
        <div
            className="selectTitle"
        >
            <p className="selectHeading">
                {inputHeading}
            </p>
            {isObligatory && <p className="error"><sup>*</sup></p>}
            {isHinted && <div className="hint">
                <FaQuestionCircle className="hintIcon" />
                <BrandHint className="toggleHint"/>
                </div>
            }
            
        </div>
        <select name={name} className="selectField" onChange={onChange} value={value}>
            <option>Select Type of Brand</option>
            <option value="1">Local</option>
            <option value="2">National</option>
        </select>
        
        {isObligatory && isError && <p className="error" style={{fontSize: 12, textAlign: 'left', width: 300}}>{errorMessage}</p>}
    </div>
  )
}