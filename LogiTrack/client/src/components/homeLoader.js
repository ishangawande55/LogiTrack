import React from 'react';

const homeLoader = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4', // or any background color you prefer
  };

  const textStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#000', // Text color
  };

  const ringStyle = {
    width: '50px',
    height: '50px',
    border: '5px solid #ccc', // Light gray border
    borderTop: '5px solid #000', // Black border at the top for the loading effect
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  const keyframes = `
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <div style={containerStyle}>
      <div style={textStyle}>LogiTrack</div>
      <div style={ringStyle}></div>
      <style>
        {keyframes}
      </style>
    </div>
  );
};

export default homeLoader;