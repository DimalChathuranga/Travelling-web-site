import "./tripstyle.css"


function tripdata(props){

return(
    <div className="t-card">
        <div className="t-image">
            <img src={props.image} alt="image"/>
        </div>
        <h4>{props.headding}</h4>
        <p>{props.text}</p>
    </div>
);
}

export default tripdata;