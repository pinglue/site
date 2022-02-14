
const {DOC_NODE_TYPE} = require("../utils");

const slugSet = new Set();

exports.onCreateNode = async function onCreateNode(params) {
    
    const {node} = params;

    if (node.internal.type !== DOC_NODE_TYPE) return;

    const slug = node.slug;

    if (slugSet.has(slug)) {
        throw new Error(`Duplicate slug: ${slug}`);
    }

    slugSet.add(slug);
}