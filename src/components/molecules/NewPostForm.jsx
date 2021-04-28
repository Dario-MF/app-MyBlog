import { useState } from 'react';
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from 'react-hook-form';


// Validaciones subir a API en API guardar img en cloudinary
const NewPostForm = () => {
    const { register, handleSubmit } = useForm();
    const [formData, setFormData] = useState({
        content: ''
    });

    const parseEditorData = (content) => {   
        setFormData({
            content
        })
    };

    const saveBlog = (data) => {
        const post = {...data, ...formData}
        console.log(post)
        
        /* props.handleCreate({
            ...formData
        }) */
    };

    const clearForm = (e) => {
        e.preventDefault();
        setFormData({
            content: '',    
        });
    };

    return (
        <div>
            <form
                className="new-post-form"
                onSubmit={handleSubmit(saveBlog)}
            >
                <div className='field'>
                    <input
                        className="form-input "
                        type='text'
                        placeholder= 'Title'
                        {...register("title", {
                            required: 'Titulo es requerido.', 
                            maxLength: 80,
                            minLength: {
                                value: 2,
                                message: "Titulo necesita min 2 letras."
                            }
                        })}
                    />
                </div>
                <div className='field'>
                    <input
                        className="form-input "
                        type='text'   
                        placeholder= 'Subtitle'
                        {...register("subtitle", {
                            required: 'Subtitulo es requerido.', 
                            maxLength: 80,
                            minLength: {
                                value: 2,
                                message: "Subitulo necesita min 2 letras."
                            }
                        })}
                    />
                </div>
                <div className='field-box'> 
                    <label htmlFor='imageUrl' className="input-file">Image Post</label>
                    {/* <p className="text-input-file">{
                        (formData.image !== '') ? formData.image[0].name : 'Choose your image...'
                    }</p> */}
                    <input 
                        hidden
                        type='file'
                        id='imageUrl' 
                        {...register('image')}
                    />
                </div>
                <div>
                    <Editor
                        outputFormat='html'
                        init={{
                            height: 300,
                            width: 820,
                            resize: false,
                            plugins: 'code link image imagetools',
                            toolbar: 'undo redo | formatselect |forecolor backcolor | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image tinydrive | code'
                        }} 
                        onEditorChange={(content) =>
                            parseEditorData(content)
                        }   
                        value={formData.content}
                        textareaName="content" 
                    />
                </div>
                <div className='btn-box'>
                    <button 
                        className="button btn_call" 
                        id="save-button"
                    >Save
                    </button>
                    <button
                        className="button btn_call"
                        id="clear-button"
                        onClick={clearForm}
                    >Clean
                    </button>
                </div>
               {/*  <div dangerouslySetInnerHTML={{__html: formData.content}} /> */}
            </form>
        </div>
    );
};

export default NewPostForm;
