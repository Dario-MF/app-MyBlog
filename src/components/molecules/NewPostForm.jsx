import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaPost } from '../../helpers/formSchema';
import { createNewPost } from '../../actions/posts';



// subir a API en API guardar img en cloudinary
const NewPostForm = () => {
    const [articleData, setArticleData] = useState({ article: '' });
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schemaPost),
    });

    const imageName = watch("image", "") || '';

    const parseEditorData = (content) => {
        setArticleData({
            article: content
        })
    };

    const clearForm = (e) => {
        e.preventDefault();
        setArticleData({
            article: '',
        });
    };

    const history = useHistory();
    const dispatch = useDispatch();
    const saveBlog = (data) => {
        const post = { ...data, ...articleData };

        dispatch(createNewPost(post, history));
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
                        placeholder='Title'
                        {...register("title")}
                    />
                </div>
                {errors.title && <p className="error">{errors.title.message}</p>}
                <div className='field'>
                    <input
                        className="form-input "
                        type='text'
                        placeholder='Subtitle'
                        {...register("subtitle")}
                    />
                </div>
                {errors.subtitle && <p className="error">{errors.subtitle.message}</p>}
                <div className='field-box'>
                    <label htmlFor='imageUrl' className="input-file">Image Post</label>
                    <p className="text-input-file">
                        {(imageName) ? imageName[0].name : 'Choose your image...'}
                    </p>
                    <input
                        hidden
                        type='file'
                        id='imageUrl'
                        {...register('image')}
                    />
                </div>
                {errors.image && <p className="error">{errors.image.message}</p>}
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
                        value={articleData.article}
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
