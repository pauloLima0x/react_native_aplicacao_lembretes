import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function App() {

  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [contatos, setContatos] = useState ([]);

useEffect(() => {
   console.log(contatos);
}, [contatos]);


  // Captura o nome do contato.

  const capturarNome = (nome) => {
    setNome(nome)

  };
  
  // Captura o número do contato. 

  const capturarNumero = (numero) => {
  setNumero(numero)
  };

  // Adiciona o nome e o número do contato na lista de contatos e mostra no log do console.

  const adicionarContato = () => {

    setNome(nome)
     setContatos (contatos => [...contatos, nome] )
     setContatos (contatos => [...contatos, numero] )
   
  };



  return (
  
    <View style={styles.telaPrincipalView}>
      <View style={styles.contatoView}>
        <TextInput placeholder="Insira o nome do contato..." style={styles.contatoInputText}
          value={nome} onChangeText={capturarNome}/>
        <TextInput placeholder="Insira o número de telefone..." style={styles.contatoInputText} 
         value={numero} onChangeText={capturarNumero} />
        <Button title="+" onPress={adicionarContato} />
      </View>
    </View>
  );
  }
       
   

  const styles = StyleSheet.create({
    telaPrincipalView: {
    padding: 50
    },
    contatoView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: "center",
    top: 80
  },
    contatoInputText: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 4,
    bottom: 21
    }     
    });
