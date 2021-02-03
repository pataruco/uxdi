import React from 'react';
import SlidesDeck from '../components/slides-deck';
import Title from '../components/title';

export const lessonRoutes = [
  {
    path: '/morning',
    component: () => (
      <>
        <Title title="Morning" />
        <SlidesDeck slidesDeckName="morning" />
      </>
    ),
  },
  {
    path: '/afternoon',
    component: () => (
      <>
        <Title title="Afternoon" />
        <SlidesDeck slidesDeckName="afternoon" />
      </>
    ),
  },
];
