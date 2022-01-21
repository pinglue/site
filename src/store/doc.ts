import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DocType = {
  activeTabId: string;
  activeFrameworkName: string;
};

const initialState = {
  activeTabId: "",
  activeFrameworkName: "",
} as DocType;

const { reducer, actions } = createSlice({
  name: "doc",
  initialState,
  reducers: {
    activeTabChanged: (doc, action: PayloadAction<string>) => {
      doc.activeTabId = action.payload;
    },
    activeFrameworkNameChanged: (doc, action: PayloadAction<string>) => {
      doc.activeFrameworkName = action.payload;
    },
  },
});

export default reducer;
const { activeTabChanged, activeFrameworkNameChanged } = actions;

export const changeActiveTab =
  (activeTabId: string) => (dispatch, getState) => {
    return dispatch(activeTabChanged(activeTabId));
  };

export const changeActiveFrameworkName =
  (frameWorkName: string) => (dispatch, getState) => {
    return dispatch(activeFrameworkNameChanged(frameWorkName));
  };
