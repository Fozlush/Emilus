import { 
  DashboardOutlined,
  PlusCircleOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const extraNavTree = [{
  key: 'extra',
    path: `${APP_PREFIX_PATH}/pages`,
    title: 'sidenav.pages',
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: 'extra-pages-list',
        path: `${APP_PREFIX_PATH}/pages/user-list`,
        title: 'sidenav.pages.userlist',
        icon: '',
        breadcrumb: true,
        submenu: []
      },
    ]
}]

const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'home',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...extraNavTree
]

export default navigationConfig;
