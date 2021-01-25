const moduleName = 'Billing.services';

angular.module(moduleName, []);

// TODO : remove this when ovh-angular-apiv7 npm install is fixed
angular.module(moduleName).service('BillingBill', ($resource) =>
  $resource(
    '/me/bill/:billId',
    {
      billId: '@billId',
    },
    {
      getById: {
        serviceType: 'apiv7',
        method: 'GET',
        isArray: true,
      },
    },
  ),
);

export default moduleName;
