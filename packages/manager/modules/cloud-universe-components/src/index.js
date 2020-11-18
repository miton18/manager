import angular from 'angular';

import cucAdvancedOptions from './cui/advanced-options';
import cucAutofocus from './autofocus';
import cucAutoSelect from './autoselect';
import cucBytes from './bytes';
import cucConfig from './config';
import cucContracts from './contracts';
import cucFeatureAvailability from './featureAvailability';
import cucHelper from './helper';
import cucMessage from './message';
import cucMomentFormat from './moment';
import cucNavigation from './navigation';
import cucOrderedHash from './orderedHash';
import cucPoll from './poll';
import cucPrice from './price';
import cucRegion from './region';
import cucProducts from './products';
import cucSshKeyMin from './sshKeyMin';
import cucUserPref from './user-pref';
import cucVrack from './vrack';
import cui from './cui';

const moduleName = 'ngOvhCloudUniverseComponents';

angular.module(moduleName, [
  cui,
  cucAdvancedOptions,
  cucAutofocus,
  cucAutoSelect,
  cucBytes,
  cucConfig,
  cucContracts,
  cucFeatureAvailability,
  cucHelper,
  cucMessage,
  cucMomentFormat,
  cucNavigation,
  cucOrderedHash,
  cucRegion,
  cucPoll,
  cucPrice,
  cucProducts,
  cucSshKeyMin,
  cucUserPref,
  cucVrack,
  cui,
]);

export default moduleName;
