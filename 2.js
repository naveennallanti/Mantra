var localStorage = require('localStorage');
var axios = require('axios');

let fetch_cached=()=>{
  if(!localStorage.getItem('sampleData')){
    axios.get('http://time.jsontest.com').then(resp => {
    localStorage.setItem('sampleData',resp.data)
});
  }else{
    localStorage.getItem('sampleData')
  }
}

fetch_cached();
