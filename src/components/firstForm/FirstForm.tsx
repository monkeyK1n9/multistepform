import TextInput from "../textInput/TextInput";
import "./firstForm.css";

type Props = {
    userData: UserData,
    onChange: (e: any) => void
}

export default function FirstForm({userData, onChange}: Props) {
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
                errorMessage="This field is required"
            />
            <TextInput
                inputHeading="Last Name"
                name="lastName"
                placeholder="Input your last name"
                value={userData.lastName}
                onChange={onChange}
                isObligatory
                errorMessage="This field is required"
            />
            <TextInput
                inputHeading="Email"
                name="email"
                type="email"
                placeholder="Input your email address"
                value={userData.email}
                onChange={onChange}
                isObligatory
                errorMessage="This field is required"
            />
            <TextInput
                inputHeading="Phone Number"
                name="phoneNumber"
                placeholder="Input your phone number"
                value={userData.phoneNumber}
                onChange={onChange}
                isObligatory
                errorMessage="This field is required"
            />
            <TextInput
                inputHeading="Password"
                name="password"
                type="password"
                placeholder="Create password"
                value={userData.password}
                onChange={onChange}
                isObligatory
                errorMessage="This field is required"
            />
            <TextInput
                inputHeading="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={userData.confirmPassword}
                onChange={onChange}
                isObligatory
                errorMessage="This field is required"
            />
        </div>
    </div>
  )
}