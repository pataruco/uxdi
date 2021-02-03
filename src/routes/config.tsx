import React from 'react';
import SlidesDeck from '../components/slides-deck';
import Title from '../components/title';

export const lessonRoutes = [
  {
    path: '/morning',
    component: () => (
      <>
        <Title week={1} lesson={1} />
        <SlidesDeck slidesDeckName="morning" />
      </>
    ),
  },
  {
    path: '/afternoon',
    component: () => (
      <>
        <Title week={1} lesson={2} />
        <SlidesDeck slidesDeckName="afternoon" />
      </>
    ),
  },
];
