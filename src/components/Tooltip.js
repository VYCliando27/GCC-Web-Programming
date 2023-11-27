import React from 'react';

const Tooltip = ({ text }) => {
  if (!text) return null;

  return (
    <div className="tooltip" style={{ position: 'absolute', pointerEvents: 'none' }}>
      {text}
    </div>
  );
};

export default Tooltip;
