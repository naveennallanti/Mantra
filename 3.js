const cheerio = require('cheerio');
const request = require('request');

let getMetaData=()=>{
request({
    method: 'GET',
    url: 'https://repl.it/languages/nodejs'
}, (err, res, body) => {
    
    if (err) return console.error(err);

    let $ = cheerio.load(body);

    let obj = {
        title: $('h1').text(),
        canonical: $('link[rel="canonical"]').attr('href'),
        description: $('meta[name="description"]').attr('content'),
        og_title: $('meta[property="og:title"]').attr('content'),
        og_url: $('meta[property="og:url"]').attr('content'),
        og_img: $('meta[property="og:image"]').attr('content'),
        og_type: $('meta[property="og:type"]').attr('content'),
      }

    console.log(obj)

});
}

getMetaData();

