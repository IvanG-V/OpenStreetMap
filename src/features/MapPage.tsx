/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Map, Circle, IEvent } from '@pbe/react-yandex-maps';

function MapPage({
  openTwoMap,
  twoMap,
  handleFirstMapMove,
  cursorPosition,
  handleMapMouseMove,
  isCursorActive,
}: {
  openTwoMap: () => void;
  twoMap: boolean;
  cursorPosition: number[];
  handleFirstMapMove: (e: IEvent) => void;
  handleMapMouseMove: (e: IEvent) => void;
  isCursorActive: boolean;
}): JSX.Element {
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  const heandleMapLoad = (): void => {
    setMapLoaded(true);
  };

  return (
    <div className="App">
      {mapLoaded && (
        <button type="button" className="button_separation">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 512 512"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="rotate(90)"
            onClick={openTwoMap}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

            <g id="SVGRepo_iconCarrier">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                  id="audio-description1"
                  fill="#000000"
                  transform="translate(64.000000, 64.000000)"
                >
                  <path
                    d="M384,1.42108547e-14 L384,384 L1.42108547e-14,384 L1.42108547e-14,1.42108547e-14 L384,1.42108547e-14 Z M42.6666667,213.333333 L42.6666667,341.333333 L341.333333,341.333333 L341.333333,213.333333 L42.6666667,213.333333 Z M42.6666667,170.666667 L341.333333,170.666667 L341.333333,42.6666667 L42.6666667,42.6666667 L42.6666667,170.666667 Z"
                    id="Combined-Shape"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
      )}
      <Map
        onLoad={heandleMapLoad}
        defaultState={{
          center: cursorPosition,
          zoom: 12,
        }}
        width={twoMap ? '50%' : '100%'}
        height="100%"
        options={{
          suppressMapOpenBlock: true,
          yandexMapDisablePoiInteractivity: true,
        }}
        onActionEnd={handleFirstMapMove}
        onMouseMove={handleMapMouseMove}
      >
        {isCursorActive && (
          <Circle
            geometry={[cursorPosition, 1000]}
            options={{
              fillColor: '#FF0000',
              strokeColor: '#000000',
              strokeWidth: 2,
              opacity: 0.5,
              cursor: undefined,
            }}
          />
        )}
      </Map>
    </div>
  );
}

export default MapPage;
