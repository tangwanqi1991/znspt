import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Group from '@/components/Group'
import Sswh from '@/components/Sswh'
import News from '@/components/News'
import NewsContents from '@/components/NewsContents'
import Recruit from '@/components/Recruit'
import Telents from '@/components/Telents'
import Expansion from '@/components/Expansion'
import Recruit_details from '@/components/Recruit_details'
import Contact from '@/components/Contact'
import Project from '@/components/Project'
import ProjectContents from '@/components/ProjectContents'
import Elite from '@/components/Elite'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/Group',
            name: 'Group',
            component: Group

        },
        {
            path: '/Sswh',
            name: 'Sswh',
            component: Sswh

        },
        {
            path: '/News',
            name: 'News',
            component: News

        },
        {
            path: '/NewsContents',
            name: 'NewsContents',
            component: NewsContents

        },
        {
            path: '/Recruit',
            name: 'Recruit',
            component: Recruit

        },
        {
            path: '/Telents',
            name: 'Telents',
            component: Telents
        },
        {
            path: '/Expansion',
            name: 'Expansion',
            component: Expansion
        },

        {
            path: '/Recruit_details/:rczpbtId',
            name: 'Recruit_details',
            component: Recruit_details
        },
        {
            path: '/Contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/Project',
            name: 'Project',
            component: Project
        },
        {
            path: '/ProjectContents/:xmbtId',
            name: 'ProjectContents',
            component: ProjectContents
        },
        {
           path: '/Elite',
           name: 'Elite',
           component: Elite
        },

    ]
});
