var imageUrl = BL.getSettings().preview_image_url[0];

if (BL.isTablet()) {
  var imageUrl = BL.getSettings().preview_image_url_tablet[0];
}

$('.digital-coupon').css('background', '#313131 url(' + imageUrl + ') no-repeat center 0px');

$('.digital-coupon').on('click', function() {
  BL.displayApp(APP.appId);
});