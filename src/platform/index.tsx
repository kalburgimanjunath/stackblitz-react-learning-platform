import React, { useState } from 'react';
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
      <div className="lesson-solution">{content.solution}</div>
    </div>
  );
};
export default function Platform() {
  const [currentLesson, setCurrentLesson] = useState(0);
  return (
    <div className="platform">
      <Header />
      <div className="flex w-full v-full">
        <div className="w-half border-right ">
          <Lessons content={LESSONS[currentLesson]} />
          <div className="footer flex">
            {currentLesson > 0 ? (
              <button
                type="button"
                onClick={() => setCurrentLesson(currentLesson - 1)}
              >
                Previous Lesson
              </button>
            ) : null}

            <span>
              {currentLesson}/{LESSONS.length}
            </span>
            {currentLesson < LESSONS.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentLesson(currentLesson + 1)}
              >
                Next Lesson
              </button>
            ) : null}
          </div>
        </div>
        <div className="w-half">
          <Preview />
        </div>
      </div>
    </div>
  );
}
