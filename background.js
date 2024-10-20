// Block all direct access to Shorts URLs.
browser.webRequest.onBeforeRequest.addListener(
  (details) => ({ cancel: true }),
  { urls: ["*://www.youtube.com/shorts/*"] },
  ["blocking"]
);
