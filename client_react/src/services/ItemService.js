import axios from 'axios';

var  socket = null;
const BASE_URL = 'http://localhost:3300';

export {getItems, getItem, createItem, updateItem, deleteItem};

function getItems() {
  const url = `${BASE_URL}/items`;
  return axios.get(url, { headers: { Authorization: `${getAccessToken()}` }}).then((response) => response.data);
}

function getItem(taskId) {
  const url = `${BASE_URL}/items/`+taskId;
  return axios.get(url, { headers: { Authorization: `${getAccessToken()}` }}).then((response) => response.data);
}

function createItem(dataTask){
    const url = `${BASE_URL}/items`;
    return axios.post(url, dataTask, { headers: { Authorization: `${getAccessToken()}` }}).then(response => response.data);
 }

 function updateItem(taskId, dataTask){
    const url = `${BASE_URL}/items/`+taskId;
    return axios.put(url, dataTask, { headers: { Authorization: `${getAccessToken()}` }}).then(response => response.data);
 }

 function deleteItem(taskId){
    const url = `${BASE_URL}/items/`+taskId;
    return axios.delete(url, { headers: { Authorization: `${getAccessToken()}` }}).then(response => response.data);
 }

function getAccessToken() {
  return localStorage.getItem("ID_TOKEN");
}
