
const NODE_TYPE = "Doc";

exports.onCreateNode = async function onCreateNode({
    node,
    actions,
    createNodeId,
    createContentDigest,
 }) {

    const { createNode, createParentChildLink } = actions;

    const createNodeFrom = ({node, type, slug, sortSlug}) => {
        const newNode = {
            id: createNodeId(`${node.id} >>> DOC`),
            children: [],
            parent: node.id,
            internal: {
                type: NODE_TYPE,
                contentDigest: createContentDigest({sortSlug}),
            },
            type, slug, sortSlug
        };
        createNode(newNode);
        createParentChildLink({ parent: node, child: newNode });
    }   

    if (node.internal.type === `Mdx`) {

        console.log("node is", node);

        createNodeFrom({
            node,
            type: "mdx",
            //slug: _removeSortPrefixes(node.slug),
            sortSlug: node.fileAbsolutePath            
        });
    }      

};


function _removeSortPrefixes(slug) {
    if (!slug) return "";
    const arr = slug.split("/");
    if (arr.length > 1) 
        return arr.map(x=>_removeSortPrefixes(x)).join("/");
    
    // single string
    return slug.match(/^(\s*\d+\s*\-)?(\w+)$/)?.[2] || slug;
}

function _objectFromProps(obj, props) {
    return props.reduce((ans, prop)=>{
        ans[prop] = obj[prop];
        return ans;
    }, {});
}