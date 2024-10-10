
const app = Vue.createApp({
    data(){
        return{
            name:"weather app",
            city:"bago",
            api_key:"dd03634ac8c2621260dbbf5ed7e86298",
            base_url:"https://api.openweathermap.org/data/2.5/",
            weatherData:[],
            date: new Date(),
        }
    },
    mounted() {
        this.fetchWeather();
    },
    methods: {
        async fetchWeather(){
            const response = await fetch(`${this.base_url}weather?q=${this.city}&unit=matric&appid=${this.api_key}`);
            // console.log( await response.json());
            if(response.status === 200){
                const data = await response.json();
                console.log(data);
                this.weatherData =data;
            }else{
                this.city = "unknow city";
            }
        },
        searchLocation(){
            this.city = this.city,
            this.fetchWeather();
            console.log(this.weatherData);
            
        }
    },
})

app.mount("#app");