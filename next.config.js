const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  redirects() {
    return [
      { source: '/guide/administrators', destination: 'https://support.wavecnct.com/hc/en-us/articles/27371459650196-Access-Control-Roles-and-Permissions', permanent: true },
      { source: '/security/compliance', destination: 'https://support.wavecnct.com/hc/en-us/articles/26813997576596-Security-Compliance', permanent: true },
      { source: '/security/access-control', destination: 'https://support.wavecnct.com/hc/en-us/articles/27371459650196-Access-Control-Roles-and-Permissions', permanent: true },
      { source: '/security/saml', destination: 'https://support.wavecnct.com/hc/en-us/articles/26813705082900-SAML-Single-Sign-On', permanent: true },
      { source: '/security/saml-custom-mapping', destination: 'https://support.wavecnct.com/hc/en-us/articles/26813705082900-SAML-Single-Sign-On', permanent: true },
      { source: '/security/directory-sync', destination: 'https://support.wavecnct.com/hc/en-us/articles/26814143559572-Directory-Sync', permanent: true },
      { source: '/security/microsoft-intra-id', destination: 'https://support.wavecnct.com/hc/en-us/articles/26888245705492-Microsoft-Intra-ID-Integration', permanent: true },
      { source: '/platform/integrations/dynamics-365', destination: 'https://support.wavecnct.com/hc/en-us/articles/26386464950036-Dynamics365', permanent: true },
      { source: '/platform/integrations/hubspot', destination: 'https://support.wavecnct.com/hc/en-us/articles/26815718341140-HubSpot', permanent: true },
      { source: '/platform/integrations/salesforce', destination: 'https://support.wavecnct.com/hc/en-us/articles/26815761361300-Salesforce', permanent: true },
      { source: '/platform/integrations/zapier', destination: 'https://support.wavecnct.com/hc/en-us/articles/26815815756820-Zapier', permanent: true },
      { source: '/platform/integrations/zoho', destination: 'https://support.wavecnct.com/hc/en-us/articles/26815889645588-Zoho', permanent: true },
      { source: '/:any', destination: 'https://support.wavecnct.com', permanent: true },
      { source: '/', destination: 'https://support.wavecnct.com', permanent: true },
    ]
  }
})
