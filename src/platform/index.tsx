import React from 'react';
const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <ul>
        <li>Home</li>
        <li>Lesson</li>
        <li>Lesson</li>
      </ul>
      <ul>
        <li>Hide Solution</li>
        <li>Hide Preview</li>
        <li>Slides</li>
        <li>Feedback</li>
      </ul>
    </div>
  );
};
export default function Platform() {
  return (
    <div className="platform">
      <Header />
    </div>
  );
}
