import Aluno from "/Aluno.js";
import ViewerError from "/ViewerError.js";

//------------------------------------------------------------------------//

export default class ViewerAluno {

  constructor(ctrl) {
    this.ctrl = ctrl;
    this.divNavegar  = this.obterElemento('divNavegar'); 
    this.divComandos = this.obterElemento('divComandos'); 
    this.divDialogo  = this.obterElemento('divDialogo');

    this.btPrimeiro  = this.obterElemento('btPrimeiro');
    this.btAnterior  = this.obterElemento('btAnterior');
    this.btProximo   = this.obterElemento('btProximo');
    this.btUltimo    = this.obterElemento('btUltimo');

    this.btIncluir   = this.obterElemento('btIncluir');
    this.btExcluir   = this.obterElemento('btExcluir');
    this.btAlterar   = this.obterElemento('btAlterar');
    this.btSair      = this.obterElemento('btSair');

    this.btOk        = this.obterElemento('btOk');
    this.btCancelar  = this.obterElemento('btCancelar');

    this.tfMatricula = this.obterElemento('tfMatricula');
    this.tfCpf       = this.obterElemento('tfCpf');
    this.tfNome      = this.obterElemento('tfNome');
    this.tfEmail     = this.obterElemento('tfEmail');
    this.tfTelefone  = this.obterElemento('tfTelefone');
      
    this.btIncluir.onclick = editando; 
    this.btAlterar.onclick = editando; 

    this.btOk.onclick       = apresentando; 
    this.btCancelar.onclick = apresentando; 
  }

//------------------------------------------------------------------------//

  obterElemento(idElemento) {
    let elemento = document.getElementById(idElemento);
    if(elemento == null) 
      throw new ViewerError("Não encontrei um elemento com id '" + idElemento + "'");
    // Adicionando o atributo 'DONO' no elemento do Viewer. Isso permitirá
    // que o elemento guarde a referência para o objeto Viewer que o contém.
    elemento.DONO = this;
    return elemento;
  }

  
  apresentando() { 
    alert(this);
    this.DONO.tfCpf.disabled = true;
    this.DONO.divNavegar.hidden = false;
    this.DONO.divComandos.hidden = false;
    this.DONO.divDialogo.hidden = true; 
    this.DONO.tfMatricula.disabled = true;
    this.DONO.tfCpf.disabled = true;
    this.DONO.tfNome.disabled = true;
    this.DONO.tfEmail.disabled = true;
    this.DONO.tfTelefone.disabled = true;
  }

  //------------------------------------------------------------------------//

  navegar() {
    apresentando();
  }

}

//------------------------------------------------------------------------//
// CALLBACKs para os Botões
//------------------------------------------------------------------------//

function editando() { 
  // o 'this' desta função é o botão. Para recuperarmos o Viewer,
  // estamos usando o atributo DONO, colocado no método obterElemento
  this.DONO.divNavegar.hidden = true;
  this.DONO.divComandos.hidden = true;
  this.DONO.divDialogo.hidden = false; 
  this.DONO.tfMatricula.disabled = false;
  this.DONO.tfCpf.disabled = false;
  this.DONO.tfNome.disabled = false;
  this.DONO.tfEmail.disabled = false;
  this.DONO.tfTelefone.disabled = false;
}

//------------------------------------------------------------------------//

function apresentando() { 
  this.DONO.tfCpf.disabled = true;
  this.DONO.divNavegar.hidden = false;
  this.DONO.divComandos.hidden = false;
  this.DONO.divDialogo.hidden = true; 
  this.DONO.tfMatricula.disabled = true;
  this.DONO.tfCpf.disabled = true;
  this.DONO.tfNome.disabled = true;
  this.DONO.tfEmail.disabled = true;
  this.DONO.tfTelefone.disabled = true;
}

//------------------------------------------------------------------------//
