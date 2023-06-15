import { 
  DashboardOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const mainNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'sidenav.main',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/home`,
      title: 'sidenav.dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'customers',
      path: `${APP_PREFIX_PATH}/customers`,
      title: 'sidenav.main.customers',
      icon: '',
      breadcrumb: false,
      submenu: [
        {
          key: 'customers-list',
          path: `${APP_PREFIX_PATH}/customers/customers-list`,
          title: 'sidenav.main.customers.customers-list',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'customers-groups',
          path: `${APP_PREFIX_PATH}/customers/customers-groups`,
          title: 'sidenav.main.customers.customers-groups',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
  ]
}]

const systemsNavTree = [{
  key: 'systems',
  path: `${APP_PREFIX_PATH}/systems`,
  title: 'sidenav.systems',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'settings',
      path: `${APP_PREFIX_PATH}/systems/settings`,
      title: 'sidenav.systems.settings',
      icon: '',
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const navigationConfig = [
  ...mainNavTree,
  ...systemsNavTree
]

export default navigationConfig;
