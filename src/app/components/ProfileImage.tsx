import React from 'react';

const ProfileImage = () => {
  return (
    <div className="relative mb-8">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl mx-auto">
        <img
          src="/profile.jpg"
          alt="Shristi Bajracharya"
          className="w-full h-full object-cover"
        />
      </div>
      {/* <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white">
        <span className="text-white font-bold text-xs">✓</span>
      </div> */}
    </div>
  );
};

export default ProfileImage;