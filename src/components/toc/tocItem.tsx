import React from 'react'
import {navigate }from 'gatsby'
import { TocNode } from './toc-node';

const TocItem = ({item,slug}:{item:TocNode, slug:string}) => {
    return <li
    onClick={() => navigate(`/docs/${item.slug}`)}
    key={item.id}
    className="leftSidebar__item"
    style={{
      fontWeight: slug === item.slug ? "900" : undefined,
    }}
  >
    {item.title}
  </li>
}

export default TocItem