# AuTo SMS VIVO 💚

Bem-vindo ao repositório AuTo SMS VIVO 💚!

## Como Funciona

Este repositório contém um exemplo de código em JavaScript para fazer solicitações à API da Vivo para envio de SMS. O código utiliza a biblioteca Axios para fazer as solicitações HTTP. Certifique-se de substituir as variáveis `apiKey` e `apiSecret` pelas suas credenciais da API.

```javascript
// Importe a biblioteca para fazer solicitações HTTP (por exemplo, 'axios')
const axios = require('axios');

// Defina as credenciais da API
const apiKey = 'SUA_CHAVE_DE_API';
const apiSecret = 'SEU_SEGREDO_DE_API';

// Configure a URL da API de consulta de SMS
const apiUrl = 'https://api.vivo.com.br/sms';

// Faça uma solicitação GET para a API
axios.get(apiUrl, {
  headers: {
    'Authorization': `Bearer ${apiKey}:${apiSecret}`,
  },
})
  .then(response => {
    // Processar a resposta da API
    console.log('Resposta da API:', response.data);
  })
  .catch(error => {
    // Lidar com erros, se houver
    console.error('Erro:', error);
  });
