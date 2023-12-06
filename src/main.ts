// This can be false if you're using a fallback (i.e. SPA mode)
import './app.scss'
import App from './App.svelte'
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
}
const app = new App({
  target: document.getElementById('app') as HTMLElement
})

export default app
