import React from 'react';
import Layout from '@theme/Layout';

export default function Secret() {
  return (
    <Layout title="Shhh..." description="You unlocked a secret page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/helloReact.js</code> and save to reload. 
        </p>
        <p> Will Keep only developer based info here</p>
      </div>
    </Layout>
  );
}

