export default {
  VITE_SERVER_HOST: import.meta.env.VITE_SERVER_HOST,
  VITE_OAUTH_REDIRECT_HOSTNAME:
    import.meta.env.VITE_OAUTH_REDIRECT_HOSTNAME ?? 'http://automation.ecomtrix.me',
  VITE_FIREBASE_CONFIG:
    import.meta.env.VITE_FIREBASE_CONFIG ??
    '{"apiKey":"AIzaSyCmn-v4KPcGiXeftvoTnUbmxQNHYZT-vNc","authDomain":"boltzy-watchparty.firebaseapp.com","pro>
  VITE_STRIPE_PUBLIC_KEY:
    import.meta.env.VITE_STRIPE_PUBLIC_KEY ??
    'pk_live_eVMbIifj5lnvgBleBCRaCv4E00aeXQkPxQ',
  VITE_RECAPTCHA_SITE_KEY:
    import.meta.env.VITE_RECAPTCHA_SITE_KEY ??
    '6LeDGP4UAAAAAGYZZenyU-3fRdhL3p0BaBmiK9mM',
  VITE_FIREBASE_SIGNIN_METHODS: 'google,email',
  NODE_ENV: import.meta.env.DEV ? 'development' : 'production',
};


