
import './App.css';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

/*##########IMPORT'S DESCARTADOS###########*/
// import logo from './logo.svg';
// import { useState } from 'react';
// import styled from 'styled-components';
// import { useReducer, useEffect } from 'react';
// import ReactDOM from 'react-dom';


///////////////////////////
// functions e components
///////////////////////////

/////////////////////// Main Function  ///////////////////////
function App() {
  
  function validateName(value) {
    let error;
    if (value === '') {
      error = 'Nome tem que ser preenchido';
    }
    return error;
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

/*##########FUNÇÕES DESCARTADAS###########*/
  
  // function RegistraValores() {
    
  //   const usuario = {
  //     name: this.state.name
  //   };

  //   axios.post(`http://localhost:8081/registro_U`, 
  //   { usuario }
  //    )
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })

  //   alert('vou registrar');
  // }

  
/*##########FUNÇÕES VALIDAS###########*/
 
  function RegistroExemplo(value) {

    const usuario = {
      usuario_cpf: value.cpf,
      usuario_nome: value.nome,
      usuario_tipo: value.tipo,
      usuario_localizacao: value.localizacao,
      usuario_senha: value.senha,
      usuario_status: value.status
    };

    axios.post(`http://localhost:8081/registro_U`, 
    { usuario }
     )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    alert('vou registrar');
  }



/*##########RETORNO PARA O HTML###########*/
  return (
    <section className="box">
      <div className="App">
        <header className="App-header">
          <div className="App-logo">

          </div>
        </header>
        
        <div className="body">
        <h3>Cadastro</h3>
        <Formik
          initialValues={{
               cpf: '',
               nome: '',
               tipo: '',
               localizacao: '',
               senha: '',
               status: '',
          }}
          onSubmit={async (values) => {
               await new Promise((r) => setTimeout(r, 500));
               alert(JSON.stringify(values, null, 2));
               RegistroExemplo(values);
           }}
        >
        {({ errors, touched, isValidating }) => (
            <Form>
              <label htmlFor="cpf">CPF: </label>
              <Field 
                id="cpf" 
                name="cpf"
                validate={validateName} 
                placeholder="Digite seu CPF..."
              />
              {errors.cpf && touched.cpf && <div>{errors.cpf}</div>}
              <br />
              <label htmlFor="tipo">Tipo</label>
              <Field
                id="tipo"
                name="tipo"
                placeholder="Qual seu tipo de usuario..."
                type="tipo"
                validate={validateName}
              />
              {errors.tipo && touched.tipo && <div>{errors.tipo}</div>}
              <br />
              <label htmlFor="localizacao">Localizacao</label>
              <Field
                id="localizacao"
                name="localizacao"
                placeholder="Digite sua localização..."
                type="text"
              />
              <br />
              <label htmlFor="status">Status</label>
              <Field
                id="status"
                name="status"
                placeholder="Digite seu status..."
                type="text"
              />
              <br />
              <label htmlFor="nome">E-mail</label>
              <Field 
                id="nome" 
                name="nome"
                validate={validateEmail}
                placeholder="Digite seu E-mail" 
              />
              {errors.nome && touched.nome ? <div>{errors.nome}</div> : null}
              <br />
              <label htmlFor="senha">Senha</label>
              <Field
                id="senha"
                name="senha"
                placeholder="Digite sua senha..."
                type="password"
              />
              <br />
              <button type="submit">Submit</button>
            </Form>
        )}
      </Formik>
      </div>

      </div>
    </section>
  );
}

export default App;
