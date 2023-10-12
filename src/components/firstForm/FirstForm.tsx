import TextInput from "../textInput/TextInput";
import "./firstForm.css";
import { validateEmail, validatePassword, validatePhoneNumber } from "../utils/regex";

type Props = {
    userData: UserData,
    onChange: (e: any) => void,
    isChecked: boolean,
}

export default function FirstForm({userData, onChange, isChecked = false}: Props) {


  return (
    <div className="firstForm">
        <h3 className="stepLevel">Step 1</h3>
        <h2 className="heading">Your Profile</h2>
        <p className="intro">Enter the login information for your account. You will be able to create addition users after registring.</p>
        <div className="dataForm">
            <TextInput
                inputHeading="First Name"
                name="firstName"
                placeholder="Input your first name"
                value={userData.firstName}
                onChange={onChange}
                isObligatory
                errorMessage="Valid field is required"
                isError={isChecked && (!userData.firstName || userData.firstName.trim().length === 0)}
            />
            <TextInput
                inputHeading="Last Name"
                name="lastName"
                placeholder="Input your last name"
                value={userData.lastName}
                onChange={onChange}
                isObligatory
                errorMessage="Valid field is required"
                isError={isChecked && (!userData.lastName || userData.lastName.trim().length === 0)}
            />
            <TextInput
                inputHeading="Email"
                name="email"
                type="email"
                placeholder="Input your email address"
                value={userData.email}
                onChange={onChange}
                isObligatory
                errorMessage="Valid field is required"
                isError={isChecked && (!userData.email || !validateEmail(userData.email))}
            />
            <TextInput
                inputHeading="Phone Number"
                name="phoneNumber"
                placeholder="Input your phone number"
                value={userData.phoneNumber}
                onChange={onChange}
                isObligatory
                errorMessage="Valid field is required (+000) 000 000 000"
                isError={isChecked && (!userData.phoneNumber || !validatePhoneNumber(userData.phoneNumber))}
            />
            <TextInput
                inputHeading="Password"
                name="password"
                type="password"
                placeholder="Create password"
                value={userData.password}
                onChange={onChange}
                isObligatory
                errorMessage="The password is at least 8 characters long, has at least one uppercase letter, at least one lowercase letter, at least one digit and at least one special character"
                isError={isChecked && (!userData.password || !validatePassword(userData.password))}
            />
            <TextInput
                inputHeading="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={userData.confirmPassword}
                onChange={onChange}
                isObligatory
                errorMessage="Required. Must be the same as the password"
                isError={isChecked && (!userData.confirmPassword || userData.password !== userData.confirmPassword)}
            />
        </div>
    </div>
  )
}