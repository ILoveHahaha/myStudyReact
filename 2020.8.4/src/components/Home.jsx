import React from 'react';
import Demo2 from './Demo2'
import Demo3 from './Demo3'
import Demo4 from './Demo4'
import NewBanner from './Demo5/New/NewBanner'
import Demo6 from './Demo6/Parent'

function Home() {
  return (
    <div className="App">
      <Demo2/>
      <Demo3/>
      <Demo4/>
      <NewBanner />
      <Demo6/>
    </div>
  );
}

export default Home;
