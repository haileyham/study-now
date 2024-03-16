'use client';
import React from 'react';

interface SearchingBtnPropsType {
  onFunction?: () => void;
  style?: string;
}

export default function SearchingBtn({
  onFunction,
  style,
}: SearchingBtnPropsType) {
  return (
    <button className={`btn-s ${style}`} onClick={onFunction}>
      검색
    </button>
  );
}
