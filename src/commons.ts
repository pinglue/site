
export type DocName = "pingule" | "pgweb";

export type HeadingsData = { depth: number; value: string }[];

interface PagePropsBase {
    docName: DocName;
    title: string;
    type: string;
    slug: string;    
    data?: Record<string, any>
}

interface PagePropsMdx extends PagePropsBase {
    type: "mdx",
    data?: {        
        body: string;
        headings: HeadingsData;        
    }
}

export type PageProps = PagePropsMdx; // more types

export interface DocNodeBase {
    id: string;
    type: string;
    title?: string;
    slug: string;
    sortSlug: string;
    docName: DocName;
    parent: Record<string, any>
}

export interface DocNodeMdx extends DocNodeBase {
    type: "mdx";
    parent: {
        id: string;
        frontmatter: {
            title: string|null;
            id: string|null;            
        }
        headings: HeadingsData;
        body: string;
    }
}

export type DocNode = DocNodeMdx;