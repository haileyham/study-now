import Loading from '@/components/loading/Loading';
import React from 'react';

export default function loading() {
  return (
    <>
      <div className="container" style={{ maxWidth: '800px' }}>
        <main>
          <Loading></Loading>;
        </main>
      </div>
    </>
  );
}
