<template>
  <div class="max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <form @submit.prevent="login">
      <div class="mb-4">
        <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border rounded" required />
      </div>
      <div class="mb-4">
        <input v-model="password" type="password" placeholder="Password" class="w-full p-2 border rounded" required />
      </div>
      <button class="w-full bg-blue-500 text-white p-2 rounded">Login</button>
    </form>
    <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase"; // Assicurati di importare correttamente l'istanza di Firebase

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        // Autenticazione utente tramite Firebase
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);

        // Ottieni il token ID dell'utente
        const idToken = await userCredential.user.getIdToken();

        // Invia l'ID token al backend per la verifica
        const response = await fetch('http://localhost:3000/auth/verify-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ idToken }),
        });

        if (response.ok) {
          // Se il token è verificato correttamente, reindirizza l'utente alla lista delle task
          this.$router.push('/');
        } else {
          throw new Error('Errore nella verifica del token');
        }
      } catch (error) {
        this.error = "Credenziali non valide o errore nella verifica. Riprovare.";
        console.error("Errore di autenticazione:", error);
      }
    },
  },
};
</script>
