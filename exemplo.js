class Aluno {
  /*
   * Construtor da classe Aluno. Recebe dois parâmetros para inicializar
   * os atributos cpf e nome.
   */
  constructor(c, n) {
    this.cpf = c;
    this.nome = n;  
    console.log('Um novo objeto Aluno foi criado!');
  }
  //----------------------------//
  exibir() {
    alert("Executando o método exibir do aluno");    
    alert("this = " + this + "\ncpf = " + this.cpf + "\nnome = " + this.nome);
  }
  //----------------------------//
}
var aluno1 = new Aluno('123.346.678-09','José da Silva');
var aluno2 = new Aluno('987.654.321-09','Maria de Souza');
aluno1.exibir();
aluno2.exibir();


















