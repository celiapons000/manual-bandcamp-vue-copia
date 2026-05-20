const { createApp, ref } = Vue
createApp({
  setup() {
    const tuPrecio = ref('')
    const pais = ref('')
    const direccion = ref('')
    const codigo = ref('')

    function continuar() {
      alert(`Precio: ${tuPrecio.value}€ | País: ${pais.value}`)
    }

    return { tuPrecio, pais, direccion, codigo, continuar }
  }
}).mount('#app')