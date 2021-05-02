
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaUserUpdate } from '../../helpers/formSchema';
import { capitalize } from '../../helpers/capitalize';
import { updateUser } from '../../actions/auth';

const UserEditScreen = () => {
    const { user } = useSelector(state => state.auth);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schemaUserUpdate)
    });

    const history = useHistory();
    const dispatch = useDispatch();

    const initialForm = (e) => {
        e.preventDefault();
        reset();
    };

    const saveUser = (data) => {
        const formdata = {
            name: data.name,
            surname: data.surname,
            email: data.email,
            facebookUrl: data.facebookUrl,
            twitterUrl: data.twitterUrl,
            githubUrl: data.githubUrl,
            linkedinUrl: data.linkedinUrl,
            newPassword: data.newPassword,
            oldPassword: data.oldPassword
        };

        if (data.image || data.image.length) {
            //formdata.append("archivo", data.image[0]);
        }
        dispatch(updateUser(formdata, history, user.uid));
    };

    return (
        <div className='edit_screen'>
            <div className="container_form_edit">
                <form className="edit_user_form" onSubmit={handleSubmit(saveUser)}>
                    <div className='edit_img_field'>
                        <div className="img_box_field">
                            <img src={user.img} alt="user" />
                            <label htmlFor='imageUrl' className="input_file_user"><i className="bi bi-camera"></i></label>
                        </div>
                        <input
                            hidden
                            type='file'
                            defaultValue={[]}
                            id='imageUrl'
                            {...register('image')}
                        />
                    </div>
                    <div className="edit_user_field">
                        <label className='label_field'>Nombre</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            id='name'
                            defaultValue={capitalize(user.name)}
                            {...register("name")}
                        />
                        {errors.name && <p className="error">{errors.name.message}</p>}
                    </div>
                    <div className="edit_user_field">
                        <label className='label_field'>Apellidos</label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            defaultValue={capitalize(user.surname)}
                            {...register("surname")}
                        />
                        {errors.surname && <p className="error">{errors.surname.message}</p>}
                    </div>
                    <div className="edit_user_field">
                        <label className='label_field'>Email</label>
                        <input
                            type="text"
                            placeholder="Email"
                            defaultValue={user.email}
                            {...register("email")}
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>
                    <div className="edit_user_field">
                        <label className='label_field'><i className="bi bi-facebook"></i>Url Facebook</label>
                        <input
                            type="text"
                            placeholder="Url Facebook"
                            defaultValue={user.facebookUrl}
                            {...register("facebookUrl")}
                        />
                        {errors.facebookUrl && <p className="error">{errors.facebookUrl.message}</p>}
                    </div>
                    <div className="edit_user_field">
                        <label className='label_field'><i className="bi bi-twitter"></i>Url Twitter</label>
                        <input
                            type="text"
                            placeholder="Url Twitter"
                            defaultValue={user.twitterUrl}
                            {...register("twitterUrl")}
                        />
                        {errors.twitterUrl && <p className="error">{errors.twitterUrl.message}</p>}
                    </div>
                    <div className="edit_user_field">
                        <label className='label_field'><i className="bi bi-github"></i>Url Github</label>
                        <input
                            type="text"
                            placeholder="Url Github"
                            defaultValue={user.githubUrl}
                            {...register("githubUrl")}
                        />
                        {errors.githubUrl && <p className="error">{errors.githubUrl.message}</p>}
                    </div>
                    <div className="edit_user_field">
                        <label className='label_field'><i className="bi bi-linkedin"></i>Url Linkedin</label>
                        <input
                            type="text"
                            placeholder="Url Linkedin"
                            defaultValue={user.linkedinUrl}
                            {...register("linkedinUrl")}
                        />
                        {errors.linkedinUrl && <p className="error">{errors.linkedinUrl.message}</p>}
                    </div>
                    <div className="edit_user_field">
                        <label className='label_field'>Password antigua</label>
                        <input
                            type="password"
                            placeholder="old Password"
                            {...register('oldPassword')}
                        />
                        {errors.oldPassword && <p className="error">{errors.oldPassword.message}</p>}
                        <p className='alert_password'>Si no desea cambiar su contraseña deja esto en blanco</p>
                    </div>
                    <div className="edit_user_field">
                        <label className='label_field'>Password nueva</label>
                        <input
                            type="password"
                            placeholder="new password"
                            {...register('newPassword')}
                        />
                        {errors.newPassword && <p className="error">{errors.newPassword.message}</p>}
                    </div>
                    <div className='btn-box'>
                        <button
                            className="button btn_call"
                            id="save-button"
                            type='submit'
                        >Edit
                        </button>
                        <button
                            className="button btn_call"
                            id="clear-button"
                            onClick={initialForm}
                        >Reset
                        </button>
                        <button
                            className="button btn_call delete"
                            id="delete-button"
                            onClick={initialForm}
                        >Delete User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserEditScreen;
