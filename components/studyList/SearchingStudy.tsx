'use client';
import PostList from '@/components/studyList/postList';
import React, { ChangeEvent, useState } from 'react';
import styles from './page.module.scss';

const SearchingStudyPostList: React.FC<PostListProps> = ({ result }) => {
  const [searchType, setSearchType] = useState('title');
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<Post[]>(result);
  const [activeAllBtn, setActiveAllBtn] = useState(true);
  console.log(filteredData);

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
        case 'status':
          return post.status.includes(searchValue);
        default:
          return false;
      }
    });
  };

  const handleSearching = () => {
    const newData = filterData(search, searchType);
    setFilteredData(newData);
  };

  const handleSearchTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  const handleAll = () => {
    setFilteredData(result);
    setActiveAllBtn(true);
    setSearch('');
  };

  const handleRecruiting = (status: string) => {
    const newData = filterData(status, 'status');
    setFilteredData(newData);
    setActiveAllBtn(false);
  };

  return (
    <>
      <div className={styles.searchingBox}>
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
        <button onClick={handleSearching} className="btn-m">
          검색
        </button>
      </div>
      <div className={styles.optionBox}>
        <button
          onClick={handleAll}
          className={filteredData === result ? styles.activeBtn : ''}
        >
          전체
        </button>
        <button
          onClick={() => handleRecruiting('recruiting')}
          className={
            filteredData.length > 0
              ? !activeAllBtn && filteredData[0].status === 'recruiting'
                ? styles.activeBtn
                : ''
              : ''
          }
        >
          모집중
        </button>
        <button
          onClick={() => handleRecruiting('done')}
          className={
            filteredData.length > 0
              ? filteredData[0].status === 'done'
                ? styles.activeBtn
                : ''
              : ''
          }
        >
          모집완료
        </button>
      </div>
      <ul>
        {filteredData.length > 0 ? (
          <PostList filteredData={filteredData}></PostList>
        ) : (
          <div className={styles.none}>
            <div>
              <p>
                <span>'{search}'</span>
                검색 결과가 없습니다.
              </p>
            </div>
          </div>
        )}
      </ul>
    </>
  );
};

export default SearchingStudyPostList;
