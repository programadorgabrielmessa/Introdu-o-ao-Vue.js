const app = Vue.createApp({
    data() {
        return {
            tarefas: [],
            novoItem: ""
        }
    },
    methods: {
        adicionarItem() {
            if (this.novoItem.trim() === "") {
                alert("Por favor, insira uma tarefa!");
                return;
            }
            this.tarefas.push({
                texto: this.novoItem,
                concluida: false
            });
            this.novoItem = "";
        },
        marcarComoConcluida(index) {
            this.tarefas[index].concluida = !this.tarefas[index].concluida;
        },
        removerItem(index) {
            this.tarefas.splice(index, 1);
        }
    }
});

app.mount("#app");