import { createRouter, createWebHashHistory } from 'vue-router';
import { PublicRoutes } from './PublicRoutes';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...PublicRoutes],
});

export default router;
