import { useNavigate } from "react-router-dom";
import {BannerEstilizado, Filtro, BannerTexto, PalavraDestaque, TextoSecundario, BotaoContato} from "./Style";

const BannerSobre = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate("/", { state: { scrollToContact: true } });
    };

    return (
        <BannerEstilizado>
            <Filtro>
                <BannerTexto>
                    <h1>
                        Nossa {""}
                        <PalavraDestaque>HISTÓRIA!</PalavraDestaque>
                    </h1>
                    <TextoSecundario>
                        A CH CONSTRUTORA foi fundada em 2018 com uma missão clara: oferecer aos nossos clientes a melhor
                        experiência em construção de casas. Ao longo de mais de 6 anos de atuação, construímos uma
                        trajetória sólida baseada em três pilares fundamentais: seriedade, inovação e comprometimento
                    </TextoSecundario>
                    <BotaoContato type="button" onClick={handleContactClick}>Entre em contato</BotaoContato>
                </BannerTexto>
            </Filtro>
        </BannerEstilizado>
    );
};

export default BannerSobre;
