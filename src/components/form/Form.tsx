import "./form.css"
import { FaAngleLeft } from "react-icons/fa"
import { useSelectForm } from "../../hooks/useSelectForm"
import FirstForm from "../firstForm/FirstForm"
import SecondForm from "../secondForm/SecondForm"
import ThirdForm from "../thirdForm/ThirdForm"
import { useState } from "react"

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

    const onChange = (e: any) => {
        setUserData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
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
        <FirstForm onChange={onChange} userData={userData} />,
        <SecondForm onChange={onChange} userData={userData} />,
        <ThirdForm />
    ])

    const handleSubmit = () => {
        next();
        console.log(userData);
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
                    <FaAngleLeft /> Back to login
                </button>

                
                <div className="registerAction">
                    {!isFirstStep && (
                        <button className="previousAction" type="button" onClick={previous}>
                            Previous Step
                        </button>
                    )}

                    <button className="nextAction" type="button" onClick={currentStepIndex == 1 ? handleSubmit : next}>
                        {currentStepIndex == 1 ? "Submit" : "Next Step"}
                    </button>
                </div>
                
            </div>
        )}
    </div>
  )
}