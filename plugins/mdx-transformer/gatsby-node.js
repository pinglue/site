
const {fsPath, DOCS_INFO} = require("../../configs");
const {createDocNodeFrom} = require("../utils");

exports.onCreateNode = async function onCreateNode(params) {
    
    const {node} = params;

    if (node.internal.type !== `Mdx`) return;

    let sortSlug;
    try {
        sortSlug = getSortSlugFromAbsPath(node.fileAbsolutePath);
        if (!sortSlug) return;
    }
    catch(error) {
        console.error(error);
        return;
    }    

    createDocNodeFrom({
        params,
        type: "mdx",
        sortSlug,
        slug: _removeSortPrefixes(sortSlug),
        docName: sortSlug.split("/")[0],
    });

}


function _removeSortPrefixes(slug) {
    if (!slug) return "";
    const arr = slug.split("/");
    if (arr.length > 1) 
        return arr.map(x=>_removeSortPrefixes(x)).join("/");
    
    // single string
    return slug.match(/^(\s*\d+\s*\-)?([\w\-]+)$/)?.[2] || slug;
}


// removing initial . and / from the fsPath
const normalizeFsPath = fsPath.match(/\.?\/?(.+)/)[1];

/**
 * Generating sort slug from a file's absolute path which belongs to this doc. 
 * @param {*} absPath 
 */
function getSortSlugFromAbsPath(absPath) {

    let i = absPath.search(normalizeFsPath);   

    if (i===-1) 
        throw new Error(`file outside of doc src folder: ${absPath}`);
    
    const res = absPath.substr(i).match(/\/([\w\-]+)\/([\w\-\/]+)/);

    if (!res)
        throw new Error('invalid path: ${absPath}');

    const docName = res[1];
    let relPath = res[2];

    const docSubPath = DOCS_INFO[docName]?.srcPath?.match(/\.?\/?(.*)/)[1];

    if (typeof docSubPath !== "string")
        throw new Error('invalid doc name: ${docName}');


    // file outside of src path
    if (docSubPath && !relPath.startsWith(`${docSubPath}/`))
        return "";
    
    if (docSubPath)
        relPath = relPath.replace(`${docSubPath}/`, "");

    return `${docName}/${relPath}`;

}

// quick tests
//const ans = getSortSlugFromAbsPath('/home/payam/Projects/pg-site/docs-src/pinglue/020-get-started/020-hello-world-tutorial/060-channels.mdx');
//const ans = getSortSlugFromAbsPath('/home/payam/Projects/pg-site/docs-src/pinglue/src/020-get-started/020-hello-world-tutorial/060-channels.mdx');
//const ans = _removeSortPrefixes("pinglue/020-get-started/010-monorepo-setup")

//console.log(ans);

