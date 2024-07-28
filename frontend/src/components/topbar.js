import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Topbar = () => {
  const [message, setMessage] = useState(1);
  const [bookmark, setBookmark] = useState(2)
  return (
        <div className="topbar bg-white text-primary shadow-sm" id="topbar">
            <div className="d-flex justify-content-between justify-content-md-start flex-md-row-reverse">
                <div className="d-flex flex-md-row-reverse">
                    <div className="dropdown mx-2">
                        <a className="btn btn-sm btn-outline-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="rounded-img">
                                <img src="https://wallpapercave.com/wp/wp8399452.png" alt="profile"/>
                            </div>
                        </a>
                        <ul className="dropdown-menu py-3">
                            <li><a className="dropdown-item h5 fw-light" href="#">Profile</a></li>
                            <li><a className="dropdown-item h5 fw-light" href="#">Upgrade</a></li>
                            <li><a className="dropdown-item h5 fw-light" href="#">Logout</a></li>
                        </ul>
                    </div>
                    <p className="p-4 h5 text-nowrap">Ichasn Nur</p>
                </div>
                <div className="d-flex gap-2">
                    <a href="#" className="btn btn-sm position-relative align-self-center">
                    <   FontAwesomeIcon icon="message" />
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {message}
                            <span class="visually-hidden">Message</span>
                        </span>
                    </a>
                    <a href="#" className="btn btn-sm position-relative align-self-center">
                    <   FontAwesomeIcon icon="bookmark" />
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {bookmark}
                            <span class="visually-hidden">bookmark</span>
                        </span>
                    </a>
                </div>

                <div className="input-group align-self-center mb-2 px-4 d-none d-md-flex">
                    <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="magnifying-glass" /></span>
                    <input type="text" className="form-control" placeholder="Mau cari apa" aria-label="Mau cari apa" aria-describedby="basic-addon1" />
                </div>
            </div>
        </div>
  );
};

export default Topbar;
