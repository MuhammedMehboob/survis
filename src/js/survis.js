window.surVisVersion = '0.1.0';

$(document).ready(function () {
  page.init();
  page.update(true);
  selectors.readQueryFromUrl();
  setTimeout(function() {
    selectors.toggleSelector('keywords', 'lidar');
    selectors.toggleSelector('keywords', 'agdor');
    selectors.toggleSelector('keywords', 'crfor');
    page.update(true);
  }, 500);
});

$(window).resize(function () {
  timeline.updateTimeline();
});

const electron = typeof require !== 'undefined';