export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('pci.projects.project.inactive', {
    url: '/inactive',
    views: {
      modal: {
        component: 'pciProjectInactive',
      },
    },
    layout: 'modal',
    params: {
      billingStatus: null,
      projectStatus: null,
      targetProjectId: null,
    },
    resolve: {
      billingStatus: /* @ngInject */ ($transition$) =>
        $transition$.params().billingStatus,
      goBack: /* @ngInject */ ($state) => () =>
        $state.go('pci.projects.project'),
      goToBilling: /* @ngInject */ ($window, billingUrl) => () =>
        $window.location.assign(billingUrl),
      projectStatus: /* @ngInject */ ($transition$) =>
        $transition$.params().projectStatus,
      targetProjectId: /* @ngInject */ ($transition$) =>
        $transition$.params().targetProjectId,
    },
  });
};
