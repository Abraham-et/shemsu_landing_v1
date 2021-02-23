const service = [{
    "icon": "fa fa-shopping-cart",
    "name": "Pre-picked",
    "text": "Picking your groceries can be a daunting task, especially after a long day at work. Our experienced pickers will select the best produce and pack it on your behalf, so you can focus on the more important things in life."
},
{
    "icon": "fa fa-car",
    "name": "Drive-through",
    "text": "Finding parking space is one of the hardest things to do in Addis. With our drive through experience, we will load your groceries without you ever leaving your car."
},
{
    "icon": "fa fa-phone",
    "name": "Order Remotely",
    "text": "You can save time by calling and ordering ahead. That way, your groceries will be ready when you get to any of our locations."
},
{
    "icon": "fa fa-industry",
    "name": "Semi-processed Vegetables",
    "text": "No one wants to chop onions after a busy day at work. For all our sakes, we'll provide semi-processed vegetables that are ready to be cooked."
},
{
    "icon": "fa fa-headset",
    "name": "Free Advice",
    "text": "We will leave a few notes on how to handle your food to maximiize value and minimize waste. You can also give us a call; we got your back!"
},
{
    "icon": "fa fa-trophy",
    "name": "Rewards",
    "text": "The more you buy the cheaper it gets. Hit a weekly purchase of at least ETB 500 to get 1 Guaro point at the end of the month. Guaro points = free food!"
}]


export default function services() {

    return (
        <div id="services" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Guaro Perks</h2>
                    <p>
                        Bringing you more ways to save time and money.
            </p>
                </div>
                <div className="row-custom">
                    {service.map((d, i) => (
                        <div key={`${d.name}-${i}`} className="col-xs-6 col-md-custom">
                            {" "}

                            <div className="service-desc">
                                <i className={d.icon}></i>
                                <h3>{d.name}</h3>
                                <p>{d.text}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>)
}