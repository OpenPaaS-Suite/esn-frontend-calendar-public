'use strict';

angular.module('esn.calendar.event-consultation')
  .config(registerI18N)
  .config(enableHtml5);

function enableHtml5($locationProvider) {
  $locationProvider.html5Mode(true);
}

function registerI18N($translateProvider) {
  $translateProvider.translations('en', require('../i18n/en.json'));
  $translateProvider.translations('fr', require('../i18n/fr.json'));
  $translateProvider.translations('ru', require('../i18n/ru.json'));
  $translateProvider.translations('vi', require('../i18n/vi.json'));
  $translateProvider.translations('zh', require('../i18n/zh.json'));
}
