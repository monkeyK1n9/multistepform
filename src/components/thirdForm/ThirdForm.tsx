import Lottie from "lottie-react";
import celebration from "../../assets/celebration.json";
import "./thirdForm.css"

export default function ThirdForm() {
  return (
    <div className="thirdForm">
      <Lottie animationData={celebration} />
      <h2 className="text">Congratulations !!!<br />Check your Console</h2>
    </div>
  )
}