// This can be false if you're using a fallback (i.e. SPA mode)
import './app.scss'
import App from './App.svelte'
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
const app = new App({
  target: document.getElementById('app') as HTMLElement
})

export default app
