import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';

const LoginForm = ({ changeModal }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const dispatch = useDispatch();
    const onSubmit = (data) => {   
        dispatch(startLogin(data));
    };


    return (
        <div className="form-container">
            <div className="form-inner">
                <form className="login"  onSubmit={handleSubmit(onSubmit)}>
                    <div className="field">
                        <input
                            type="email"
                            placeholder="Email Address"
                            {...register("email", {
                                required: 'Email es requerido', 
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,// validation email
                                    message: "Introduzca email valido.",
                                },
                            })}
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>
                    <div className="field">
                        <input
                            type="password"
                            placeholder="Password"
                            {...register('password', {
                                required: 'Pasword es requerido',
                                pattern: {
                                  value: /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/,
                                  message: "Password: min 8 caracteres, 1 numero"
                                }
                            })} 
                        />
                        {errors.password && <p className="error">{errors.password.message}</p>}
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
