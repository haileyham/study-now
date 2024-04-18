'use client';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import React from 'react';

interface EventItemType {
  image?: string;
  title: string;
  content?: string;
}

export default function EventItemComponent({
  image,
  title,
  content,
}: EventItemType) {
  const { ref, isVisible } = useIntersectionObserver(0.3);
  return <>{title}</>;
}
