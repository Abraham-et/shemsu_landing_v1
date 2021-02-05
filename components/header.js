

const Header = {

    "title": "Meet Shemsu",
    "paragraph": "Comitted to bring high quality organic produce to the Ethiopian public"

}

export default function header() {
    return (
        <header id="header">
            <div className="intro">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 intro-text">
                                <h1>
                                    {Header.title}
                                    <span></span>
                                </h1>
                                <p>
                                    {Header.paragraph}
                                </p>
                                <a
                                    href="#features"
                                    className="btn-custom"
                                >
                                    Learn More
              </a>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

{/* <Link href="/">
<a> Back to home </a>
</Link> */}