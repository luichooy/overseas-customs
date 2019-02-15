import Vue from 'vue';
import {
  Container,
  Aside,
  Header,
  Row,
  Col,
  Main,
  Menu,
  Submenu,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Button,
  Tooltip,
  Card,
  Table,
  TableColumn,
  Pagination,
  Form,
  FormItem,
  Input,
  Radio,
  RadioButton,
  RadioGroup,
  Select,
  Option,
  DatePicker,
  Tabs,
  TabPane,
  Popover,
  Loading,
  MessageBox,
  Message,
  Notification,
  Dialog
} from 'element-ui';

Vue.use(Container);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Row);
Vue.use(Col);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Button);
Vue.use(Tooltip);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioButton);
Vue.use(RadioGroup);
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Popover);
Vue.use(Dialog);
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
// Vue.prototype.$ELEMENT = {size: 'small'};
