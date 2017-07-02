import load from '@/utils/loadScript';
import customer from './customer';
import dashboard from './dashboard';


export const routes = [
  {
    path: '/',
    component: load('Index'),
    children: [
      customer(load),
      dashboard(load),
    ],
  },
];

export default VueRouter => new VueRouter({
  routes,
  saveScrollPosition: true,
});
