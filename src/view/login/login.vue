<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card
        icon="log-in"
        title="欢迎登录"
        :bordered="false"
      >
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p
            class="login-tip"
            @click="clickGoRegister"
          >还没有账号？去注册</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
// import { mapActions } from 'vuex'
import { setToken, getToken } from '@/libs/util'

export default {
  components: {
    LoginForm
  },
  methods: {
    clickGoRegister() {
      // this.$router.push('/register')
      this.$router.push({
        name: 'register'
      })
    },
    handleSubmit({ userName, password }) {
      /* const data = { token: '1234' }
       setToken(data.token)
      this.$router.push('/shop') */
      this.$api.user.login({ userName, password }).then(res => {
        const token = res.data
        setToken(token)
      })
      /* this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: this.$config.homeName
          })
        })
      }) */
    }
  }
}
</script>

<style>
</style>