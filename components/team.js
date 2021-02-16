// import Image from 'next/image'


const team = [{
    "img": require('../public/images/abrsh.webp'),
    "name": "Abraham Assegid",
    "job": "CTO"
},
{
    "img": require("../public/images/girum.webp"),
    "name": "Girum Tihtina",
    "job": "CEO"
}, {
    "img": require("../public/images/betty.webp"),
    "name": "Bethlehem Assegid",
    "job": "CMO"
},
{
    "img": require("../public/images/fitsum.webp"),
    "name": "Fitsum Abebe",
    "job": "COO"
}
]


export default function services() {
    return (<div id="team" className="text-center">
        <div className="container">
            <div className="col-md-8 col-md-offset-2 section-title">
                <h2>Meet the Team</h2>
                <p>
                    The Guaro team.
        </p>
            </div>
            <div id="row">
                {team.map((d, i) => (
                    <div key={`${d.name}-${i}`} className=" col-sm-6  col-md-3 team">
                        <div className="thumbnail">
                            {" "}
                            <img src={d.img} alt='...' width={240}
                                height={240} />

                            <div className="caption">
                                <h4>{d.name}</h4>
                                <p>{d.job}</p>
                            </div>
                        </div>
                    </div>
                ))
                }

            </div>
        </div>
    </div>)
}

{/* <img src={require("../public/images/about.jpg")}  */ }