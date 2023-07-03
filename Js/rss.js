var url = 'https://rss.tecmundo.com.br/feed';
    $.ajax({ url:"https://api.rss2json.com/v1/api.json?rss_url=" + url,type: 'GET',
        success: function (data) {
            objeto_json = eval(data);
    
            var frase = "";
            for (i = 0; i < objeto_json.items.length; i++){
                frase += '<div class="card mb-2 p-3 mb-3 bg-body rounded " style="max-width: 100%;">'
                frase += '<div class="row">'
                frase += '<div class="col-md-12 ">'
                frase += '<img src="'+ objeto_json.items[i].enclosure.link +'" class="img-fluid rounded-start" alt="imgNoticia">'
                frase += '<h2> <a class="card-title" href="' + objeto_json.items[i].link + '">'+ objeto_json.items[i].title +'</a></h2>' 
                frase += '<div class="col-md-12">'
                frase += '<div class="card-body">'
                frase += '<p>' + objeto_json.items[i].pubDate + '</p>'
                frase += '</div>'
                frase += '</div>'
                frase += '</div>'
                frase += '</div>'
                 frase += '</div>'
            };
            $("#box").html(frase);

            var gallery = "";
            for (i = 0; i < objeto_json.items.length; i++){
                gallery += '<div class="col-3">'
                gallery += '<a class="image-link" href="'+objeto_json.items[i].enclosure.link+'" data-lightbox=´spanGallery` ><img src="'+objeto_json.items[i].enclosure.link+'" class="img-thumbnail"  alt="image-'+[i]+'"></a>'
                gallery += '</div>'
            
            }

            $("#spanGallery").html(gallery)

            var car1 = '<img src="'+ objeto_json.items[1].enclosure.link +'" class="img-fluid rounded" alt="imgNoticia">'
            car1 += '<div class="carousel-caption">'
            car1 += '<a class="card-title" href="'+ objeto_json.items[1].link +'">'+ objeto_json.items[1].title + '</a>'
            car1 += '</div>'

    
    }});
