import "./styles/_cookieconsent.scss";

let cc = {};

cc.init = function init() {
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#ffffff",
        "text": "#414141"
      },
      "button": {
        "background": "#D818A5"
      }
    },
    "content": {
      "message": "This website uses cookies to ensure you get the best experience."
    },
    onInitialise: function (status) {
      var didConsent = this.hasConsented();
      if (didConsent) {
        gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
      else {
        gtag('consent', 'update', {
          'analytics_storage': 'denied'
        });
      }
      },
    onStatusChange: function(status) {
      var didConsent = this.hasConsented();
      if (didConsent) {
        gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
      else {
        gtag('consent', 'update', {
          'analytics_storage': 'denied'
        });
      }
    },
    "theme": "classic",
    "position": "bottom",
    "type": "opt-in"
  });
}

export { cc as cc };