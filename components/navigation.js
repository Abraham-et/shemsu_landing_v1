import Dropdown from 'react-bootstrap/Dropdown';
export default function navigation() {
    return (

        // <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        //     <div className="container">
        //             <div className="navbar-header">
        //                 <button
        //                     type="button"
        //                     className="navbar-toggle"
        //                     data-toggle="collapse"
        //                     data-target="#navbar-collapse-1"
        //                     aria-controls="navbar-collapse-1"
        //                     aria-lable="Toggle nabigation"
        //                 >
        //                     {" "}
        //                     <span className="sr-only">Toggle navigation</span>{" "}
        //                     <span className="icon-bar"></span>{" "}
        //                     <span className="icon-bar"></span>{" "}
        //                     <span className="icon-bar"></span>{" "}
        //                 </button>
        //             <a className="navbar-brand page-scroll" href="#page-top">
        //                 Shemsu
        //   </a>{" "}
        //             </div>

        // <div
        //     className="collapse navbar-collapse me-auto mb-3 mb-lg-0 "
        //     id="navbar-collapse-1"
        // >
        //                 <ul className="nav navbar-nav navbar-right">
        //                     <li>
        //                 <a href="#features" className="page-scroll">
        //                     Features
        //   </a>
        //                     </li>
        //                     <li>
        //                 <a href="#about" className="page-scroll">
        //                     About
        //   </a>
        //                     </li>
        //                     <li>
        //                 <a href="#services" className="page-scroll">
        //                     Services
        //   </a>
        //                     </li>

        //                     <li>
        //                 <a href="#team" className="page-scroll">
        //                     Team
        //   </a>
        //                     </li>
        //                     <li>
        //                 <a href="#contact" className="page-scroll">
        //                     Contact
        //   </a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // );
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">

            <div className="container">
                <div className="navbar-header">

                    <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                    >
                        {" "}
                        <span className="sr-only">Toggle navigation</span>{" "}
                        <span className="icon-bar"></span>{" "}
                        <span className="icon-bar"></span>{" "}
                        <span className="icon-bar"></span>{" "}
                        <Dropdown>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                {/* {" "}
                                <span className="sr-only">Toggle navigation</span>{" "}
                                <span className="icon-bar"></span>{" "}
                                <span className="icon-bar"></span>{" "}
                                <span className="icon-bar"></span>{" "} */}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1"> <ul className="nav navbar-nav narbar-right">
                                    <li>
                                        <a href="#features" className="page-scroll">
                                            Features
          </a>
                                    </li>

                                </ul></Dropdown.Item>
                                <Dropdown.Item href="#/action-2" ><ul className="nav navbar-nav narbar-right">
                                    <li>
                                        <a href="#about" className="page-scroll">
                                            About
          </a>
                                    </li>

                                </ul></Dropdown.Item>
                                <Dropdown.Item href="#/action-3" > <ul className="nav navbar-nav narbar-right">
                                    <li>
                                        <a href="#services" className="page-scroll">
                                            Services
          </a>
                                    </li>

                                </ul></Dropdown.Item>

                                <Dropdown.Item href="#/action-4"> <ul className="nav navbar-nav narbar-right">
                                    <li>
                                        <a href="#team" className="page-scroll">
                                            Team
          </a>
                                    </li>

                                </ul>

                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-5">    <ul className="nav navbar-nav narbar-right">
                                    <li>
                                        <a href="#contact" className="page-scroll">
                                            Contact
          </a>
                                    </li>

                                </ul></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </button>
                    <a className="navbar-brand page-scroll" href="#page-top">
                        Guaro
              </a>{" "}

                </div >

                <div
                    className="collapse navbar-collapse me-auto mb-3 mb-lg-0 "
                    id="navbar-collapse-1"

                >

                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#features" className="page-scroll">
                                Features
          </a>
                        </li>
                        <li>
                            <a href="#about" className="page-scroll">
                                About
          </a>
                        </li>
                        <li>
                            <a href="#services" className="page-scroll">
                                Services
          </a>
                        </li>

                        <li>
                            <a href="#team" className="page-scroll">
                                Team
          </a>
                        </li>
                        <li>
                            <a href="#contact" className="page-scroll">
                                Contact
          </a>
                        </li>
                    </ul>
                </div>

            </div >
        </nav >);
}