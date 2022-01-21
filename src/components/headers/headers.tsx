import React from 'react';
import { paramCase } from "param-case";

function H2({ children }: { children: string }) {
  return <h2 id={paramCase(children)}>{children}</h2>;
}

function H3({ children }: { children: string }) {
  return <h3 id={paramCase(children)}>{children}</h3>;
}

export { H2, H3 };
