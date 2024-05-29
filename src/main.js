
const alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Carlos', nota: 7 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Pedro', nota: 4 }
];

  // Função para retornar apenas os alunos com nota maior ou igual a 6
const filtrarAlunosApovados = (alunos) => {
    return alunos.filter(aluno => aluno.nota >= 6);
};

  // Chamando a função e armazenando o resultado
const alunosAprovados = filtrarAlunosApovados(alunos);

console.log(alunosAprovados);