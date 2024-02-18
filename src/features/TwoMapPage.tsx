/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Circle, Map, IEvent } from '@pbe/react-yandex-maps';

function TwoMapPage({
  secondMapRef,
  secondCursorPosition,
  handleIconClick,
  handleMapMouseMove,
  isCursorActive,
}: {
  secondMapRef: React.MutableRefObject<ymaps.Map | null>;
  secondCursorPosition: number[];
  handleIconClick: () => void;
  handleMapMouseMove: (e: IEvent) => void;
  isCursorActive: boolean;
}): JSX.Element {
  return (
    <div className="container">
      <button type="button" className="button_separation">
        <svg
          width="40px"
          height="40px"
          viewBox="-51.2 -51.2 614.40 614.40"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          transform="rotate(90)"
          stroke="#000000"
          onClick={handleIconClick}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(192,192), scale(0.25)">
            <rect
              x="-51.2"
              y="-51.2"
              width="614.40"
              height="614.40"
              rx="307.2"
              fill="#7ed0ec"
              strokeWidth="0"
            ></rect>
          </g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="5.12"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="audio-description1" fill="#000000" transform="translate(64.000000, 64.000000)">
                <path
                  d="M384,1.42108547e-14 L384,384 L1.42108547e-14,384 L1.42108547e-14,1.42108547e-14 L384,1.42108547e-14 Z M42.6666667,213.333333 L42.6666667,341.333333 L341.333333,341.333333 L341.333333,213.333333 L42.6666667,213.333333 Z M42.6666667,170.666667 L341.333333,170.666667 L341.333333,42.6666667 L42.6666667,42.6666667 L42.6666667,170.666667 Z"
                  id="Combined-Shape"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </button>

      <Map
        defaultState={{
          center: secondCursorPosition,
          zoom: 12,
        }}
        width="100%"
        height="100%"
        options={{
          suppressMapOpenBlock: true,
          yandexMapDisablePoiInteractivity: true,
        }}
        instanceRef={secondMapRef}
        onMouseMove={handleMapMouseMove}
      >
        {isCursorActive && (
          <Circle
            geometry={[secondCursorPosition, 1000]}
            options={{
              fillColor: '#FF0000',
              strokeColor: '#000000',
              strokeWidth: 2,
              opacity: 0.5,
              cursor: 'none',
            }}
          />
        )}
      </Map>
    </div>
  );
}

export default TwoMapPage;
