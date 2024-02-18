/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useCallback, useRef, useState } from 'react';
import './App.css';
import { YMaps, IEvent } from '@pbe/react-yandex-maps';
import MapPage from '../features/MapPage';
import type { ProcessEnv } from '../types/types';
import TwoMapPage from '../features/TwoMapPage';

function App(): JSX.Element {
  const [twoMap, setTwoMap] = useState<boolean>(false);
  const [cursorPosition, setCursorPosition] = useState([59.9386, 30.3141]);
  const [isCursorActive, setIsCursorActive] = useState<boolean>(false);

  const secondMapRef = useRef<ymaps.Map | null>(null);

  const handleIconClick = useCallback((): void => {
    setIsCursorActive((prev) => !prev);
  }, []);

  const handleMapMouseMove = (e: IEvent): void => {
    const coords: number[] = e.get('coords');
    if (isCursorActive) {
      setCursorPosition(coords);
    }
  };
  const handleFirstMapMove = (e: IEvent): void => {
    const coords: number[] = e.get('target').getCenter();
    if (secondMapRef.current) {
      secondMapRef.current.panTo(coords, { duration: 100 });
    }
  };

  const openTwoMap = useCallback((): void => {
    setTwoMap((prev) => !prev);
  }, []);

  const env: ProcessEnv = {
    VITE_APP_API_MAP_KEY: import.meta.env.VITE_APP_API_MAP_KEY as string,
  };

  return (
    <YMaps query={{ apikey: env.VITE_APP_API_MAP_KEY }}>
      <MapPage
        openTwoMap={openTwoMap}
        twoMap={twoMap}
        handleFirstMapMove={handleFirstMapMove}
        handleMapMouseMove={handleMapMouseMove}
        cursorPosition={cursorPosition}
        isCursorActive={isCursorActive}
      />
      {twoMap && (
        <TwoMapPage
          secondMapRef={secondMapRef}
          handleMapMouseMove={handleMapMouseMove}
          secondCursorPosition={cursorPosition}
          handleIconClick={handleIconClick}
          isCursorActive={isCursorActive}
        />
      )}
    </YMaps>
  );
}
export default App;
