import "./header.css"
import logo from "../../assets/logo.jpg"

type Props = {}

export default function Header({}: Props) {
  return (
    <div
        className="header"
    >
        <img
            src={logo}
            alt="logo"
            className="logo"
        />
        <h2>
            Create New Account
        </h2>
        <a
            href="https://twitter.com/monkey_K1n9"
        >
            Contact Us
        </a>
    </div>
  )
}