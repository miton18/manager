import { DedicatedServer } from '@ovh-ux/manager-models';
import { NEW_RANGE } from './server.constants';

import Ola from './interfaces/ola.class';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('app.dedicated.server', {
    url: '/configuration/server/:productId',
    component: 'dedicatedServer',
    reloadOnSearch: false,
    redirectTo: 'app.dedicated.server.dashboard',
    resolve: {
      isLegacy: /* @ngInject */ (server) =>
        !NEW_RANGE.PATTERN.test(server.commercialRange),
      interfaces: /* @ngInject */ (
        serverName,
        DedicatedServerInterfacesService,
      ) => DedicatedServerInterfacesService.getInterfaces(serverName),
      ola: /* @ngInject */ ($stateParams, interfaces, specifications) =>
        new Ola({
          interfaces,
          ...specifications.ola,
          ...$stateParams,
        }),
      schema: /* @ngInject */ (OvhApiDedicatedServer) =>
        OvhApiDedicatedServer.v6().schema().$promise,
      server: /* @ngInject */ (Server, serverName) =>
        Server.getSelected(serverName).then(
          (swsResponse) => new DedicatedServer(swsResponse),
        ),
      serverName: /* @ngInject */ ($transition$) =>
        $transition$.params().productId,
      serviceInfos: /* @ngInject */ ($stateParams, Server) =>
        Server.getServiceInfos($stateParams.productId),
      specifications: /* @ngInject */ (serverName, Server) =>
        Server.getBandwidth(serverName),
      user: /* @ngInject */ (currentUser) => currentUser,
      atTrack: /* @ngInject */ (atInternet) => (name) =>
        atInternet.trackClick({
          name,
          type: 'action',
          chapter1: 'dedicated',
        }),
      worldPart: /* @ngInject */ (coreConfig) => coreConfig.getRegion(),

      breadcrumb: /* @ngInject */ (server) => server.displayName,

      bringYourOwnImage: /* @ngInject */ ($q, $stateParams, Server) =>
        Server.getBringYourOwnImage($stateParams.productId).catch((error) => {
          if (error.status === 404) {
            return null;
          }

          return $q.reject(error);
        }),
    },
  });
};
