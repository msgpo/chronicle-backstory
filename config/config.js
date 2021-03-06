module.exports = {
  name: 'Chronicle Backstory',
  acronym: 'CHBS',
  description:
    'Chronicle Backstory combines intelligence about global threats in the wild, threats inside your network, and unique signals about both.',
  entityTypes: ['IPv4', 'IPv6', 'domain', 'MAC', 'hash'],
  styles: ['./styles/styles.less'],
  block: {
    component: {
      file: './components/block.js'
    },
    template: {
      file: './templates/block.hbs'
    }
  },
  request: {
    cert: '',
    key: '',
    passphrase: '',
    ca: '',
    proxy: '',
    rejectUnauthorized: true
  },
  logging: {
    level: 'info' //trace, debug, info, warn, error, fatal
  },
  options: [
    {
      key: 'issuerEmail',
      name: 'Issuer Email',
      description: 'The Issuer Email associated with your Google Service Account',
      default: '',
      type: 'text',
      userCanEdit: true,
      adminOnly: false
    },
    {
      key: 'privateKey',
      name: 'Private Key',
      description: 'The Private Key associated with your Google Service Account',
      default: '',
      type: 'password',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'ignoreAssetResults',
      name: 'Ignore Asset Results',
      description:
        'Allows you to ignore results that only contain Asset data, while containing no Event or IOC data. NOTE: This will not remove Assets from the results that do contain Event or IOC data',
      default: false,
      type: 'boolean',
      userCanEdit: true,
      adminOnly: false
    },
    {
      key: 'monthsBack',
      name: 'Months Back',
      description:
        'The number of months you would like to look back for violations (decimals work as well, e.g. 0.25)',
      default: 6,
      type: 'number',
      userCanEdit: true,
      adminOnly: false
    }
  ]
};
