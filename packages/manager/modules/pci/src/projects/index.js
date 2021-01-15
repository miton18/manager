import angular from 'angular';
import '@uirouter/angularjs';
import 'oclazyload';
import '@ovh-ux/ng-ovh-feature-flipping';

const moduleName = 'ovhManagerPciProjectsLazyLoading';

angular
  .module(moduleName, ['ui.router', 'oc.lazyLoad', 'ngOvhFeatureFlipping'])
  .config(
    /* @ngInject */ ($stateProvider) => {
      $stateProvider.state('pci.projects.**', {
        url: '/projects',
        lazyLoad: ($transition$) => {
          return import('./projects.module').then((mod) => {
            const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
            return $ocLazyLoad.inject(mod.default || mod);
          });
        },
      });
    },
  );
export default moduleName;
