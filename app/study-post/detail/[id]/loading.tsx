import Header from '@/components/common/Header';
import Loading from '@/components/loading/Loading';
import React from 'react';

export default function loading() {
  return (
    <div className="container">
      <main style={{ maxWidth: '800px', margin: 'auto' }}>
        <Header title={`스터디 모집`}></Header>
        <Loading></Loading>
      </main>
    </div>
  );
}
