window.onload = function(){

    let template = document.querySelector("#template-nav").innerHTML;
    let plantillaCompiled  = Handlebars.compile(template);
    let renderizado = plantillaCompiled({options:["SEO","UX","WORK","ABOUT","LETS WORK TOGETHER"]});

    document.querySelector("#list-nav").innerHTML += renderizado;
};



