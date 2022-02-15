
import React, { useEffect, useState } from "react";
import { DocTitle } from "../../components/doc-title/doc-title";
import { Header } from "../../components/header/header";
import '../../scss/bundle.scss';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import DocToc from "../../components/toc/doc-toc";
import HeadersList from "../../components/headersList/headersList";
import { commandName } from "../../components/cli-doc/cli-doc-item";
import { cmdMock } from "./cmd";
import CliDocBody from "../../components/cli-doc/cli-doc-body";


export default function () {
    const [showLeftSidebar, setShowLeftSidebar] = useState(false);
    const [showSandbar, setShowSandbar] = useState(false);

    const headings = [
        { depth: 2, value: commandName(cmdMock.command) },
        ...cmdMock.commands.map(item => {
            return {
                depth: 2,
                value: commandName(item.command)
            }
        })];

    let timer: any;
    const threasholdToChangeLayout = 768;

    const windowResizeHandler = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            if (window.innerWidth >= threasholdToChangeLayout && showLeftSidebar) {
                setShowLeftSidebar(false);
            }
        }, 300);
    }

    useEffect(() => {
        window.addEventListener('resize', windowResizeHandler, true);
        return window.removeEventListener('resize', windowResizeHandler, true);
    });

    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
            <div className={classNames('d-md-flex ss-doc-wrapper', { 'show-left-sidebar': showLeftSidebar })}>
                <div className="ss-doc-wrapper__overlay" onClick={() => setShowLeftSidebar(false)}></div>
                <div className="ss-doc-wrapper__left-sidebar">
                    <div className="ss-doc-wrapper__title-area pt-h pt-md-1 px-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <DocTitle />
                            <div className='ms-1 d-md-none'>
                                <button className="btn s-icon-btn" style={{ paddingRight: 0 }} onClick={() => { setShowLeftSidebar(false); }}>
                                    <i className='bi-x'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <DocToc docName="pgweb" slug="test" />
                </div>

                <div style={{ flex: '1 1 auto' }}>
                    <div className="ss-doc-wrapper__header py-h py-md-1 px-2">
                        <Header onClickMenu={() => { setShowLeftSidebar(true) }} />
                    </div>

                    <div className="d-lg-flex ss-doc-wrapper__main">
                        <div className="ss-doc-wrapper__body p-2">
                            <div className="s-content">
                                <CliDocBody {...cmdMock} />
                            </div>
                        </div>
                        <div className="ss-doc-wrapper__right-sidebar p-2">
                            <h6>In this article</h6>
                            <HeadersList headings={headings} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-hq px-2 text-center ss-doc-footer">
                © 2022 pinglue
            </div>
        </>
    );
}