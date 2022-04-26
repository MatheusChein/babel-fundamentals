import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Posts } from '../pages/Posts';
import { Post } from '../pages/Post';

export function RoutesComponent() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateY(50px)', position: 'absolute' },
    enter: { opacity: 1, transform: 'translateY(0)', position: 'absolute' },
    leave: { opacity: 0, transform: 'translateY(50px)', position: 'absolute' },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Routes location={item}>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </animated.div>
  ));
}
