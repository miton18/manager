export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('pci.projects.project', {
    url: '/{projectId:[0-9a-zA-Z]{32}}',
    views: {
      '@pci': 'pciProject',
    },
    redirectTo: (transition) => {
      const projectPromise = transition.injector().getAsync('project');
      return projectPromise.then((project) => {
        if (project.status === 'creating') {
          // for specifying options of redirectTo attribute
          // we need to return a TargetState which is accessible
          // through router.stateService.target of transition object
          return transition.router.stateService.target(
            'pci.projects.project.creating',
            transition.params(),
            {
              location: false,
            },
          );
        }

        return null;
      });
    },
    resolve: {
      goToProjectInactive: ($state, projectId) => (project) =>
        $state.go('pci.projects.project.inactive', {
          billingStatus: project.billingStatus,
          projectId,
          projectStatus: project.projectStatus,
          targetProjectId: project.project_id,
        }),
      projectId: /* @ngInject */ ($transition$) =>
        $transition$.params().projectId,
      project: /* @ngInject */ (OvhApiCloudProject, projectId) =>
        OvhApiCloudProject.v6().get({
          serviceName: projectId,
        }).$promise,
      breadcrumb: /* @ngInject */ (project) =>
        project.status !== 'creating' ? project.description : null,
      user: /* @ngInject */ (SessionService) => SessionService.getUser(),
    },
  });
};
