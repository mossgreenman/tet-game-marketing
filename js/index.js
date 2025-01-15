const appUrls = {
  android: "https://play.google.com/store/apps/details?id=com.mossgreenman.tetGame",
  ios: "https://apps.apple.com/us/app/vietnam-tet-drop-merge/id6740452449",
};

/**
 * redirect to url
 * @param url refer to url to redirect
 */
function viewAppOnStore(store) {
  let appUrl = appUrls[store];
  window.open(appUrl, "_blank");
}
