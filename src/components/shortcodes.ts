
import { Warn, Prereq, Recall, Tip, Note, Def } from "./notice/notice";
import { Tab, TabContainer } from "./tab/tabs";
import AppLink from './appLink/appLink';
import { H2, H3 } from "./headers/headers";

export const SHORTCODES = { Warn, Prereq, Recall, Tip, Note, Def, Tab, TabContainer, a: AppLink, h2: H2, h3: H3 };
