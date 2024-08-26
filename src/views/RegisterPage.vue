<template>
  <div class="max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4">Registrazione</h2>
    <form @submit.prevent="register">
      <div class="mb-4">
        <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border rounded" required />
      </div>
      <div class="mb-4">
        <input v-model="password" type="password" placeholder="Password" class="w-full p-2 border rounded" required />
      </div>
      <button class="w-full bg-green-500 text-white p-2 rounded">Registrati</button>
    </form>
    <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        // Registra un nuovo utente con Firebase
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        // Reindirizza l'utente alla pagina di login
        this.$router.push('/login');
      } catch (error) {
        this.error = "Errore durante la registrazione. Riprovare.";
        console.error("Errore di registrazione:", error);
      }
    },
  },
};
</script>
