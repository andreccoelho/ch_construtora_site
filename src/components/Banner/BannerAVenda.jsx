import { useNavigate } from "react-router-dom";
import {BannerEstilizado, Filtro, BannerTexto, PalavraDestaque, TextoSecundario, BotaoContato} from "./Style";

const BannerAVenda = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate("/", { state: { scrollToContact: true } });
    };

    return (
        <BannerEstilizado>
            <Filtro>
                <BannerTexto>
                    <h1>
                        Casas {""}
                        <PalavraDestaque>à venda</PalavraDestaque>
                    </h1>
                    <TextoSecundario>
                        Imóveis disponíveis para venda, construídos pela CH Construtora.
                        Corretores e interessados podem falar direto com a nossa equipe para receber fotos, plantas e condições.
                    </TextoSecundario>
                    <BotaoContato type="button" onClick={handleContactClick}>Entre em contato</BotaoContato>
                </BannerTexto>
            </Filtro>
        </BannerEstilizado>
    );
};

export default BannerAVenda;
