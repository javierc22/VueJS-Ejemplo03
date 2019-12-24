const app = new Vue ({
    el: '#app',
    data: {
        title: 'Vue JS - Ejemplo 3: Propiedades computadas',
        contador: 0
    },
    computed: {
        invertido(){
            return this.title.split('').reverse().join('');
        },
        color(){
            return {
                'bg-success': this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador < 20,
                'bg-danger': this.contador >= 20
            }
        }
    }
});