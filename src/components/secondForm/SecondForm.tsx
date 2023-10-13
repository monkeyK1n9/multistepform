import { FaAngleRight } from "react-icons/fa";
import SelectInput from "../selectInput/SelectInput";
import TextInput from "../textInput/TextInput";
import "./secondForm.css";
import {MdCheck, MdClose} from 'react-icons/md';

type Props = {
  userData: UserData,
  onChange: (e: any) => void,
  isChecked: boolean
}

export default function SecondForm({userData, onChange, isChecked = false}: Props) {
  return (
    <div className="secondForm">
      <h3 className="stepLevel">Step 2</h3>
      <h2 className="heading">Business Information</h2>
      <p className="intro">Please enter information about your company.</p>
      <div className="categoryContainerHeading">
        <h3 className="category">GENERAL INFORMATION</h3>
      </div>
      <div className="dataForm">
        <TextInput
          inputHeading="Brand Name"
          name="brandName"
          placeholder="Input your brand name"
          value={userData.brandName}
          onChange={onChange}
          isObligatory
          errorMessage="Valid field is required"
          isError={isChecked && (!userData.brandName || userData.brandName.trim().length === 0)}
        />
        <SelectInput
          name="brandType"
          inputHeading="Brand Type"
          value={userData.brandType}
          onChange={onChange}
          isObligatory
          isHinted
          errorMessage="Select a type"
          isError={isChecked && !userData.brandType}
        />
        <TextInput
          inputHeading="Street Address"
          name="streetAddress"
          placeholder="Input your street address"
          value={userData.streetAddress}
          onChange={onChange}
          isObligatory
          errorMessage="Valid field is required"
          isError={isChecked && (!userData.streetAddress || userData.streetAddress.trim().length === 0)}
        />
        <TextInput
          inputHeading="City"
          name="city"
          placeholder="Input your city"
          value={userData.city}
          onChange={onChange}
          isObligatory
          errorMessage="Valid field is required"
          isError={isChecked && (!userData.city || userData.city.trim().length === 0)}
        />
        <TextInput
          inputHeading="Zip Code"
          name="zipCode"
          placeholder="Input your zip code"
          value={userData.zipCode}
          onChange={onChange}
          isObligatory
          errorMessage="Valid field is required"
          isError={isChecked && (!userData.zipCode || userData.zipCode.trim().length === 0)}
        />
        <TextInput
          inputHeading="Tax ID Number"
          name="taxId"
          placeholder="Input your Tax ID Number"
          value={userData.taxId}
          onChange={onChange}
          isObligatory
          errorMessage="Valid field is required"
          isError={isChecked && (!userData.taxId || userData.taxId.trim().length === 0)}
        />
      </div>

      <div className="categoryContainer">
        <h3 className="category">DOCUMENTS</h3>
        <p className="subject">
          Once the following documents are signed, you'll be ready to get started
        </p>
        <div className="infoHighlight">
          <div className="info">
            <p>Electronically sign the document(s)</p>
            <MdCheck className="infoIcon" />
          </div>
          <button
            className="signBtn"
            type="button"
          >
            <FaAngleRight className="arrow" /> 
          </button>
        </div>
        <div className="infoHighlight">
          <div className="info">
            <p>Non adult but beverage Kroger market supplier waiver and release</p>
            <MdClose className="infoIcon" />
          </div>
          <button
            className="signBtn"
            type="button"
          >
            <FaAngleRight className="arrow" /> 
          </button>
        </div>
      </div>


      <div className="categoryContainer">
        <h3 className="category">COI PDF UPLOAD</h3>
        <p className="subject">
          Once the following documents are signed, you'll be ready to get started
        </p>
        <div className="infoHighlight">
          <div className="info">
            <p>Electronically sign the document(s)</p>
            <MdCheck className="infoIcon" />
          </div>
          <button
            className="signBtn"
            type="button"
          >
            <FaAngleRight className="arrow" /> 
          </button>
        </div>
      </div>
    </div>
  )
}