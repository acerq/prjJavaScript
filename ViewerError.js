
export default class ViewerError extends Error {
  
    // Construtor da Classe ViewerError
    constructor(txtDeErro) {
      super(txtDeErro); // Chamando o construtor da superclasse (Error)
      alert(txtDeErro + '\n\n' + this.stack);
    }
}