// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

module.exports = {
  EVENT_CUSTOMER_CONNECTED: 'cliente conectado',
  EVENT_CUSTOMER_DISCONNECTED: 'cliente desconectado',
  EVENT_CUSTOMER_MESSAGE: 'mensagem do cliente',
  EVENT_OPERATOR_MESSAGE: 'mensagem do operador',
  EVENT_SENDED_FILE: 'arquivo enviado',
  EVENT_OK_FILE: 'arquivo foi enviando',
  EVENT_SEND_FILE: 'solicitar arquivo',
  EVENT_OPERATOR_REQUESTED: 'operador solicitado',
  EVENT_SYSTEM_ERROR: 'erro no sistema',
  EVENT_DISCONNECT: 'desconectado',
  
  CONTEXT_OPERATOR_REQUEST: 'operator_request',

  OPERATOR_GREETING: "Olá, eu sou um humano. Como posso ajudá-lo?"
};
// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Array.prototype.random = function (length) {
       return this[Math.floor((Math.random()*length))];
 }
var Name_of_Agent = ['Jade', 'Alice', 'Paulo', 'Henrique', 'Patricia', 'Patrick']
 const i = Math.floor(Math.random() * 5);
module.exports = {
  EVENT_CUSTOMER_CONNECTED: 'cliente conectado',
  EVENT_CUSTOMER_DISCONNECTED: 'cliente desconectado',
  EVENT_CUSTOMER_MESSAGE: 'mensagem do cliente',
  EVENT_OPERATOR_MESSAGE: 'mensagem do operador',
  EVENT_SENDED_FILE: 'arquivo enviado',
  EVENT_OK_FILE: 'arquivo foi enviando',
  EVENT_SEND_FILE: 'solicitar arquivo',
  EVENT_OPERATOR_REQUESTED: 'operador solicitado',
  EVENT_SYSTEM_ERROR: 'erro no sistema',
  EVENT_DISCONNECT: 'desconectado',
  
  CONTEXT_OPERATOR_REQUEST: 'operator_request',

  OPERATOR_GREETING: `Olá, `+'${userName}'+`. Me chamo ${Name_of_Agent[i]}, Como posso ajudar?<br><h6>Talvez eu perca a conexão com este tipo de ajuda, e será necessário algumas informações para continuar com está conversa.</h6>
  <h6>E será necessário uma ajuda via email</h6><a href='mailto:elaxigerency@gmail.com'>elaxigerency@gmail.com</a><br>
  <img  style="width:170px" src="https://firebasestorage.googleapis.com/v0/b/forty-1a729.appspot.com/o/assets%2F5%20Sem%20T%C3%ADtulo_20220511211357.png?alt=media&token=33abdfeb-29e2-4021-8f4d-bae7612a8037" alt="Elaxi logo" ="image/png, image/jpeg"">
  `
};
