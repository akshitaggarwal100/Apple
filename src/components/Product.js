import './Product.css'

export default function Product(props) {

    const prodImgLink = {
        backgroundImage: `url(${props.prodImg})`
    }

    return (
        <div className = 'divStyle' >
            <h1>{props.name}</h1>
            <div className = 'imgStyle' style={prodImgLink} ></div>
            <p>{props.desc}</p>
            <h2>${props.price}</h2>
        </div>
    )
}