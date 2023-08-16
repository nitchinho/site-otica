import './topo.css'

export default function Top() {
    return (
        <header>

            <div className = "limitar-secao">
                <img className="topo-logo" src ='assets/logo.png'   alt="logotipo" />

                <nav className="topo-links">
                    <a href='#produtos'>PRODUTOS</a>
                    <a href='#sobre'>SOBRE</a>
                    <a href='#contato'>CONTATO</a>
                </nav>
            </div>

        </header>
    )
}