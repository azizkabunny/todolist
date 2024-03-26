import React from 'react';

const Button = ({ title, background = 'bg-cyan-500', clbFunc }) => {
  return (
    <button
      onClick={clbFunc}
      className={`${background} p-3 rounded text-white w-full hover:opacity-90`}
    >
      {title}
    </button>
  );
};

export default Button;
