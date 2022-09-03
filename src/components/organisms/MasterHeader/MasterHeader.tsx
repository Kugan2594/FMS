import Search from 'antd/lib/input/Search';
import React from 'react';
import "./masterHeader.style.less";

function MasterHeader() {
  return (
    <div className='master-header'>
        <Search className='master-header-search' placeholder="Search" />
    </div>
  )
}

export default MasterHeader;