<template>
    <div class="login">
        <b-card no-body class=" mx-auto vertical-center align-middle overflow-hidden" style="max-width: 540px;" >
            <b-row >
                <b-col md="6">
                    <b-card-img src="https://img.freepik.com/vecteurs-libre/caricature-profil-homme-affaires_18591-58479.jpg?size=338&ext=jpg" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body title="Login" class="login-form ">
                        <b-row>
                        <b-col cols="2">
                             <vue-fontawesome icon="user" size="2" color="black"></vue-fontawesome>
                        </b-col>
                         <b-col cols="10">
                             <b-form-input v-model="name" placeholder="Enter your name"></b-form-input>
                         </b-col>
                        </b-row>
                        <b-row>
                        <b-col cols="2">
                            <vue-fontawesome icon="lock" size="2" color="black"></vue-fontawesome>
                        </b-col>
                        <b-col cols="10">
                            <b-form-input v-model="password" type="password" placeholder="Enter your password"></b-form-input>
                        </b-col>
                        </b-row>
                        <b-row>
                            <b-button></b-button>
                        </b-row>
                        
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>
<script>
export default {
    name : 'Login',
    data() {
      return {
        name: ''
      }
    }
}
</script>
<style lang="scss">
    .login{
        height: calc(100% - 40px);
        .card{
            border: none;
            box-shadow: 0px 0px 32px rgba(39, 31, 31, 0.3);
        }
        .login-form{
            height: 100%;
            text-align: left;
            .card-title{
                text-align: center;
                 margin-bottom: 2rem ;
            }
            .form-control{
                margin-bottom: 1rem ;
            }
        }
    }
    .vertical-center {
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
}
</style>