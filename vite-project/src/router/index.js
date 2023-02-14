import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/Index.vue'
import Button from "@/views/Button.vue";
import Checkbox from "@/views/Checkbox.vue";
import RadioButton from "@/views/RadioButton.vue";
import Progress from "@/views/Progress.vue";
import Typography from "@/views/Typography.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/button',
            name: 'Button',
            component: Button
        },
        {
            path: '/typography',
            name: 'Typography',
            component: Typography
        },
        {
            path: '/checkbox',
            name: 'Checkbox',
            component: Checkbox
        },
        {
            path: '/radiobutton',
            name: 'Radiobutton',
            component: RadioButton
        },
        {
            path: '/progress',
            name: 'Progress',
            component: Progress
        },

        {
            path: '/input',
            name: 'Input',
            component: Input
        },
    ]
})

export default router