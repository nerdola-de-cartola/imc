import Click from '../../public/scripts/script'

export default function Home() {
    return (
        <html>
                <head>
                    <title>Descubra seu IMC</title>
                    <link rel="stylesheet" href="styles/style.css"></link>
                </head>
                <body>
                    <div id="all">
                        <main>
                            <div id="div_input">
                                <h1>Descubra seu IMC</h1>

                                <label>Peso:<input type="number" id="weight_input" placeholder="kg"></input></label>
                                <label>Altura:<input type="number" id="height_input" placeholder="m"></input></label>
                                <input type="button" value="Calcular" id="calculate_button" onClick={Click}></input>
                            </div>

                            <div id="div_results">
                            </div>

                        </main>
                    </div>
                </body>
                <script src="scripts/script.js"></script>
            </html>
    )
}

function Footer() {
    <footer>
        <dl id="credits">
            <dt>Desenvolvedor</dt> <dd id="dev"><a href="https://twitter.com/MatheusLMP5772">Matheus Lucas</a></dd>
            <dt>Ideia original</dt> <dd id="creator"><a href="https://github.com/camilalves13/imc">Camila Alves</a></dd>
            <dt>Dono</dt> <dd id="owner"><a href="https://twitter.com/magonlice">Alice Macêdo</a></dd> 
        </dl>
    </footer>
}