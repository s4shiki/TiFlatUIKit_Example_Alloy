Ti.API.info("module is =>");
Ti.API.info(Alloy.Globals.tiFlatUI);

showProgressBar();

function showAlertDialog(e) {
  $.flatAlertDialog.show();
}

function showDebug(e) {
  Ti.API.debug(e);
}

function showProgressBar() {
  var interval = setInterval(function() {
    if (100 == $.flatProgressBar.value) {
      $.flatProgressBar.value = 1;
    }
    $.flatProgressBar.value++;
  }, 100);
  $.flatProgressBar.show();
}

function setStepperLabelValue(e) {
  showDebug(e);
  $.stepperLabel.text = e.value;
}

$.index.open();
