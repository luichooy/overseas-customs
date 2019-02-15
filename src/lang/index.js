import Vue from 'vue';
import VueI18n from 'vue-i18n';
import elemEnLocale from 'element-ui/lib/locale/lang/en';
import elemZhLocale from 'element-ui/lib/locale/lang/zh-CN';
import eleLocale from 'element-ui/lib/locale';
import enLocale from './en';
import zhLocale from './zh';
import { localStorage } from '@/utils/storage';

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
    ...elemEnLocale
  },
  zh: {
    ...zhLocale,
    ...elemZhLocale
  }
};

const lang = (localStorage.getItem('vuex') && localStorage.getItem('vuex').language) || 'zh';
const i18n = new VueI18n({
  locale: lang, // 默认语言
  fallbackLocale: 'zh', // 当某个语言不存在时，提供默认语言zh去处理
  messages // 语言包
});

eleLocale.i18n((key, value) => i18n.t(key, value));

export default i18n;
