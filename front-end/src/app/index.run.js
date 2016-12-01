(function() {
  'use strict';

  angular
    .module('angularmoviedb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
