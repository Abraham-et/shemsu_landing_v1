const contacts = {
    "address": "Firkemariam Abatechane Avenue",
    "citycountry": "Addis Ababa, Ethiopia",
    "pobox": "P.O.Box 13327",
    "phone": "+251 911 97 7815",
    "email": "aamulualem@knox.edu",
    "facebook": "fb.com",
    "twitter": "twitter.com",
    "youtube": "youtube.com"
}


export default function about() {
    return (<div>
        <div id="contact">

            <div className="container">
                <div className="col-md-8">
                    <div className="row">
                        <div className="section-title">
                            <h2>Get In Touch</h2>
                            <p>
                                Please fill out the form below to send us an email and we
                                will get back to you as soon as possible.
                  </p>
                        </div>
                        <form name="sentMessage" id="contactForm" >
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="name"
                                            className="form-control"
                                            placeholder="Name"
                                            required="required"
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            placeholder="Email"
                                            required="required"

                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    id="message"
                                    className="form-control"
                                    rows="4"
                                    placeholder="Message"
                                    required>
                                </textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div id="success"></div>
                            <button type='submit' className="btn btn-custom btn-lg">
                                Send Message
                  </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-3 col-md-offset-1 contact-info">
                    <div className="contact-item">
                        <h3>Contact Info</h3>
                        <p>
                            <span className="bold_titles">
                                <i className="fa fa-map-marker"></i> Address
                  </span>
                            <p>
                                {contacts ? contacts.address : "loading"}
                            </p>
                            <p>
                                {contacts ? contacts.citycountry : "loading"}
                            </p>
                            <p>
                                {contacts ? contacts.pobox : "loading"}
                            </p>
                        </p>
                    </div>
                    <div className="contact-item">
                        <p>
                            <span className="bold_titles" >
                                <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                            {contacts ? contacts.phone : "loading"}
                        </p>
                    </div>
                    <div className="contact-item">
                        <p>
                            <span className="bold_titles">
                                <i className="fa fa-envelope"></i> Email
                  </span>{" "}
                            {contacts ? contacts.email : "loading"}
                        </p>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="social">
                            <ul>
                                <li>
                                    <a
                                        href={contacts ? contacts.facebook : "/"}
                                    >
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={contacts ? contacts.twitter : "/"}>
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={contacts ? contacts.youtube : "/"}>
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="footer">
            <div className="container text-center">
                <p>
                    &copy; 2021 Shemsu Produce
            </p>
            </div>
        </div>
    </div >)
}