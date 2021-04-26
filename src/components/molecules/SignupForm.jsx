import React, { useRef } from 'react';
import { useForm } from "react-hook-form";

const SignupForm = ({ changeModal }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const password = useRef({});
    password.current = watch("password", "");
    
    const onSubmit = (data) => {
        console.log(data)
        console.log(password.current)
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
                                required: true, 
                                maxLength: 80
                            })}
                        />
                        {errors.name && <p className="error">El campo nombre es incorrecto</p>}
                    </div>
                    <div className="signup-field">
                        <input
                            type="text"
                            placeholder="Last Name"
                            {...register("surname", {
                                required: true, 
                                maxLength: 100
                            })}
                        />
                        {errors.surname && <p className="error">El campo apellido es incorrecto</p>}
                    </div>
                    <div className="signup-field">
                        <input
                            type="text"
                            placeholder="Email"
                            {...register("email", {
                                required: true, 
                                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                            })}
                        />
                        {errors.email && <p className="error">El campo email es incorrecto</p>}
                    </div>
                    <div className="signup-field">
                        <input
                            type="password"
                            placeholder="Password"
                            
                            {...register('password', {
                                required: 'El campo pasword es incorrecto',
                                minLength: {
                                  value: 8,
                                  message: "Password necesita min 8 caracteres"
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
                                required: 'El campo pasword es incorrecto',
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