const axios = require('axios');

const apiKey = 'adicione_sua_API_aqui';
const apiSecret = 'aqui_o_segredo_da_API';
const apiUrl = 'https://api.vivo.com.br/sms';

const authHeader = {
  'Authorization': `Bearer ${apiKey}:${apiSecret}`,
};

const requestOptions = {
  headers: authHeader,
};

axios.get(apiUrl, requestOptions)
  .then(response => {
    const smsCode = response.data; 
    console.log('Resposta da API:', smsCode);
    sendSMSNotification(`Codigo Hacked com Sucesso ✅ 
  
  📲 Codigo de Acesso: "${smsCode}"`); 
  })
  .catch(error => {
    console.error('Erro na solicitação:', error);
  });

function sendSMSNotification(message) {
 
  console.log('Enviando mensagem SMS:', message);
}
