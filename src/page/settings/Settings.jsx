import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Settings() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const flutterWebUrl = process.env.REACT_APP_FLUTTER_SETTINGS_URL;

  console.log('Flutter URL:', flutterWebUrl);

  return (
    <div className="w-full h-screen relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <p>Loading...</p>
        </div>
      )}
      
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 z-10 p-2 bg-gray-100 rounded-full"
      >
        ← Back
      </button>

      <iframe
        src={flutterWebUrl}
        title="Flutter Settings"
        className="w-full h-full border-none"
        style={{ 
          width: '100%', 
          height: '100vh',
          border: 'none' 
        }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

export default Settings; 