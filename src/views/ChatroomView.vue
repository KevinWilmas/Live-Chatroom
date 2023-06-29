<template>
  <div class="container">
    <NavbarComponent />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script setup>
import getUser from '../composables/getUser.js'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
// import { ref } from 'vue'

const router = useRouter()
const { user } = getUser()

// if the user value is ever null, redirect to welcome screen
watch(user, () => {
  if (!user.value) {
    router.push({ name: 'WelcomeView' })
  }
})
</script>

<style scoped></style>
