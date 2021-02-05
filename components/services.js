const service = [{
    "icon": "fa fa-shopping-cart",
    "name": "Pre-picked",
    "text": "Picking your groceries is tedious, especially after a long day at work. Our experienced pickers will select the best produce so you can get home with enough energy to play with the kids."
},
{
    "icon": "fa fa-car",
    "name": "Drive Through",
    "text": "Finding parking space might be one of the hardest things to do in Addis. With our drive through experience, you can stop and load your groceries without ever leaving your car."
},
{
    "icon": "fa fa-phone",
    "name": "Order Remotely",
    "text": "You can save time by calling and ordering ahead. That way, your groceries will be ready when you get to any of our locations."
},
{
    "icon": "fa fa-clock-o",
    "name": "Semi-processed Vegitables",
    "text": "Birke is tired of chopping onions for z doro wot. For her sake, we'll provide semi-processed vegitables that are ready to be cooked."
},
{
    "icon": "fa fa-plane",
    "name": "Free Advise",
    "text": "Most of us dont know how long our groceries are meant to last or how to store them for long. With your groceires, we will leave a few notes on how to handle your food to maximiize value and minimize waste."
},
{
    "icon": "fa fa-pie-chart",
    "name": "Consectetur adipiscing",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
}]


export default function services() {

    return (<div id="services" className="text-center">
        <div className="container">
            <div className="section-title">
                <h2>Our Services</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                    dapibus leonec.
        </p>
            </div>
            <div className="row-custom">
                {service.map((d, i) => (
                    <div key={`${d.name}-${i}`} className="col-md-custom">
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