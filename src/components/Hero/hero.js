import "./Hero.css"

function hero(props){
    return(
        <>
            <div className={props.cName}>
                <img alt="HrpImg" src={props.heroimage}/>
            </div>
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>
                    {props.buttonText}
                </a>
            </div>
        </>
    )
}
export default hero;