import angular from 'angular';
import '@uirouter/angularjs';
import 'oclazyload';

const moduleName = 'ovhManagerDedicatedServerLazyLoading';

angular
  .module(moduleName, ['ui.router', 'oc.lazyLoad'])
  .config(
    /* @ngInject */ ($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state('app.dedicated-server', {
          url: '/server',
          template: '<div ui-view></div>',
          redirectTo: 'app.dedicated-server.index',
        })
        .state('app.dedicated-server.index.**', {
          url: '',
        lazyLoad: ($transition$) => {
          const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');

          return import('./servers.module').then((mod) =>
            $ocLazyLoad.inject(mod.default || mod),
          );
        },
      })
        .state('app.dedicated-server.server.**', {
          url: '/:productId',
        lazyLoad: ($transition$) => {
          const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');

          return import('./details/index.js').then((mod) =>
            $ocLazyLoad.inject(mod.default || mod),
          );
        },
      });

      $urlRouterProvider.when(/^\/configuration\/server/, () => {
        window.location.href = window.location.href.replace(
          '/configuration/server',
          '/server',
        );
      });

      $urlRouterProvider.when(/^\/configuration\/servers/, () => {
        window.location.href = window.location.href.replace(
          '/configuration/servers',
          '/server',
        );
      });
  },
  )
export default moduleName;
