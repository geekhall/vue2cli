export const mixin = {
    methods: {
        showName(){
            // alert(this.name)
            console.log(this.name)
        }
    },
    mounted() {
        console.log('mounted')
    },
}

export const hunhe = {
    data(){
        return {
            x: 100,
            y: 200
        }
    }
}