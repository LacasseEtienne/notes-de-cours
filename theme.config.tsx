import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import EmptyComponent from './components/emptyComponent';

const config: DocsThemeConfig = {
    logo: <span></span>,
    editLink: {
        component: EmptyComponent,
    },
    feedback: {
        content: EmptyComponent,
    },
    useNextSeoProps() {},
    footer: {
        text: "",
    },
    i18n: [],
}

export default config
