import "./form.css"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { useSelectForm } from "../../hooks/useSelectForm"
import FirstForm from "../firstForm/FirstForm"
import SecondForm from "../secondForm/SecondForm"
import ThirdForm from "../thirdForm/ThirdForm"
import { useState } from "react"
import { validateEmail, validatePassword, validatePhoneNumber } from "../utils/regex"

const INITIAL_USER_DATA: UserData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    brandName: "",
    brandType: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    taxId: "",
}

export default function Form() {
    const [userData, setUserData] = useState<UserData>(INITIAL_USER_DATA)
    const [isCheckedOne, setIsCheckedOne] = useState<boolean>(false)
    const [isCheckedTwo, setIsCheckedTwo] = useState<boolean>(false)
    const [isInvalid, setIsInvalid] = useState<boolean>(false)

    const onChange = (e: any) => {
        setIsInvalid(false)
        setUserData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const nextAction = () => {
        
        let check : boolean = false;
        
        if (currentStepIndex == 0) {
            setIsCheckedOne(true);
            setIsCheckedTwo(false)
            if (
                !validateEmail(userData.email) ||
                !validatePhoneNumber(userData.phoneNumber) ||
                !validatePassword(userData.password)
            ) {
                check = true;
            }
        }
            
        if (currentStepIndex == 1) {
            setIsCheckedOne(false)
            setIsCheckedTwo(true)

            Object.values(userData).forEach(val => {
                if (!val || val.trim().length === 0) {
                    check = true;
                }
            })
        }
        
        setIsInvalid(check)

        if (!check) {
            next();
            if (currentStepIndex == 1) console.log(userData)
        }
    }

    const previousAction = () => {
        setIsCheckedOne(false)
        setIsCheckedTwo(false)
        previous();
    }

    const {
        step, 
        steps, 
        currentStepIndex, 
        isFirstStep, 
        isLastStep,
        next,
        previous,
    } = useSelectForm([
        <FirstForm 
            onChange={onChange} 
            userData={userData} 
            isChecked={isCheckedOne}
        />,
        <SecondForm 
            onChange={onChange} 
            userData={userData} 
            isChecked={isCheckedTwo}
        />,
        <ThirdForm />
    ])

    const handleSubmit = () => {
        if (!isInvalid) {
            nextAction();
            console.log(userData);
        }
    }

  return (
    <div className="form">
        <div className="formInput">
            <div className="progressContainer">
                <div 
                    className="progressLevel"
                    style={{
                        width: `${(currentStepIndex + 1) * 100 / steps.length}` + "%",
                        borderTopRightRadius: currentStepIndex == 2 ? 16 : 32,
                        borderBottomRightRadius: currentStepIndex == 2 ? undefined : 32
                    }}
                />
                <div className="progressTitleContainer">
                    <div className="progressTitle" style={{color: currentStepIndex >= 0 ? 'white' : "#A8B4D7"}}>
                        <p className="number" style={{backgroundColor: currentStepIndex < 0 ? "#A8B4D7" : 'white', color: currentStepIndex < 0 ? 'white' : "#A8B4D7"}}>1</p> Your profile
                    </div>
                    <div className="progressTitle" style={{color: currentStepIndex >= 1 ? 'white' : "#A8B4D7"}}>
                        <p className="number" style={{backgroundColor: currentStepIndex < 1 ? "#A8B4D7" : 'white', color: currentStepIndex < 1 ? 'white' : "#A8B4D7"}}>2</p> Business Information
                    </div>
                    <div className="progressTitle" style={{color: currentStepIndex >= 2 ? 'white' : "#A8B4D7"}}>
                        <p className="number" style={{backgroundColor: currentStepIndex < 2 ? "#A8B4D7" : 'white', color: currentStepIndex < 2 ? 'white' : "#A8B4D7"}}>3</p> Submit
                    </div>
                </div>
            </div>
            {step}
        </div>
        {!isLastStep && (
            <div className="formAction">
                <button
                    type="button"
                    className="backToLogin"
                >
                    <FaAngleLeft className="arrow"/> Back to login
                </button>

                
                <div className="registerAction">
                    {!isFirstStep && (
                        <button className="previousAction" type="button" onClick={previousAction}>
                            <FaAngleLeft className="arrow" /> Previous Step
                        </button>
                    )}

                    <button className="nextAction" type="button" onClick={nextAction}>
                        {currentStepIndex == 1 ? "Submit" : "Next Step"} <FaAngleRight className="arrow" /> 
                    </button>
                </div>
                
            </div>
        )}
    </div>
  )
}