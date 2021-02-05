
const feature = [{
    "icon": "fa fa-map-marker",
    "title": "Locally Sourced",
    "text": "All of our produce comes from small scale Ethiopian farmers that have your best interest at heart."
},
{
    "icon": "fa fa-thumbs-up",
    "title": "Consistently Providing Highest Quality",
    "text": "All items that fill our shelves are hand picked by professionals and are selected to allure those who see it."
},
{
    "icon": "fa fa-money",
    "title": "Lowest Prices",
    "text": "We understand that customers want to find the higest value without putting much effort. That's why we invest a lot of time and money to cut production costs, transfering our savings to you."
},
{
    "icon": "fa fa-smile-o",
    "title": "Selling Convenience as a Product",
    "text": "At Shemsu, groceries aren't the only things we sell. Convenience is always vital for our customers; that's why it is a crucial part of our business model."
}
]

export default function features() {

    return (
        <div id="features" className="text-center">
            <div className="container">
                <div className="col-md-10 col-md-offset-1 section-title">
                    <h2>Features</h2>
                </div>
                <div className="row">
                    {feature.map((d, i) => (
                        <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                            {" "}
                            <i className={d.icon}></i>
                            <h3>{d.title}</h3>
                            <p>{d.text}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}