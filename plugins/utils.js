
/**
 * Common tools
 */

const DOC_NODE_TYPE = "Doc";
exports.DOC_NODE_TYPE = DOC_NODE_TYPE;

exports.createDocNodeFrom = function({
    params, 
    type, 
    slug, 
    sortSlug,
    docName
}) {
    const {
        node,
        createNodeId, 
        createContentDigest, 
        actions: {createNode, createParentChildLink}
    } = params;    

    const newNode = {
        id: createNodeId(`${node.id} >>> ${DOC_NODE_TYPE}`),
        children: [],
        parent: node.id,
        internal: {
            type: DOC_NODE_TYPE,
            contentDigest: createContentDigest({sortSlug}),
        },
        type, slug, sortSlug, docName
    };
    createNode(newNode);
    createParentChildLink({ parent: node, child: newNode });
}

