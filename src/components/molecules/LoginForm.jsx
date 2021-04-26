import React from 'react';

const LoginForm = ({ changeModal }) => {
    return (
        <div className="form-container">
            <div className="form-inner">
                <form className="login">
                    <div className="field">
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                        />
                    </div>
                    <div className="field">
                        <input
                            type="password"
                            placeholder="Password"
                            required />
                    </div>
                    <div className="field btn">
                        <div className="btn-layer"></div>
                        <input
                            type="submit"
                            value="Login"
                        />
                    </div>
                    <div className="signup-link">
                        <p>Not a member? <span onClick={changeModal}>Signup now</span></p> 
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
