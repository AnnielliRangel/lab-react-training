function Greetings({lang, children}){
    let greetings =[
        {lang: "de", greetings:"Hallo"},
        {lang: "fr", greetings: "Bonjour"},
        {lang: "en", greetings: "Hello"},
        {lang: "es", greetings:"Hola"}
    ]
    

    return (
       
        <div className="divGreeting">
        {greetings.filter(el=>el.lang === lang)[0].greetings+" "+ children}


       

        </div>
    )
}

export default Greetings;

//{lang==="de"? <p>Hallo {children}</p>: <p>Bonjour {children} </p> }