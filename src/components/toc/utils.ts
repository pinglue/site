import { TocNode } from "./toc-node";

export function toTocNodes(gqlNodes: []): TocNode {
  const formattedGqNodes = gqlNodes.map((i: any) => {
    i.formattedSlug = i.slug.split("/");
    return i;
  });

  const result = new TocNode({});

  const add = (root: TocNode, data: any, slug: any[]) => {
    if (slug.length === 0) {
      root.id = data.id;
      root.title = data.frontmatter.title;
      root.slug = data.slug;
      root.isTopic = data.isTopic;
      root.isExpanded = false;
      return;
    }
    let founded = false;
    root.children.forEach((i) => {
      if (i.path === slug[0]) {
        founded = true;
        add(i, data, [...slug.slice(1, slug.length)]);
      }
    });
    if (!founded) {
      const newChild = new TocNode({
        path: slug[0],
      });
      if (slug.length === 1 && slug[0] === "section") {
        root.id = data.id;
        root.title = data.frontmatter.title;
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

  formattedGqNodes.forEach((i) => {
    add(result, i, i.formattedSlug);
  });
  return result;
}
