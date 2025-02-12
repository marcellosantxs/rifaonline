function calcularDias() {
    const dataInicio = new Date("2024-07-14");
    const hoje = new Date();
    const diferenca = hoje - dataInicio;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    document.getElementById("contador").textContent = dias + " dias";
}

calcularDias();