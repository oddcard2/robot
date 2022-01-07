import { Options, Vue } from 'vue-class-component';
import { mapGetters } from 'vuex';
import debounce from "lodash.debounce";

@Options({
    name: 'RemoteControlComponent',
    props: {
        msg: String,
    },
    computed: mapGetters([
        'status',
        'statusLoaded',
        'isModeChanging',
        'hasModeError',
        'isSpeedChanging',
        'hasSpeedError'
    ]),
})
export default class RemoteControl extends Vue {
    public msg!: string;

    private initialized: Boolean = false;
    private speed: number = 50

    private debouncedSetSpeed: any = null;

    created() {
        console.log('created')
        this.debouncedSetSpeed = debounce(value => {
            this.changeSpeed(value);
          }, 1000);
    }

    mounted() {
        console.log('mounted')
        if (!this.initialized) {
            this.speedValue = 50;
            this.initialized = true;
        }
    }

    set speedValue(value: number) {
        this.speed = value
        this.debouncedSetSpeed(value)
    }

    get speedValue() {
        return this.speed
    }

    public getStatus() {
        this.$store.dispatch('getStatus')
    }

    public goForward() {
        this.$store.dispatch('forward')
    }

    public goBackward() {
        this.$store.dispatch('backward')
    }

    public stop() {
        this.$store.dispatch('stop')
    }

    public rotateToLeft() {
        this.$store.dispatch('left')
    }

    public rotateToRight() {
        this.$store.dispatch('right')
    }

    public changeSpeed(value: number) {
        this.$store.dispatch('setSpeed', value)
    }
}
