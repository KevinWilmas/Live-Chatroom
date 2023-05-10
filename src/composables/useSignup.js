import { ref } from 'vue'
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const error = ref(null)
// const isPending = ref(false)

const signup = async (email, password, displayName) => {
  error.value = null
  // isPending.value = true

  try {
    // const res = await projectAuth.createUserWithEmailAndPassword(auth, email, password)
    const res = await createUserWithEmailAndPassword(auth, email, password)
    if (!res) {
      throw new Error('Could not complete the signup')
    }
    await res.user.updateProfile(displayName)
    error.value = null

    return res

    console.log(res.user)
    // error.value = null
    // isPending.value = false
  } catch (err) {
    console.log(err.message)
    error.value = err.message
    // isPending.value = false
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup

// import { ref } from 'vue'
// import { projectAuth } from '../firebase/config'

// const error = ref(null)

// const signup = async (email, password, displayName) => {
//   error.value = null
//   try {
//     const res = await projectAuth.createUserWithEmailAndPassword(email, password)
//     if (!res) {
//       throw new Error('Could not complete the signup')
//     }
//     console.log(res.user)
//   } catch (err) {
//     console.log(err.message)
//     error.value = err.message
//   }
// }

// const useSignup = () => {
//   return { error, signup }
// }

// export default useSignup
