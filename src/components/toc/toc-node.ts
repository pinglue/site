
/**
 * Model for a TOC node (which is either topic, section or subsection)
 */
export class TocNode {  

  // node data
  id: string;
  title: string;
  slug: string;
  isTopic: boolean;

  // child sections
  children: TocNode[] = [];

  // expanded (will be ignored for the top level and section nodes - only considered for subsections when rendering the UI)
  isExpanded = false;

  constructor(data:{
    id: string;
    title: string;
    slug: string;
    isTopic: boolean
  }) {

    this.id = data.id;
    this.title = data.title;
    this.slug = data.slug;   
    this.isTopic = this.isTopic;
  }

  add(node: TocNode):void {
    this.children.push(node);
  }  

  toggle(): void {    
    this.isExpanded = !this.isExpanded;
  }

}