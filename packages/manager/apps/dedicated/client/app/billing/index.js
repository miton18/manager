import angular from 'angular';
import '@uirouter/angularjs';
import 'oclazyload';

const moduleName = 'ovhManagerDedicatedBillingLazyLoading';

angular.module(moduleName, ['ui.router', 'oc.lazyLoad']).config(
  /* @ngInject */ ($stateProvider) => {
    const lazyLoad = ($transition$) => {
      const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
      return import(/* webpackChunkName: "billing" */ './billing.module')
        .then((mod) => {
          console.log(mod);
          return $ocLazyLoad.inject(mod.default || mod);
        })
        .catch(console.log);
    };

    $stateProvider.state('app.account.billing.**', {
      url: '/billing',
      lazyLoad,
    });
  },
);

export default moduleName;
