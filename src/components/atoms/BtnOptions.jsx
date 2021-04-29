import React from 'react';

const BtnOptions = ({btnType, textBtn}) => {
    const handleClick = () => {
        console.log('click')
    };

    return (
        <div className="options_box_btn">
            <button 
                className='options_btn'
                onClick={handleClick}  
            >
                <i className={btnType} style={{color: '#ffff', fontSize: '1.3rem'}}></i>
            </button>
            <p className='text_btn'>{ textBtn }</p>
        </div>
        
    );
};

export default BtnOptions;
