import { appRoute } from '../router/routes';

/*
 *   menu数据格式
 *   [
 *     {
 *       path: '/home',
 *       title: 'home',
 *       icon: 'el-icon-home'
 *     },
 *     {
 *       path: '/centuryAllianceModule',
 *       title: 'centuryAllianceModule',
 *       icon: 'el-icon-centuryAllianceModule',
 *       children: [
 *         {
 *           path: '/centuryAllianceModule/index',
 *           title: 'project_index'
 *         }
 *       ]
 *     }
 *   ];
 *
 *
 * */

export default function generateMenu() {
  return appRoute.map(route => {
    if (route.path === '/') {
      // 首页路由特殊处理
      return {
        path: '/home',
        title: route.children[0].meta.title,
        icon: route.children[0].meta.icon
      };
    } else if (route.path === '/port') {
      return {
        path: route.path,
        title: route.meta.title,
        icon: route.meta.icon,
        children: [
          {path: '/port/Asia',title: 'Asia'},
          {path: '/port/Europe',title: 'Europe'},
          {path: '/port/Africa',title: 'Africa'},
          {path: '/port/Oceania',title: 'Oceania'},
          {path: '/port/NorthAmerica',title: 'NorthAmerica'},
          {path: '/port/SouthAmerica',title: 'SouthAmerica'}
        ]
      };
    } else {
      let item = {
        path: route.path,
        title: route.meta.title,
        icon: route.meta.icon
      };
      
      if (route.children && route.children.length) {
        item.children = route.children.map(sub_route => {
          return {
            path: `${route.path}/${sub_route.path}`,
            title: sub_route.meta.title
          };
        });
      }
      return item;
    }
  });
};
