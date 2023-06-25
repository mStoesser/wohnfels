import './component/wohnfels-rentals.js'
import './component/wohnfels-rentals-detail.js'
import './component/wohnfels-start.js'
import './component/wohnfels-impressum.js'
import './component/wohnfels-contact.js'
import './component/wohnfels-overus.js'
import {Router} from "@vaadin/router";

// import {Router} from './lib/vaadin-router.js'


const outlet = document.querySelector('output');
const router = new Router(outlet);




router.setRoutes([
    { path: '/', component: 'wohnfels-start' },
    { path: '/rentals/', component: 'wohnfels-rentals' },
    { path: '/rentals/:flatId', component: 'wohnfels-rentals-detail' },
    { path: '/contact', component: 'wohnfels-contact' },
    { path: '/impressum', component: 'wohnfels-impressum' },

]);



export { router};
