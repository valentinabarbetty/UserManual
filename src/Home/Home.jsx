import React from 'react';
import BoxText from '../BoxText/BoxText';

const Home = ({ content }) => {
  return (
    <div style={{ padding: '20px' }}>
      <BoxText text={content} />
    </div>
  );
};

export default Home;