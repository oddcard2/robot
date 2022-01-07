import { Options, Vue } from 'vue-class-component';
import RemoteControlComponent from '@/components/RemoteControl/index.vue';
import AdminLayout from '@/layouts/Admin/index.vue';

@Options({
    components: {
        RemoteControlComponent,
        AdminLayout,
    },
})
export default class Dashboard extends Vue {}
