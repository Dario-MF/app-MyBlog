import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaPostUpdate } from '../../helpers/formSchema';
import { updatePost } from '../../actions/posts';




const UpdatePostForm = ({ post }) => {

    const initialValues = {
        title: post.data.title,
        subtitle: post.data.subtitle,
        image: [],
        article: post.data.article
    }

    const [articleData, setArticleData] = useState({ article: initialValues.article });

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schemaPostUpdate)
    });

    const imageName = watch("image", []);

    const parseEditorData = (content) => {
        setArticleData({
            article: content
        })
    };

    const initialForm = (e) => {
        e.preventDefault();
        setArticleData({ article: initialValues.article });
        reset();
    };

    const history = useHistory();
    const dispatch = useDispatch();

    const saveBlog = (data) => {
        const formdata = new FormData();
        formdata.append("title", data.title);
        formdata.append("subtitle", data.subtitle);
        formdata.append("article", articleData.article);

        if (data.image || data.image.length) {
            formdata.append("archivo", data.image[0]);
        }
        dispatch(updatePost(formdata, history, post.data._id));
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
                        defaultValue={initialValues.title}
                        placeholder='Title'
                        {...register("title")}
                    />
                </div>
                {errors.title && <p className="error">{errors.title.message}</p>}
                <div className='field'>
                    <input
                        className="form-input "
                        type='text'
                        defaultValue={initialValues.subtitle}
                        placeholder='Subtitle'
                        {...register("subtitle")}
                    />
                </div>
                {errors.subtitle && <p className="error">{errors.subtitle.message}</p>}
                <div className='field-box'>
                    <label htmlFor='imageUrl' className="input-file">Image Post</label>
                    <p className="text-input-file">
                        {(!imageName[0]) ? 'Choose your image...' : imageName[0].name}
                    </p>
                    <input
                        hidden
                        type='file'
                        defaultValue={[]}
                        id='imageUrl'
                        {...register('image')}
                    />
                </div>
                {errors.image && <p className="error">{errors.image.message}</p>}
                <div className='box_editor'>
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
                    >Edit
                    </button>
                    <button
                        className="button btn_call"
                        id="clear-button"
                        onClick={initialForm}
                    >Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePostForm;
