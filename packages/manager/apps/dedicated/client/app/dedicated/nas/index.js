import angular from 'angular';
import '@uirouter/angularjs';
import 'oclazyload';

const moduleName = 'ovhManagerNASLazyLoading';

angular
  .module(moduleName, ['ui.router', 'oc.lazyLoad'])
  .config(
    /* @ngInject */ ($stateProvider) => {
      $stateProvider.state('app.networks.nas', {
        url: '/nas',
        templateUrl: 'dedicated/nas/dashboard/nas.html',
        controller: 'NasCtrl',
        abstract: true,
        reloadOnSearch: false,
        translations: { value: ['.'], format: 'json' },
      });

      $stateProvider.state('app.networks.nas.index.**', {
        url: '',
        lazyLoad: ($transition$) => {
          const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');

          return import('./nas.module').then((mod) =>
            $ocLazyLoad.inject(mod.default || mod),
          );
        },
      });
    },
  )
  .run(/* @ngTranslationsInject:json ./dashboard/translations */);

export default moduleName;
