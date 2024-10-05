
const sectionOne = Vue.createApp({
    data(){
        return {
            name:"event",
            number:0,
            age:0,
        }
    },
    methods:{
        increase(){
            this.number++;
        },
        decrease(){
            this.number--;
        },
        call(msg = "default"){
            return msg;
        },
        test(event){
            return event;
        },
        target(e){
            console.log(e); 
        }
    },
    computed:{
        show(){
            if(this.number > 0){
                return `${this.number} is plus `;
            }else if(this.number <0){
                return `${this.number} is minus`;
            }else{
                return this.number + " is zero";
            };
        },
        

    }
}).mount("#sectionOne");