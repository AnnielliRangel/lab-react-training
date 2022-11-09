function Rating({children}){

    let nstart = Math.round(children)
    

    let rating = [
        {nota: 1, rat: "★☆☆☆☆"},
        {nota: 2, rat: "★★☆☆☆"},
        {nota: 3, rat: "★★★☆☆"},
        {nota: 4, rat: "★★★★☆"},
        {nota: 5, rat: "★★★★★"},
    ]
    
    return(
        <div>
            {rating.map((el)=> el.nota === nstart)
            }
        </div>

    )
}

export default Rating