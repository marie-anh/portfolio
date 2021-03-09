import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



const app = createApp(App)

app.mixin({
    methods: {
        scrollTop: function () {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    },
})

app.directive('paralax', {
    mounted(el, binding) {
        var element = el,
            bindingEl = binding;
        element.style.transition = 'transform 0.05s ease';
        window.addEventListener('scroll', function paralax() {
            if (window.innerWidth > 380) {
                element.style.transform = 'translateY(' + (window.pageYOffset - element.offsetTop) * (0.03 * bindingEl.value) + 'px)';
            }
        })
    }
})

app.directive('scroll', {
    mounted(el) {
        el.classList.add('hide');
        var element = el;
        var offsetScroll;
        if(window.innerWidth < 380){
            offsetScroll = 100;
        } else {
            offsetScroll = 300
        }
        window.addEventListener('scroll', () => {
            if ((window.pageYOffset + window.innerHeight) > element.offsetTop + offsetScroll) {
                element.classList.remove('hide');
            }
            if ((window.pageYOffset + window.innerHeight) < element.offsetTop - 50) {
                element.classList.add('hide');
            }
        })
    }
})

app.use(router)

app.mount('#app')