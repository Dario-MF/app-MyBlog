import React from 'react';

const LoginForm = () => {
    return (
        <div class="form-container">
            <div class="form-inner">
                <form class="login">
                    <div class="field">
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                        />
                    </div>
                    <div class="field">
                        <input
                            type="password"
                            placeholder="Password"
                            required />
                    </div>
                    <div class="field btn">
                        <div class="btn-layer"></div>
                        <input
                            type="submit"
                            value="Login"
                        />
                    </div>
                    <div class="signup-link">
                        Not a member? <a href="/">Signup now</a></div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
