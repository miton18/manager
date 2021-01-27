import movements from './movements/billing-payment-vouchers-movements.module';
import routing from './billing-payment-voucher.routes';
import service from './billing-vouchers.service';

const moduleName = 'ovhManagerBillingPaymentVouchers';

angular
  .module(moduleName, [movements, 'ui.router'])
  .config(routing)
  .service('BillingVouchers', service)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
