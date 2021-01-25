import dateRange from './dateRange/billingDateRange.directive';

const moduleName = 'Billing.directives';
angular
  .module(moduleName, ['pascalprecht.translate'])
  .directive('billingDateRange', dateRange);

export default moduleName;
