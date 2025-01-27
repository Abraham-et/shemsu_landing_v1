
// import Image from 'next/image'
const About = {

    "paragraph": "Our story starts with two college students, Abraham and Girum, realizing how inconvenient grocery shopping in Ethiopia is. With their background in computer science and economics, they set out to provide the Ethiopian public means to buy affordable produce of the highest quality in the most convenient and hassle-free manner. Together with experts in the agriculture world, they were able to identify and remove pain points in the supply chain to reduce costs and transfer the savings on to you. And with their crew of experienced farmers, diligent pickers and sorters, professional sales members, and software engineers they promise to always deliver the maximum value to you, our customer.",
    "Why": [

        { "icon": "fa fa-check", "text": "Convenient" },
        { "icon": "fa fa-check", "text": "Organic" },
        { "icon": "fa fa-check", "text": "Transparent" },
        { "icon": "fa fa-check", "text": "Sustainable" }
    ]
}


export default function about() {
    return (<div id="about">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-6"> <img src={require("../public/images/low-about.webp")} layout="responsive" width={500}
                    height={700} /> </div>
                <div className="col-xs-12 col-md-6">
                    <div >

                        <h2>About Us</h2>
                        <p>{About.paragraph}</p>
                        <h3>Why Choose Us?</h3>
                        <div >
                            <div className="col-lg-6 col-sm-6 col-xs-12">

                                <ul className="about-text">
                                    {About.Why.map((d, i) => <li key={`${d}-${i}`}><i className={d.icon}></i> {"  "} {d.text}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >)
}



