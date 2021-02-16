const service = [{
    "icon": "fa fa-shopping-cart",
    "name": "Pre-picked",
    "text": "Picking your groceries is tedious, especially after a long day at work. Our experienced pickers will select the best produce so you can get home with enough energy to play with the kids."
},
{
    "icon": "fa fa-car",
    "name": "Drive-Through",
    "text": "Finding parking space might be one of the hardest things to do in Addis. With our drive through experience, you can stop and load your groceries without ever leaving your car."
},
{
    "icon": "fa fa-phone",
    "name": "Order Remotely",
    "text": "You can save time by calling and ordering ahead. That way, your groceries will be ready when you get to any of our locations."
},
{
    "icon": "fa fa-clock-o",
    "name": "Semi-processed Vegetables",
    "text": "No one wants to chopp onions after a busy day at work. For all our sakes, we'll provide semi-processed vegitables that are ready to be cooked."
},
{
    "icon": "fa fa-plane",
    "name": "Free Advice",
    "text": "Most of us dont know how long our groceries are meant to last or how to store them for long. With your groceires, we will leave a few notes on how to handle your food to maximiize value and minimize waste."
},
{
    "icon": "fa fa-pie-chart",
    "name": "Rewards",
    "text": "The more you buy the easier it gets. Maintain a weekly purchase of atleast ETB 500 to get 1 Guaro point at the end of the month. You can use Guaro points to purchase produce.   "
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