import "./brandHint.css"

type Props = {
    className: string
}

export default function BrandHint({className}: Props) {
  return (
    <div className={"brandHint" + " " + className}>
        <div className="spike">
            <div className="spikeUp" />
            <div className="spikeDown" />
        </div>
        <p className="hintText">
            Local: Brands with distribution in 3 divisions or less or multiple divisions but a total of 150 divisions <br /><br />
            National: Brands with distribution in 4 or more divisions or in more than 150 divisions
        </p>
    </div>
  )
}