import { proxyTitle } from '../utils/i18n';

/*
 *  @params title: target中没有列出的属性的返回值
 *  @params target: 要被代理的对象。
 *                  哪些页面的 document.title 需要特殊值，则设置在 target 中
 *                  未设置在target中的页面，通过代理统一使用 title 的值作为 document.title 的值
 * */

const title = 'vue-中文';
const target = {
  login: '登陆',
  home: '首页'
};

export default {
  common: {
    query: '查询',
    reset: '重置',
    import: '导入',
    export: '导出',
    add: '新增',
    update: '修改',
    delete: '删除',
    ok: '确定',
    cancel: '取消',
    operation: '操作',
    queryCondition: '查询条件',
    date: '日期',
    upCompany: '公司',
    startTime: '开始时间',
    endTime: '结束时间',
    transitNumber: '订单号'
  },
  language: {
    'zh-cn': '中文（简体）',
    en: '英文',
    'zh-tw': '中文（繁体）'
  },
  message: {
    notSelect: '请先选择数据'
  },
  title: proxyTitle(target, title),
  sidebar: {
    home: '首页',

    nationalPortList: '国家口岸列表',
    Asia: '亚洲',
    NorthAmerica: '北美洲',
    SouthAmerica: '南美洲',
    Oceania: '大洋洲',
    Europe: '欧洲',
    Africa: '非洲',

    basic: '基本设置',
    upAndDownCompanyManage: '公司管理',
    nationalPortSetting: '城市设置',

    log: '日志管理',
    loginLog: '登陆日志管理',

    delare: 'SB管理',
    pudongClearance: 'pdqg',
    clearanceInfoManage: '信息管理',
    inExportDataQuery: '数据查询',
    inExportBillManage: '订单管理',
    preClearancePrint: '信息打印',

    credentials: '证件管理',
    idCardManage: '身份证管理',

    track: '轨迹查询'
  },
  topbar: {
    screenfull: '全屏',
    cancelScreenfull: '取消全屏',
    tipsOfLang: '语言切换成功'
  },
  country: {
    China: '中国',
    Taiwai: '台湾',
    Japan: '日本',
    Thailand: '泰国',
    Korea: '韩国',
    Germany: '德国',
    Netherlands: '荷兰',
    Britain: '英国',
    Sweden: '瑞典',
    Egypt: '埃及',
    Australia: '澳大利亚',
    NewZealand: '新西兰',
    America: '美国',
    Canada: '加拿大',
    Brazil: '巴西',
    Chile: '智利'
  },
  login: {},
  port: {
    country: '国家',
    noPortsText: '欢迎您来到地区国家城市展示页,该页展示各个城市能力查询'
  },
  upAndDownCompanyManage: {
    upAndDownCompanyManage: '公司管理',
    companyCode: '公司编号',
    companyName: '公司名称',
    companyAbbr: '公司简称',
    telphone: '手机电话',
    country: '国家/地区',
    language: '语言',
    encryptId: '加密ID',
    secretKey: '密钥',
    generateSecretKey: '生成密钥'
  },
  nationalPortSetting: {
    nationalPortList: '列表',
    index: '序号',
    area: '地区',
    country: '国家',
    city: '城市',
    port: '口岸',
    customsCapacity: '能力',
    Asia: '亚洲',
    Europe: '欧洲',
    Africa: '非洲',
    NorthAmerica: '北美洲',
    SouthAmerica: '南美洲',
    Oceania: '大洋洲'
  },
  idCardManage: {
    idCard: '身份证',
    passport: '护照',
    yes: '是',
    no: '否',
    unChecked: '未审核',
    checked: '已审核',
    failChecked: '审核不通过',
    idCardManage: '身份证管理',
    index: '序号',
    name: '姓名',
    telphone: '电话',
    credentialsType: '证件类型',
    credentialsNo: '证件号',
    isUpload: '是否上传证件',
    status: '审核状态',
    uploadTime: '上传时间',
    checkTime: '审核时间',
    checker: '审核人',
    batchExport: '批量导出',
    selectExport: '勾选导出',
    hExport: 'x-export',
    vExport: 'y-export'
  },
  inExportBillManage: {
    customId: '订单号',
    InExportBillManageList: '列表'
  },
  inExportDataQuery: {
    inExportDataQuery: '数据查询',
    downCompany: '公司',
    expressNum: '快件件数'
  },
  walkProcess: {
    placeholder: '最多输入10个订单号，使用“，”或者“换行符”分割',
    serialNum: '序号',
    waybillNum: '订单号',
    latestTrack: '轨迹'
  },
  clearanceInfoManage: {
    clearanceInfoManage: '订单管理',
    clientId: '公司编号',
    customsId: '公司编号',
    totalLogisticsNo: '订单号',
    subLogisticsNo: '运单号',
    logisticsCode: '物流企业编号',
    logisticsName: '物流企业名称',
    totalLogist: '购物车编号',
    orderId: '订单编号',
    platformCode: '电商平台编码',
    shipping: '发货人名称',
    shippingAddress: '发货人地址',
    consigneeName: '收货人名称',
    consigneeAddress: '收货人地址',
    number: '件数',
    netWeight: '净重',
    nameOfGoods: '货物品名'
  }
};
