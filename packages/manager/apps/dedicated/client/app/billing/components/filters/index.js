import angular from 'angular';
import renewFrequenceFilter from './renewFrequence';

const moduleName = 'Billing.filters';
angular
  .module(moduleName, ['pascalprecht.translate'])
  .filter('renewFrequence', renewFrequenceFilter);

export default moduleName;
