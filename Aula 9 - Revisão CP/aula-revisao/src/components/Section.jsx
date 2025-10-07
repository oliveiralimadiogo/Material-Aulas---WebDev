export default function Section({children, titulo = "Titulo"}){
    return(
        <div>
            <h1>{titulo}</h1>
            {children}
        </div>
    )
}