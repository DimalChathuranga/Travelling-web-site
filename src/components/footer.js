import "./footer.css"

const footer=() =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Trippy</h1>
                    <p>Choose your favourite destination</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                        <i className="fa-brands fa-instagram-square"></i>
                        <i className="fa-brands fa-behance-square"></i>
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">Licens</a>
                <a href="/">All version</a>
                </div>
                <div>
                <h4>Community</h4>
                <a href="/">Github</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
                <a href="/">twitter</a>
                </div>
                <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshooting</a>
                <a href="/">Contact us</a>
                </div>
                <div>
                <h4>Others</h4>
                <a href="/">Item of service</a>
                <a href="/">Privacy policy</a>
                <a href="/">Licens</a>
                </div>

            </div>
        </div>
    )
}

export default footer;