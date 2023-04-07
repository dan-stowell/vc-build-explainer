import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span><b>vc build</b> explainer</span>,
  project: {
    link: 'https://github.com/dan-stowell/vc-build-explainer',
  },
  docsRepositoryBase: 'https://github.com/dan-stowell/vc-build-explainer/tree/main',
  footer: {
    text: <span>powered by <a href="https://nextra.site/">Nextra</a></span>,
  },
}

export default config
