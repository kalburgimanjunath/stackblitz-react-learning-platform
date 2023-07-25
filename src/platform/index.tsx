import React, { useState } from 'react';
import { LESSONS } from '../data/lessons';
const Header = ({ breadcrum, activeItem, showSolution }) => {
  return (
    <div className="flex bg-pink-200 text-blue-500 cursor-pointer p-2 justify-between">
      <ul>
        <li>Home</li>
        {/* <li>Lesson</li>
        <li>Lesson</li> */}
        {breadcrum &&
          breadcrum.map((item) => {
            return (
              <li className={activeItem == item.title ? 'active' : ''}>
                {item.title}
              </li>
            );
          })}
      </ul>
      <ul>
        <li onClick={showSolution(true)}>Hide Solution</li>
        <li>Hide Preview</li>
        <li>Slides</li>
        <li>Feedback</li>
      </ul>
    </div>
  );
};
const Preview = () => {
  return (
    <div className="m-1">
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
    <div className="p-3 min-h-screen">
      <div className="lesson-title">{content.title}</div>
      <div className="lesson-content">{content.content}</div>
      <div className="lesson-solution">{content.solution}</div>
    </div>
  );
};
export default function Platform() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  return (
    <div className="platform">
      <Header
        breadcrum={LESSONS}
        activeItem={LESSONS[currentLesson].title}
        
      />
      <div className="grid grid-cols-2 gap-4">
        <div className="border-2 min-h-screen">
          <Lessons content={LESSONS[currentLesson]} />
          <div className="footer flex bg-gray-300 text-center w-full pl-3 p-2 fixed">
            {currentLesson > 0 ? (
              <button
                type="button"
                className="primary"
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
                className="primary"
                onClick={() => setCurrentLesson(currentLesson + 1)}
              >
                Next Lesson
              </button>
            ) : null}
          </div>
        </div>
        <div className="p-2">
          <Preview />
        </div>
      </div>
    </div>
  );
}
