import { useState } from 'react';
import { Editor } from "@tinymce/tinymce-react";


const NewPostScreen = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        content: '',
        image_url: ''
    });

    const handleChange = ({target}) => {
        const { name, value } = target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const parseEditorData = (content, editor) => {   
        const { targetElm } = editor;
        const { name } = targetElm;
        return {
            target: {
                name,
                value: content
            }
        };
    };

    const saveBlog = (e) => {
        e.preventDefault();
        console.log(formData)
        /* props.handleCreate({
            ...formData
        }) */
    };

    const clearForm = (e) => {
        e.preventDefault();
        setFormData({
            title: '',
            subtitle: '',
            content: '',
            image_url: ''
        });
    };

    return (
        <div>
            <h1>Create New Blog Post</h1>
            <form
                className="new-blog-form"
                onSubmit={saveBlog}
            >
                <div>
                    <label className="form-label">Title:
                    <input
                        className="form-input"
                        type='text'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div>
                    <label className="form-label">Subtitle:
                    <input
                        className="form-input"
                        type='text'
                        name='subtitle'
                        value={formData.subtitle}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div>
                    <label className="form-label">Image URL:
                    <input
                        className="form-input"
                        type='text'
                        name='image_url'
                        value={formData.image_url}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div>
                    <label> Content:
                        <Editor
                            outputFormat='html'
                            init={{
                                height: 500,
                                width: 820,
                                resize: false,
                                //menubar: false,
                                //skin: 'oxide-dark',
                                //content_css: 'dark',
                                plugins: 'code link image imagetools',
                                toolbar: 'undo redo | formatselect |forecolor backcolor | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image tinydrive | code'
                            }}
                          
                            onEditorChange={(content, editor) =>
                                handleChange(parseEditorData(content, editor))
                            }
                            
                            value={formData.content}
                            textareaName="content"
                        />
                    </label>
                </div>
                <div>
                    <button 
                        className="button" 
                        id="save-button"
                    >Save
                    </button>
                    <button
                        className="button"
                        id="clear-button"
                        onClick={clearForm}
                    >Clear
                    </button>
                </div>
                
                <div dangerouslySetInnerHTML={{__html: formData.content}} />
                
            </form>
        </div>
    );
}

export default NewPostScreen; 