/**
 * Source of truth for site config info
 */

/** List of doc sources */
const DOCS_SRC_LIST = ["dev", "local", "remote"];

const DOCS_SRC = DOCS_SRC_LIST.find(x=>x===process.env.DOCS_SRC) || DOCS_SRC_LIST[0];

/** Docs info */
const DOCS_INFO = {
    pinglue: {
        srcPath: {
            dev: "",
            local: "src",
            remote: "src"
        }
    },
    pgweb: {
        srcPath: {
            dev: "",
            local: "src",
            remote: "src"
        }
    }
};

// applying env to DOCS_INFO
for(const docName of Object.keys(DOCS_INFO)) {
    DOCS_INFO[docName].srcPath = 
        DOCS_INFO[docName].srcPath[DOCS_SRC];
}

exports.DOCS_INFO = DOCS_INFO;

/** File system info */
const DEV_DOCS_PATH = "./docs-src";
const LOC_DOCS_PATH = "./loc-docs-src";
const GIT_DOCS_PATH = "./remote-docs-src";

const DOCS_SRC_MAP = new Map()
    .set("dev", DEV_DOCS_PATH)
    .set("local", LOC_DOCS_PATH)
    .set("remote", GIT_DOCS_PATH)

/** docs source path (depending on DOCS_SRC env variable) */
exports.fsPath = 
    DOCS_SRC_MAP.get(DOCS_SRC);
