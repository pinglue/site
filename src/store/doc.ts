import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DocNames = "pingule" | "pgweb";

type TabType = {
    id: string;
    activeIndex: number;
};

type DocType = {
    name: DocNames;
    tabs?: TabType[];
};

type initialType = {
    list: DocType[];
    activeDoc: DocNames
};

const initialState = {
    list: [
        {
            name: "pgweb",
            tabs: [],
        },
        {
            name: "pingule",
            tabs: [],
        },
    ],
    activeDoc: "pgweb"
} as initialType;

const { reducer, actions } = createSlice({
    name: "doc",
    initialState,
    reducers: {
        tabAdded: (
            doc,
            action: PayloadAction<{ docName: DocNames; tabContainerId: string }>
        ) => {
            const docIndex = doc.list.findIndex(
                (i) => i.name === action.payload.docName
            );
            const tabIndex = doc.list[docIndex].tabs.findIndex(
                (i) => i.id === action.payload.tabContainerId
            );
            if (tabIndex !== -1) return;
            doc.list[docIndex].tabs.push({
                id: action.payload.tabContainerId,
                activeIndex: 0,
            });
        },
        activeTabChanged: (
            doc,
            action: PayloadAction<{
                docName: DocNames;
                tabContainerId: string;
                activeTabIndex: number;
            }>
        ) => {
            const docIndex = doc.list.findIndex(
                (i) => i.name === action.payload.docName
            );
            const tabIndex = doc.list[docIndex].tabs.findIndex(
                (i) => i.id === action.payload.tabContainerId
            );
            if (tabIndex < 0) return;
            doc.list[docIndex].tabs[tabIndex].activeIndex =
                action.payload.activeTabIndex;
        },
        activeDocChanged: (doc, action: PayloadAction<DocNames>) => {
            doc.activeDoc = action.payload
        }
    },
});

export default reducer;
const { tabAdded, activeTabChanged, activeDocChanged } = actions;

export const addTab =
    (docName: DocNames, tabContainerId: string) => (dispatch, action) => {
        dispatch(tabAdded({ docName, tabContainerId }));
    };

export const changeActiveTab =
    (docName: DocNames, tabContainerId: string, activeTabIndex: number) =>
        (dispatch, getState) => {
            return dispatch(
                activeTabChanged({ docName, tabContainerId, activeTabIndex })
            );
        };

export const changeActiveDoc = (docName: DocNames) => (dispatch, getState) => {
    return dispatch(activeDocChanged(docName))
}
