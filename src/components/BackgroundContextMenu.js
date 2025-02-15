import React from 'react';
import ContextMenu from './ContextMenu';

const BackgroundContextMenu = ({x, y, onClose, onBackgroundChange, backgroundImages}) => {
    const buttons = backgroundImages.map((image, index) => ({
        label: `Background ${index + 1}`,
        onClick: () => onBackgroundChange(image),
    }));

    return (
        <ContextMenu
            x={x}
            y={y}
            buttons={buttons}
            onClose={onClose}
        />
    );
};

export default BackgroundContextMenu;