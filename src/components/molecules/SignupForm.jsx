import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { startRegister } from '../../actions/auth';



const SignupForm = ({ changeModal, modalClose }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const password = useRef({});
    password.current = watch("password", "");

    const dispatch = useDispatch();
    
    const onSubmit = (data) => {    
        dispatch(startRegister(data));
    };

    return (
        <div className="form-container">
            <div className="form-inner">
                <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="signup-field">
                        <input
                            type="text"
                            placeholder="First Name"
                            {...register("name", {
                                required: 'Nombre es requerido.', 
                                maxLength: 80,
                                minLength: {
                                    value: 2,
                                    message: "Nombre necesita min 2 letras."
                                }
                            })}
                        />
                        {errors.name && <p className="error">{errors.name.message}</p>}
                    </div>
                    <div className="signup-field">
                        <input
                            type="text"
                            placeholder="Last Name"
                            {...register("surname", {
                                required: 'Apellido es requerido.', 
                                maxLength: 100,
                                minLength: {
                                    value: 2,
                                    message: "Apellido necesita min 8 letras."
                                }
                            })}
                        />
                        {errors.surname && <p className="error">{errors.surname.message}</p>}
                    </div>
                    <div className="signup-field">
                        <input
                            type="text"
                            placeholder="Email"
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
                    <div className="signup-field">
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
                    <div className="signup-field">
                        <input 
                            type="password" 
                            placeholder="Confirm password" 

                            {...register('password_repeat', {
                                required: 'Pasword es requerido',
                                validate: value =>
                                  value === password.current || "Paswords no son iguales"
                              })}
                        />
                        {errors.password_repeat && <p className="error">{errors.password_repeat.message}</p>}
                    </div>
                    <div className="field btn">
                        <div className="btn-layer"></div>
                        <input
                            type="submit" 
                            value="Signup"
                        />
                    </div>
                    <div className="signup-link">
                        <p> You are a member? <span onClick={changeModal} >Login now</span></p> 
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;