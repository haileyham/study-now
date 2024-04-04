import Header from '@/components/common/Header';
import Loading from '@/components/loading/Loading';
import React from 'react';

export default function loading() {
  return (
    <div className="container">
      <Header title={`스터디 모집`}></Header>
      <Loading></Loading>
    </div>
  );
}
