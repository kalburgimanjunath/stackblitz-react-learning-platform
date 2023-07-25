import React from 'react';
import { LESSONS } from './lessons';
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
const Preview = () => {
  return (
    <div className="w-full m-20 p-20 border shadow">
      <header className="flex">
        <div className="flex space-around text-center">
          <span>X</span>
          <span>M</span>
          <span>R</span>
        </div>
        <div>Preview</div>
      </header>
    </div>
  );
};
const Lessons = ({ content }) => {
  return (
    <div>
      <div className="lesson-title">{content.title}</div>
      <div className="lesson-content">{content.content}</div>
    </div>
  );
};
export default function Platform() {
  return (
    <div className="platform">
      <Header />
      <div className="flex w-full v-full">
        <div className="w-half border-right ">
          <Lessons content={LESSONS[0]} />
          <div className="footer flex">
            <button type="button">Previous Lesson</button>

            <button type="button">Next Lesson</button>
          </div>
        </div>
        <div className="w-half">
          <Preview />
        </div>
      </div>
    </div>
  );
}
