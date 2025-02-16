import {createApp} from 'vue'
import 'vant/lib/index.css';
import App from './App.vue'
import Vant from 'vant';


const app = createApp(App);
app.use(Vant);
app.mount('#app');
