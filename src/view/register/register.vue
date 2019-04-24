<style lang="less">
@import "./register.less";
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card
        icon="log-in"
        title="欢迎注册"
        :bordered="false"
      >
        <div class="form-con">
          <register-form @on-success-valid="handleSubmit"></register-form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import RegisterForm from '_c/register-form'
// import { mapActions } from 'vuex'
import { setToken, getToken } from '@/libs/util'

export default {
  components: {
    RegisterForm
  },
  methods: {
    handleSubmit({ userName, password }) {
      /* const data = { token: '1234' }
      setToken(data.token)
      this.$router.push('/login') */
      this.$api.user.register({ userName, password }).then(res => {
        const token = res.data
        setToken(token)
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style>
</style>