import React from 'react';

const BtnOptions = ({ btnType, textBtn, handleClick }) => {

    return (
        <div className="options_box_btn" onClick={handleClick}>
            <button className='options_btn' >
                <i className={btnType} style={{ color: '#ffff', fontSize: '1.3rem' }}></i>
            </button>
            <p className='text_btn'>{textBtn}</p>
        </div>

    );
};

export default BtnOptions;
