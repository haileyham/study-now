'use client';
import React, { ChangeEvent, useState } from 'react';

const SearchingStudy: React.FC<PostListProps> = ({ result }) => {
  const [searchType, setSearchType] = useState('title');
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<Post[]>(result);

  const filterData = (searchValue: string, searchType: string) => {
    if (!searchValue.trim()) {
      return result;
    }

    return result.filter((post) => {
      switch (searchType) {
        case 'title':
          return post.title.includes(searchValue);
        case 'content':
          return post.content.includes(searchValue);
        case 'location':
          return post.location.includes(searchValue);
        case 'mode':
          return post.mode.includes(searchValue);
        case 'type':
          return post.type.includes(searchValue);
        default:
          return false;
      }
    });
  };

  const handleSearching = () => {
    const newData = filterData(search, searchType);
    setFilteredData(newData);
    console.log(searchType);
  };

  const handleSearchTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  return (
    <>
      <select
        name="검색유형"
        id="검색유형"
        value={searchType}
        onChange={handleSearchTypeChange}
      >
        <option value="title">글 제목</option>
        <option value="content">글 내용</option>
        <option value="location">장소</option>
        <option value="mode">온오프</option>
        <option value="type">종류</option>
      </select>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearching}>검색</button>
      <ul>
        {filteredData.map((post, index) => (
          <li key={index}>{post[searchType.toLowerCase()]}</li>
        ))}
      </ul>
    </>
  );
};

export default SearchingStudy;
