import Image from 'next/image'


const team = [{
    "img": "/../public/images/01.jpg",
    "name": "Abraham Assegid",
    "job": "CTO"
},
{
    "img": "/../public/images/02.jpg",
    "name": "Girum Tihtina",
    "job": "CEO"
}, {
    "img": "/../public/images/03.jpg",
    "name": "Bethlehem Assegid",
    "job": "CMO"
},
{
    "img": "/../public/images/04.jpg",
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                    dapibus leonec.
        </p>
            </div>
            <div id="row">
                {team.map((d, i) => (
                    <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                        <div className="thumbnail">
                            {" "}
                            <Image src={d.img} layout="responsive" width={240}
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