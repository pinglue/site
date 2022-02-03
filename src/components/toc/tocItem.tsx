import React from 'react'
import {navigate }from 'gatsby'
import { TocNode } from './toc-node';
import classnames from "classnames";

const TocItem = ({item,slug}:{item:TocNode, slug:string}) => {
    return <li
    onClick={() => navigate(`/docs/${item.slug}`)}
    key={item.id}
    className={classnames("ss-toc__item", {"ss-toc__item--active":slug === item.slug})}    
  >
    {item.title}
  </li>
}

export default TocItem