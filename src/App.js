import React, {useState} from 'react';
import './App.css';
import BackgroundContextMenu from './components/BackgroundContextMenu';

import backgroundImage1 from './images/mimiii.jpg';
import backgroundImage2 from './images/Oneshot1.jpg';
import backgroundImage3 from './images/Oneshot2.jpeg';

// Array of Background Images
const backgroundImages=  [
  backgroundImage1,
  backgroundImage2,
  backgroundImage3
];

function App() {
  const [backgroundImage,setBackgroundImage] = useState(backgroundImages[1]);
  const [contextMenu, setContextMenu] = useState({show: false, x: 0, y: 0});

  const handleRightClick = (e) => {
    e.preventDefault();
    setContextMenu({show: true, x: e.pageX, y: e.pageY});
  };

  const handleBackgroundChange = (newImage) => {
    setBackgroundImage(newImage);
  };

  const closeContextMenu = () => {
    setContextMenu({show: false, x: 0, y: 0});
  };

  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${backgroundImage})`}}
      onContextMenu={handleRightClick}
      onClick={closeContextMenu}
    >
      <h1>Welcome to My Static Website</h1>
      <p>This is the starting point of my React project.</p>

      {/* display context menu if enabled */}
      {contextMenu.show && (
        <BackgroundContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={closeContextMenu}
          onBackgroundChange={handleBackgroundChange}
          backgroundImages={backgroundImages}
        />
      )}
    </div>
  );
}

export default App;