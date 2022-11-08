function Random({min, max}){



    return(
        <div className="divRandom">
        <p>Random value between {min} and {max} => {Math.floor(Math.random() * (max - min + 1) + min)}</p>


        </div>

    )
}

export default Random