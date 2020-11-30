import get from 'lodash/get';

import { RESET_CONFIRMATION_INPUT, WORKER_NODE_POLICIES } from './constants';

export default class kubernetesResetCtrl {
  /* @ngInject */
  constructor($translate, OvhApiCloudProjectKube, Kubernetes) {
    this.$translate = $translate;
    this.OvhApiCloudProjectKube = OvhApiCloudProjectKube;
    this.RESET_CONFIRMATION_INPUT = RESET_CONFIRMATION_INPUT;
    this.WORKER_NODE_POLICIES = WORKER_NODE_POLICIES;
    this.Kubernetes = Kubernetes;
  }

  $onInit() {
    this.isReseting = false;

    this.model = {
      version: null,
      workerNodesPolicy: WORKER_NODE_POLICIES.DELETE,
      privateNetwork: null,
    };
    this.availablePrivateNetworks = this.Kubernetes.constructor.getAvailablePrivateNetworks(
      this.privateNetworks,
      this.cluster.region,
    );
  }

  /**
   * reset
   *
   * @memberof kubernetesResetCtrl
   */
  reset() {
    this.isReseting = true;
    const options = {
      version: this.model.version,
      workerNodesPolicy: this.model.workerNodesPolicy,
      privateNetworkId: this.model.privateNetwork
        ? this.model.privateNetwork.clusterRegion.openstackId
        : null,
    };
    return this.OvhApiCloudProjectKube.v6()
      .reset(
        {
          serviceName: this.projectId,
          kubeId: this.kubeId,
        },
        options,
      )
      .$promise.then(() =>
        this.goBack(
          this.$translate.instant(
            'pci_projects_project_kubernetes_service_reset_success',
          ),
        ),
      )
      .catch((error) =>
        this.goBack(
          this.$translate.instant(
            'pci_projects_project_kubernetes_service_reset_error',
            {
              message: get(error, 'data.message'),
            },
          ),
          'error',
        ),
      );
  }
}
