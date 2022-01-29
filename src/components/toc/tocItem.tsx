import React from 'react'
import {navigate }from 'gatsby'
import { TocNode } from './toc-node';
import { paramCase } from "param-case";



const TocItem = ({item,slug}:{item:TocNode, slug:string}) => {
    const url = item.slug.split("/").map(i => paramCase(i)).join("/")
    const formattedSlug = slug.split("/").map(i => paramCase(i)).join("/")
    return <li
    onClick={() => navigate(`/docs/${url}`)}
    key={item.id}
    className="ss-toc__item"
    style={{
      fontWeight: formattedSlug === url ? "900" : undefined,
    }}
  >
    {item.title}
  </li>
}

export default TocItem