import { proxyTitle } from '../utils/i18n';

/*
 *  @params title: target中没有列出的属性的返回值
 *  @params target: 要被代理的对象。
 *                  哪些页面的 document.title 需要特殊值，则设置在 target 中
 *                  未设置在target中的页面，通过代理统一使用 title 的值作为 document.title 的值
 * */
const title = 'vue-spa-admin';
const target = {
  login: 'login',
  home: 'home'
};

export default {
  common: {
    query: 'Query',
    reset: 'Reset',
    import: 'Import',
    export: 'Export',
    add: 'Add',
    update: 'Update',
    delete: 'Delete',
    ok: 'Ok',
    cancel: 'Cancel',
    operation: 'Operation',
    queryCondition: 'Query Condition',
    date: 'date',
    upCompany: 'upCompany',
    startTime: 'Start Time',
    endTime: 'End Time',
    transitNumber: 'YTO transit number'
  },
  language: {
    'zh-cn': 'Chinese (Simplified)',
    en: 'English',
    'zh-tw': 'Chinese (Traditional)'
  },
  message: {
    notSelect: 'Please select data first'
  },
  title: proxyTitle(target, title),
  sidebar: {
    home: 'Home Page',
    
    nationalPortList: 'National Port List',
    Asia: 'Asia',
    NorthAmerica: 'North America',
    SouthAmerica: 'South America',
    Oceania: 'Oceania',
    Europe: 'Europe',
    Africa: 'Africa',
    
    basic: 'Basic Setting',
    upAndDownCompanyManage: 'UpAndDownCompanyManage',
    nationalPortSetting: 'National Port Setting',
    
    log: 'Log',
    loginLog: 'Login',
    
    delare: 'Delare Manage',
    pudongClearance: 'Pudong Clearance',
    clearanceInfoManage: 'ClearanceInfoManage',
    inExportDataQuery: 'InExportDataQuery',
    inExportBillManage: 'InExportBillManage',
    preClearancePrint: 'PreClearancePrint',
    
    credentials: 'Credentials Manage',
    idCardManage: 'IdCard Manage',
    
    track: 'Track Query'
  },
  topbar: {
    screenfull: 'Screenfull',
    cancelScreenfull: 'Cancel Screenfull',
    tipsOfLang: 'switch language success'
  },
  country: {
    China: 'China',
    Taiwai: 'Taiwai',
    Japan: 'Japan',
    Thailand: 'Thailand',
    Korea: 'Korea',
    Germany: 'Germany',
    Netherlands: 'Netherlands',
    Britain: 'Britain',
    Sweden: 'Sweden',
    Egypt: 'Egypt',
    Australia: 'Australia',
    NewZealand: 'New Zealand',
    America: 'America',
    Canada: 'Canada',
    Brazil: 'Brazil',
    Chile: 'Chile'
  },
  login: {},
  port: {
    country: 'Country',
    noPortsText: 'Welcome to the regional national city port display page, which shows the city port customs abilit'
  },
  upAndDownCompanyManage: {
    upAndDownCompanyManage: 'upAndDownCompanyManage',
    companyCode: 'Code',
    companyName: 'Name',
    companyAbbr: 'Abbr',
    telphone: 'Telphone',
    country: 'Country',
    language: 'Language',
    encryptId: 'EncryptId',
    secretKey: 'SecretKey',
    generateSecretKey: 'Generate SK'
  },
  nationalPortSetting: {
    nationalPortList: 'National Port List',
    index: 'Index',
    area: 'Area',
    country: 'Country',
    city: 'City',
    port: 'Port',
    customsCapacity: 'CustomsCapacity',
    Asia: 'Asia',
    Europe: 'Europe',
    Africa: 'Africa',
    NorthAmerica: 'North America',
    SouthAmerica: 'South America',
    Oceania: 'Oceania'
  },
  idCardManage: {
    idCard: 'idCard',
    passport: 'passport',
    yes: 'Yes',
    no: 'No',
    unChecked: 'Unchecked',
    checked: 'Checked',
    failChecked: 'Check Fail',
    idCardManage: 'idCard Manage',
    index: 'Index',
    name: 'Name',
    telphone: 'Telphone',
    credentialsType: 'Credentials Type',
    credentialsNo: 'Credentials No.',
    isUpload: 'Is Upload',
    status: 'Status',
    uploadTime: 'Upload Time',
    checkTime: 'Check Time',
    checker: 'Checker',
    batchExport: 'Batch Export',
    selectExport: 'Select Export',
    hExport: 'Horizontal Export',
    vExport: 'Vertical Export'
  },
  inExportBillManage: {
    customId: 'customId',
    InExportBillManageList: 'InExportBillManageList'
  },
  inExportDataQuery: {
    inExportDataQuery: 'inExportDataQuery',
    downCompany: 'downCompany',
    expressNum: 'expressNum'
  },
  walkProcess: {
    placeholder: 'Enter up to 10 waybill Numbers,separated by "," or "line break"',
    serialNum: 'Serial number',
    waybillNum: 'Waybill number',
    latestTrack: 'The latest track'
  },
  clearanceInfoManage: {
    clearanceInfoManage: 'clearanceInfoManage',
    clientId: 'clientId',
    customsId: 'customsId',
    totalLogisticsNo: 'totalLogisticsNo',
    subLogisticsNo: 'subLogisticsNo',
    logisticsCode: 'logisticsCode',
    logisticsName: 'logisticsName',
    totalLogist: 'totalLogist',
    orderId: 'orderId',
    platformCode: 'platformCode',
    shipping: 'shipping',
    shippingAddress: 'shippingAddress',
    consigneeName: 'consigneeName',
    consigneeAddress: 'consigneeAddress',
    number: 'number',
    netWeight: 'netWeight',
    nameOfGoods: 'nameOfGoods'
  }
};
