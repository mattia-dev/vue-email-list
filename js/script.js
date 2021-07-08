Vue.config.devtools = true;

new Vue(
    {
        el: "#app",
        data: {
            emailList: []
        },
        created() {
            this.getEmailList();
        },
        methods: {
            getEmailList: function() {
                for (let i = 0; i < 10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                        this.emailList.push(response.data.response);
                    }); 
                }; 
            },
        }
    }
)