import React from 'react';

const BtnModal = ({ text, handleClick }) => {
    return (
        <button
            className='btn_modal'
            onClick={handleClick}
        >{text}
        </button>
    );
};

export default BtnModal;
