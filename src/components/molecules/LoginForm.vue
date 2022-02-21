<template>
  <form novalidate>
    <div class="form-item">
      <label for="email">メールアドレス</label>
      <input
        id="email"
        v-model="email"
        type="text"
        autocomplete="off"
        placeholder="例：hogehoge"
        @focus="resetError"
      >
      <ul class="varidation-errors">
        <li v-if="!validation.email.format">
          メールアドレスの形式が不正です
        </li>
        <li v-if="validation.email.required">
          メールアドレスが入力されていません
        </li>
      </ul>
    </div>
    <div class="form-item">
      <label for="password">パスワード</label>
      <input
        id="password"
        v-model="password"
        type="password"
        autocomplete="off"
        placeholder="例：〇〇"
        @focus="resetError"
      >
      <ul class="validation-errors">
        <li v-if="validation.password.required">
          パスワードが入力されていません
        </li>
      </ul>
    </div>
    <div class="form-actions">
      <Button
        :disabled="disableLoginAction"
        @click="handleClick"
      >
        ログイン
      </Button>
      <p
        v-if="progress"
        class="login-progress"
      >
        ログイン中・・・
      </p>
      <p
        v-if="error"
        class="login-error"
      >
        {{ error }}
      </p>
    </div>
  </form>
</template>
<script>
  import Button from '@/components/atoms/Button'
  const REGEX_EMAIL = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
  const required = val => !val.trim()
  export default {
    name: 'LoginForm',
    data() {
      return {
        email: '',
        password: '',
        progress: false,
        error: ''
      }
    },
    props: {
      onlogin: {
        type: Function,
        required: true
      }
    },
    computed: {
      validation() {
        return {
          email: {
            required: required(this.email),
            format: REGEX_EMAIL.test(this.email)
          },
          password: {
            required: required(this.password)
          }
        }
      }
    },
    valid() {
      const validation = this.validation
      const fields = Object.keys(validation)
      let valid = true
      for(let i = 0; i < fields.length; i++){
        const field = fields[i]
        valid = Object.keys(validation[field])
          .every(key => validation[field][key])
        if(!valid){break}
      }
      return valid
    },
    components: {
      Button
    }
  }
</script>
