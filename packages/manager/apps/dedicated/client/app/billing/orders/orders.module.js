import retraction from './retraction/retraction.module';
import ordersService from './billing-orders.service';
import ordersServiceApiv7 from './billing-orders-apiv7.service';

import routing from './orders.routing';

const moduleName = 'ovhManagerBillingOrders';

angular
  .module(moduleName, ['ui.router', retraction])
  .config(routing)
  .service('BillingOrders', ordersService)
  .service('BillingOrdersApiv7', ordersServiceApiv7)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
