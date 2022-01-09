
import { TocNode } from "./toc-node";

type TocListInfo = {

  // if list is undefined it means this global list is not initialized yet yet (global list objects are initialized on the first page load)  
  list?: TocNode[];
}

/**
 * global toc node list for each document to be used in the left sidebar of all pages related to that document
 * 
 * Format: docname -> TocListInfo for that document
 */
export const tocLists = new Map<string, TocListInfo>()
  .set("pinglue", {})
  .set("pgweb", {});

