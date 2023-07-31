import React, { useState } from 'react';
import { LESSONS } from '../data/lessons';
import { SideOverlays } from '../components/index';
const Header = ({
  breadcrum,
  activeItem,
  showSolution,
  showPreview,
  CurrentLesson,
}) => {
  const [showS, setS] = useState(false);
  const [showP, setP] = useState(false);
  function showSolutionC() {
    showSolution(!showS);
    setS(!showS);
  }
  function showPreviewC() {
    showPreview(!showP);
    setP(!showP);
  }
  return (
    <div className="flex bg-pink-200 text-blue-500 cursor-pointer p-2 justify-between">
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto relative w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <h2
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="slide-over-title"
                  >
                    Sections
                  </h2>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  <ol>
                    {breadcrum &&
                      breadcrum.map((item) => {
                        return (
                          <li
                            className={activeItem == item.title ? 'active' : ''}
                            onClick={() => CurrentLesson(item.id - 1)}
                          >
                            {item.title}
                          </li>
                        );
                      })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <SideOverlays /> */}
      <ul>
        <li>Home</li>
        {/* <li>Lesson</li>
        <li>Lesson</li> */}
        {/* {breadcrum &&
          breadcrum.map((item) => {
            return (
              <li className={activeItem == item.title ? 'active' : ''}>
                {item.title}
              </li>
            );
          })} */}
      </ul>
      <ul>
        <li
          onClick={() => showSolutionC()}
          style={{ display: showS ? 'block' : '' }}
        >
          {showS ? 'Hide' : 'Show'} Solution
        </li>
        <li
          onClick={() => showPreviewC()}
          style={{ display: showP ? 'block' : '' }}
        >
          {showP ? 'Hide' : 'Show'} Preview
        </li>
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
const Lessons = ({ content, showSolution }) => {
  return (
    <div className="p-3 min-h-screen">
      <div className="lesson-title">{content.title}</div>
      <div className="lesson-content text-ellipsis overflow-hidden">
        <pre className="text-ellipsis ">{content.content}</pre>
      </div>
      {showSolution ? (
        <div className="lesson-solution text-ellipsis  mt-1">
          <pre className="text-ellipsis">{content.solution}</pre>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default function Platform() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showSolution, setShowSolution] = useState(true);
  const [showPreview, setShowPreview] = useState(true);

  return (
    <div className="platform">
      <Header
        breadcrum={LESSONS}
        activeItem={LESSONS[currentLesson].title}
        showSolution={(show) => {
          setShowSolution(show);
        }}
        showPreview={(show) => {
          setShowPreview(show);
        }}
        CurrentLesson={(lesson) => {
          console.log(lesson);
          setCurrentLesson(lesson);
        }}
      />
      <div
        className={
          showPreview ? 'grid grid-cols-2 gap-4' : 'grid grid-cols-1 gap-4'
        }
      >
        <div className="border-2 min-h-screen">
          <Lessons
            content={LESSONS[currentLesson]}
            showSolution={showSolution}
          />
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
        <div className="p-2">{showPreview ? <Preview /> : ''}</div>
      </div>
    </div>
  );
}
