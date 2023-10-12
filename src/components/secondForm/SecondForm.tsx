
type Props = {
    userData: UserData,
    onChange: (e: any) => void,
    isChecked: boolean
}

export default function SecondForm({userData, onChange, isChecked = false}: Props) {
  return (
    <div>SecondForm</div>
  )
}