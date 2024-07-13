import React from 'react';

type ButtonProps = {
    text: string;
    onclick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text,onclick }) => {
    return (
        <button onClick={onclick} className='bg-[#231d15]/80 rounded-md p-3 text-white font-semibold  hover:scale-105 hover:bg-[#231d15] duration-150'>
            {text}
        </button>
    );
};

export default Button;