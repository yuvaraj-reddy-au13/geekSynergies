import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "../Login/Login";

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");


    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);


    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone ) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem(
                "userEmail",
                JSON.stringify(email)
            );
            localStorage.setItem(
                "userPassword",
                JSON.stringify(password)
            );
            console.log("Saved in Local Storage");

            setLogin(!login);
        }
    }

   
    function handleClick() {
        setLogin(!login);
    }

    function infoClick() {
        setInfo(!info);
    }

    return (
        <div className='container' style={{width:"40%"}}>
            <nav className="navbar navbar-light">
                <div className="container" onClick={infoClick}>
                { !login ?
                    <h4 className="btn btn-primary btn-lg btn-block">
                        Company Info  
                    </h4> : null}
                </div>
            </nav>
            {info ? (
                <div className=''>
                    {" "}
                    {login ? (
                        <form onSubmit={handleFormSubmit} className=''>
                            <h3>Register</h3>

                            <div className="form-group ">
                                <label>Name</label>
                                <input
                                required
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Full Name"
                                    name="name"
                                    onChange={(event) =>
                                        setName(event.target.value)
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    required
                                    className="form-control"
                                    placeholder="Enter email"
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    required
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="Phone"
                                    className="form-control"
                                    placeholder="Enter contact no"
                                    required
                                    onChange={(event) =>
                                        setPhone(event.target.value)
                                    }
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-lg btn-block"
                            >
                                Register
                            </button>
                            <p className="forgot-password text-right">
                                Already registered{" "}
                                <a href="#" onClick={handleClick}>
                                    log in?
                                </a>
                            </p>
                        </form>
                    ) : (
                        <Login />
                    )}
                </div>
            ) : (
                <div className='inner'>
                    <p>
                        <strong>Company:</strong> Geeksynergy Technologies PVT
                        Ltd
                    </p>
                    <p>
                        <strong>Address:</strong> Sanjaynagar, Bengaluru-56
                    </p>
                    <p>
                        <strong>Phone:</strong> XXXXXXXXXX09
                    </p>
                    <p>
                        <strong>Email:</strong> XXXXXXXX@gmail.com
                    </p>
                </div>
            )}
        </div>
    );
}

export default Registration;
