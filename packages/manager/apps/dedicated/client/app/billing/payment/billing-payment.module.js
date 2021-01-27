import credits from './credits/billing-credits.module';
import fidelity from './fidelity/billing-fidelity.module';
import method from './method';
import ovhAccount from './ovhAccount/billing-ovhAccount.module';
import refunds from './refunds/billing-refunds.module';
import transactions from './transactions/billing-payment-transactions.module';
import vouchers from './vouchers/billing-payment-voucher.module';

import routing from './billing-payment.routes';

const moduleName = 'ovhManagerBillingPayment';

angular
  .module(moduleName, [
    credits,
    fidelity,
    method,
    ovhAccount,
    refunds,
    transactions,
    'ui.router',
    vouchers,
  ])
  .config(routing)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
