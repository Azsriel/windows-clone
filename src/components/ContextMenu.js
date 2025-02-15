import React from 'react';

const ContextMenu = ({x, y, buttons, onClose}) => {
    return (
        <div
            style={{
            position: 'fixed',
            top: y,
            left: x,
            backgroundColor: 'white',
            border: '3px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            color: 'black',
            zIndex: 1000,
            padding: '10px',
            }}
        >
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, border: '3px solid #ccc' }}>
                {buttons.map((button, index) =>  (
                    <li 
                        key={index}
                        style={{ padding: '8px 16px', cursor: 'pointer',  border: '3px solid #ccc' }}
                        onClick={() => {
                            button.onClick();
                            onClose();  
                        }}
                    >
                        {button.label}
                    </li>
                ))}
                <li 
                    style={{ padding: '8px 16px', cursor: 'pointer', color: 'red',  border: '3px solid #ccc' }}
                    onClick={onClose}
                >
                    Close
                </li>
            </ul>
        </div>
    );
};

export default ContextMenu;