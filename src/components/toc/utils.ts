import type { DocNode } from "../../commons";
import { TocNode } from "./toc-node";

export function toTocNodes(gqlNodes: DocNode[]): TocNode {

    const root = new TocNode({});

    const add = (root: TocNode, data: any, slug: string[]) => {

        // leaf node
        if (slug.length === 0) {
            root.id = data.id;
            root.title = data.title;
            root.slug = data.slug;
            root.isTopic = data.isTopic;
            root.isExpanded = false;
            return;
        }

        let found = false;
        root.children.forEach((i) => {
            if (i.path === slug[0]) {
                found = true;
                add(i, data, slug.slice(1));
            }
        });
        if (!found) {
        const newChild = new TocNode({
            path: slug[0],
        });
        if (slug.length === 1 && slug[0] === "section") {
            root.id = data.id;
            root.title = data.title;
            root.slug = data.slug;
            root.isTopic = data.isTopic;
            root.isExpanded = false;
            root.isTopic = false
            return;
        }
        root.add(newChild);
        add(newChild, data, slug.slice(1, slug.length));
        }
    };

    for (const i of gqlNodes)
        add(root, i, i.sortSlug.split("/"));

    return root;
}
