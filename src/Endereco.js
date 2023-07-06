import React, { useState } from 'react';

function Endereco() {
  const [endereco, setEndereco] = useState('');
  const [dadosEndereco, setDadosEndereco] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(endereco ==""){
  alert("error favor preencher o campo" )
}else{
    try{
      const response =await fetch(`https://viacep.com.br/ws/${endereco}/json/`)
      const data = await response.json();
      setDadosEndereco(data)
    }catch(error){
      alert("error favor " + error)
    }
  }  
  };

  return (
    <div>
      <div className='Cep'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={endereco}
            placeholder='Digite seu Cep
            ex:"24365187'
            onChange={(e) => setEndereco(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
        {dadosEndereco && (
          <div className="end">
            <h2>Seu Cep:</h2>
            <p>{dadosEndereco.cep}</p>
            <h2>Logradouro:</h2>
            <p>{dadosEndereco.logradouro}</p>
            <h2>Bairro:</h2>
            <p>{dadosEndereco.bairro}</p>
            <h2>Localidade:</h2>
            <p>{dadosEndereco.localidade}</p>
            <h2>UF:</h2>
            <p>{dadosEndereco.uf}</p>
            <h2>IBGE:</h2>
            <p>{dadosEndereco.ibge}</p>
            <h2>GIA:</h2>
            <p>{dadosEndereco.gia}</p>
            <h2>SIAFI:</h2>
            <p>{dadosEndereco.siafi}</p>
            <h2>DDD:</h2>
            <p>{dadosEndereco.ddd}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Endereco;