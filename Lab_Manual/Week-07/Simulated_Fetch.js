function fakeFetch(data, delay=1200){
    return new Promise((res)=> setTimeout(()=>res(data), delay));
}

fakeFetch({name:'Server data'})
    .then(d=> { document.body.append('Got: ' + JSON.stringify(d)); });
