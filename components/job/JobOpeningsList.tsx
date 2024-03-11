'use client';
import jobOpeningAPI from '@/lib/apis/api-utils';
import React, { useEffect, useState } from 'react';

export default function JobOpeningsList() {
  const [testData, setTestData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jobOpeningAPI();
        setTestData(data.GetJobInfo.row);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {testData.length > 0 ? (
        <div>{testData[0].CMPNY_NM}</div>
      ) : (
        <div>no data</div>
      )}
    </div>
  );
}
