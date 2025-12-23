import { useNavigate } from "react-router-dom";
import {BannerEstilizado, Filtro, BannerTexto, PalavraDestaque, TextoSecundario, BotaoContato} from "./Style";

const BannerObras = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate("/", { state: { scrollToContact: true } });
    };

    return (
        <BannerEstilizado>
            <Filtro>
                <BannerTexto>
                    <h1>
                        Nossos {""}
                        <PalavraDestaque>projetos</PalavraDestaque>
                    </h1>
                    <TextoSecundario>
                        Cada casa que construímos é única e reflete a personalidade e os sonhos de nossos clientes.
                        Conheça alguns dos projetos que transformamos em realidade.
                    </TextoSecundario>
                    <BotaoContato type="button" onClick={handleContactClick}>Entre em contato</BotaoContato>
                </BannerTexto>
            </Filtro>
        </BannerEstilizado>
    );
};

export default BannerObras;
