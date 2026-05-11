window.surVisVersion = '0.1.0';

$(document).ready(function () {
  page.init();
  selectors.toggleSelector('keywords', 'type:rule-based');
  selectors.toggleSelector('keywords', 'type:deep-learning');
  selectors.toggleSelector('keywords', 'type:simulation');
  selectors.toggleSelector('keywords', 'type:survey');
  page.update(true);
  selectors.readQueryFromUrl();
});

$(window).resize(function () {
  timeline.updateTimeline();
});

const electron = typeof require !== 'undefined';