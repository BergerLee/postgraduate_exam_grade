import {createApp} from 'vue'
import './style.css'
import 'vant/lib/index.css';
import App from './App.vue'
import Vant from 'vant';

// import '../src/assets/js/app-1.0.2.js'
// import '../src/assets/js/vant.min.js'
// import '../src/assets/js/vendors.js'
// import '../src/assets/js/vue.min.js'

const app = createApp(App);
app.use(Vant);
app.mount('#app');
