import { Environment } from '@ovh-ux/manager-config';
import { MESSAGES_CONTAINER_NAME } from './edit.constant';
import { PCI_HDS_ADDON } from '../project.constants';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('pci.projects.project.edit', {
    url: '/edit',
    views: {
      contentTab: 'pciProjectEdit',
    },
    resolve: {
      breadcrumb: /* @ngInject */ ($translate) =>
        $translate.instant('pci_projects_project_parameters'),

      cart: /* @ngInject */ (orderCart, hds) => {
        if (hds.option && !hds.isCertifiedProject) {
          return orderCart
            .createNewCart(
              Environment.getUser().ovhSubsidiary,
              hds.option.planCode,
            )
            .then((cart) => orderCart.assignCart(cart.cartId).then(() => cart));
        }

        return null;
      },

      hds: /* @ngInject */ (
        hdsProjectOption,
        isCertifiedHdsProject,
        isHdsAvailable,
        isValidForHdsCertification,
        isValidHdsSupportLevel,
      ) => {
        return {
          isAvailable: isHdsAvailable,
          isCertifiedProject: isCertifiedHdsProject,
          isValidForCertification: isValidForHdsCertification,
          isValidSupportLevel: isValidHdsSupportLevel,
          option: hdsProjectOption,
        };
      },

      hdsProjectOption: /* @ngInject */ ($http, projectId) =>
        $http
          .get(`/order/cartServiceOption/cloud/${projectId}`)
          .then(({ data: options }) =>
            options.find(({ planCode }) =>
              planCode.match(`^${PCI_HDS_ADDON.planCodeScope}`),
            ),
          ),

      isCertifiedHdsProject: /* @ngInject */ (
        $http,
        isValidForHdsCertification,
        projectId,
        OvhApiCloudProject,
      ) => {
        if (isValidForHdsCertification) {
          return OvhApiCloudProject.ServiceInfos()
            .v6()
            .get({
              serviceName: projectId,
            })
            .$promise.then((info) =>
              $http
                .get(`/services/${info.serviceId}/options`)
                .then(
                  ({ data: options }) =>
                    options.find(
                      ({ billing, resource }) =>
                        billing.plan.code.match(
                          `^${PCI_HDS_ADDON.planCodeScope}`,
                        ) &&
                        resource.product.name ===
                          PCI_HDS_ADDON.certifiedProject,
                    ) !== undefined,
                ),
            );
        }
        return false;
      },

      isValidForHdsCertification: /* @ngInject */ (hdsProjectOption) =>
        hdsProjectOption !== undefined,

      onUpdate: /* @ngInject */ (
        $state,
        $timeout,
        $translate,
        CucCloudMessage,
      ) => () =>
        $state
          .reload()
          // We need a digest so message can be displayed
          .then(() =>
            $timeout(() =>
              CucCloudMessage.success(
                $translate.instant('pci_projects_project_edit_update_success'),
                MESSAGES_CONTAINER_NAME,
              ),
            ),
          ),

      setDefault: /* @ngInject */ (PciProjectsService) => (projectId) =>
        PciProjectsService.setAsDefaultProject(projectId),

      summary: /* @ngInject */ (cart, project, orderCart, hds) => {
        if (cart) {
          const priceMode = hds.option.prices.find(({ capacities }) =>
            capacities.includes('renew'),
          );

          return orderCart
            .addOptionToCart(project.project_id, {
              cartId: cart.cartId,
              duration: priceMode.duration,
              planCode: hds.option.planCode,
              pricingMode: priceMode.pricingMode,
              quantity: 1,
            })
            .then(() => orderCart.getSummary(cart.cartId));
        }

        return null;
      },

      unFavProject: /* @ngInject */ (PciProjectsService) => () =>
        PciProjectsService.removeDefaultProject(),
    },
  });
};
