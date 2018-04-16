import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const activeRule = resolve => require(['@/components/page/Febactivity/activeRule.vue'], resolve)
const helpMe = resolve => require(['@/components/page/Febactivity/helpMe.vue'], resolve)
const helpSuccess = resolve => require(['@/components/page/Febactivity/helpSuccess.vue'], resolve)

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/fixevent/2',
            query: { parent: '' },
            name: 'ActiveRule',
            component: activeRule
        },
        {
            path: '/fixevent/2/helpMe',
            query: { parent: '', phone: '' },
            name: 'helpMe',
            component: helpMe
        },
        {
            path: '/fixevent/2/helpSuccess',
            query: { parent: '' },
            name: 'helpSuccess',
            component: helpSuccess
        }
    ]
})