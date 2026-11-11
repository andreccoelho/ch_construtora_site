// Fonte única de dados dos condomínios e das casas do site.
//
// Cada casa tem um `status`:
//   - "vendido": casa já entregue/vendida. Aparece na aba PROJETOS (vitrine) com o selo "Vendido".
//   - "a-venda": casa disponível. Aparece APENAS na aba CASAS À VENDA (voltada a corretores).
// Para mudar uma casa de aba basta trocar o `status`.
//
// Ordem padrão das fotos de cada casa:
//   fachada → sala → cozinha → área gourmet → quartos/banheiros → planta (sempre a última).

export const STATUS = {
    VENDIDO: "vendido",
    A_VENDA: "a-venda",
};

const IMG = "/imagens/projetos";

// Monta ["…/01.jpg", "…/02.jpg", …] para as pastas numeradas na ordem lógica.
const sequencia = (pasta, quantidade) =>
    Array.from({length: quantidade}, (_, i) => `${IMG}/${pasta}/${String(i + 1).padStart(2, "0")}.jpg`);

const lista = (pasta, nomes) => nomes.map((nome) => `${IMG}/${pasta}/${nome}`);

export const CONDOMINIOS = {
    "villa-blanca-i": {
        titulo: "Villa Blanca I",
        imagem: "/imagens/vilablancaI.png",
        descricao:
            "O Condomínio Villa Blanca, no Recreio dos Bandeirantes, oferece um estilo de vida sofisticado, com casas de arquitetura moderna, acabamentos de alto padrão e ambientes amplos. O condomínio conta com lazer completo — piscinas, quadras, área gourmet, churrasqueiras e espaços infantis — além de segurança 24h e controle de acesso. Localizado em uma área privilegiada, fica próximo a shoppings, escolas, serviços e praias. É a opção ideal para quem busca luxo, conforto e exclusividade.",
    },
    "villa-blanca-ii": {
        titulo: "Villa Blanca II",
        imagem: "/imagens/vilablancaII.png",
        descricao:
            "O Villa Blanca II Residence é um condomínio fechado que oferece elegância, conforto, segurança e exclusividade, ideal tanto para morar quanto para investir. Moderno e sofisticado, conta com a opção de personalização pelo proprietário. O condomínio dispõe de lazer privativo e ampla área comum, incluindo quadra poliesportiva, quadra de areia, pista de skate, churrasqueiras, parque infantil, piscinas, academia, brinquedoteca e áreas externas de convivência. É o lugar perfeito para viver momentos especiais com família e amigos.",
    },
    "sagrada-familia": {
        titulo: "Sagrada Família",
        imagem: "/imagens/sagradafamilia.png",
        descricao:
            "O condomínio Sagrada Família, localizado no Recreio dos Bandeirantes, é um empreendimento de alto padrão que reúne luxo, privacidade e excelente localização. Com arquitetura sofisticada, oferece ambientes amplos e elegantes. Possui estrutura completa, incluindo piscina, academia, spa, área de lazer e jardins planejados, garantindo conforto e momentos especiais. Conta ainda com segurança 24h, proporcionando tranquilidade, exclusividade e qualidade de vida em cada detalhe.",
    },
    "villa-blanca-iv": {
        titulo: "Villa Blanca IV",
        imagem: `${IMG}/villa-blanca-iv/lote-22/01.jpg`,
        descricao:
            "O Villa Blanca IV reúne casas de arquitetura contemporânea, com ambientes integrados, acabamentos de alto padrão e áreas de lazer privativas. Um condomínio pensado para quem busca conforto, segurança e exclusividade.",
    },
    "bothanica-park": {
        titulo: "Bothanica Park",
        imagem: `${IMG}/bothanica-park/lote-06/01.jpg`,
        descricao:
            "O Bothanica Park é um condomínio de casas de alto padrão, com projetos modernos, ambientes amplos e integração com áreas gourmet e terraços. Conforto, segurança e qualidade de vida em cada detalhe.",
    },
};

export const CASAS = [
    // ───────────── Já vendidas (vitrine em "Projetos") ─────────────
    {
        id: "sagrada-familia-lote-6",
        condominio: "sagrada-familia",
        titulo: "Lote 6",
        status: STATUS.VENDIDO,
        descricao:
            "Residência de 3 pavimentos, projetada para oferecer conforto, funcionalidade e sofisticação. No térreo, conta com garagem, sala de estar, sala de jantar, lavabo, cozinha, lavanderia, uma suíte completa, além de área gourmet integrada à piscina. No primeiro pavimento, possui uma suíte máster com closet e varanda, além de duas suítes adicionais. No segundo pavimento, dispõe de área coberta com lavabo e área descoberta, ideal para lazer ao ar livre.",
        fotos: lista("projeto-alanderson", [
            "Alan-SF-01.jpg",
            "Alan-SF-02.jpg",
            "Alan-SF-03.jpg",
            "Alan-SF-04.jpg",
            "Alan-SF-06.jpg",
            "Alan-SF-07.jpg",
            "Pergolado-frontal.jpg",
            "Pergolado-frontal-2.jpg",
        ]),
    },
    {
        id: "villa-blanca-ii-lote-55",
        condominio: "villa-blanca-ii",
        titulo: "Lote 55",
        status: STATUS.VENDIDO,
        descricao:
            "Casa de 4 pavimentos, com projeto moderno e ambientes amplos. Subsolo com garagem, lavabo, lavanderia e depósito. Térreo com living integrado, sala de estar com pé-direito duplo, sala de jantar, lavabo social, cozinha com área gourmet, piscina e lavabo externo. Primeiro pavimento com três suítes, duas com closet e varanda. Segundo pavimento com ambiente versátil com banheiro, varanda e área descoberta.",
        fotos: lista("projeto-alessandra", [
            "A_1---Photo.jpg",
            "A_1---Photo---Copia.jpg",
            "A_1---Photo---Copia-(2).jpg",
            "A_2---Foto.jpg",
            "A_3---Foto.jpg",
            "A_4---Foto.jpg",
            "A_5---Foto.jpg",
            "A_6---Foto.jpg",
            "A_7---Foto.jpg",
            "A_8---Foto.jpg",
            "A_10---Foto.jpg",
        ]),
    },
    {
        id: "villa-blanca-ii-lote-8",
        condominio: "villa-blanca-ii",
        titulo: "Lote 8",
        status: STATUS.VENDIDO,
        descricao:
            "Residência de 3 pavimentos, com arquitetura contemporânea e layout funcional. Térreo com garagem, sala de estar com pé-direito duplo, sala de jantar, lavabo social, cozinha, despensa, lavanderia, área gourmet, piscina e banheiro externo. Primeiro pavimento com três suítes com closet e varanda. Segundo pavimento com ambiente multifuncional com banheiro e área descoberta.",
        fotos: lista("projeto-carla", [
            "FC_1---Photo.jpg",
            "FC_2---Foto.jpg",
            "FC_3---Foto.jpg",
            "FC_4---Foto.jpg",
            "FC_5---Foto.jpg",
            "FC_6---Foto.jpg",
            "FC_7---Foto.jpg",
            "FC_8---Foto.jpg",
        ]),
    },
    {
        id: "villa-blanca-i-lote-43",
        condominio: "villa-blanca-i",
        titulo: "Lote 43",
        status: STATUS.VENDIDO,
        descricao:
            "Residência de 4 pavimentos, com projeto sofisticado e foco em lazer e exclusividade. Subsolo com garagem, elevador e banheiro. Térreo com área gourmet, lavabo externo, sala de jantar, lavabo social, cozinha, piscina e uma suíte completa. Primeiro pavimento com três suítes, sendo uma com varanda. Segundo pavimento com suíte máster com closet, banheiro e área de spa com hidromassagem, além de varanda com espaço gourmet.",
        // fachada → sala/jantar → cozinha → área gourmet/piscina → sala de jogos → quartos → banheiros → lavanderia
        fotos: [
            ...lista("Projeto-Fabio-e-Raniele/Fachada", ["f_1---Photo.jpg", "f_2---Foto.jpg", "f_3---Foto.jpg"]),
            ...lista("Projeto-Fabio-e-Raniele/Interiores-projeto-Fabio-e-Raniele", [
                "FR_23---Foto.jpg", "FR_24---Foto.jpg", "FR_26---Foto.jpg", "FR_21---Foto.jpg", "FR_25---Foto.jpg", // sala e jantar
                "FR_27---Foto.jpg", "FR_28---Foto.jpg", "FR_42---Foto.jpg", "FR_44---Foto.jpg",
                "FR_45---Foto.jpg", "FR_46---Foto.jpg", "FR_29---Foto.jpg", "FR_41---Foto.jpg", // cozinha
            ]),
            ...lista("Projeto-Fabio-e-Raniele/Fachada", [
                "f_7---Foto.jpg", "f_6---Foto.jpg", "f_5---Foto.jpg", "f_4---Foto.jpg", "f_8---Foto.jpg", "f_9---Foto.jpg", // piscina e área gourmet
            ]),
            ...lista("Projeto-Fabio-e-Raniele/Interiores-projeto-Fabio-e-Raniele", [
                "FR_31---Foto.jpg", // cozinha gourmet
                "FR_71---Foto.jpg", "FR_73---Foto.jpg", // sala de jogos
                "FR_72---Foto.jpg", "FR_74---Foto.jpg", "FR_77---Foto.jpg", "FR_75---Foto.jpg", "FR_76---Foto.jpg", "FR_39---Foto.jpg", // quartos
                "FR_33---Foto.jpg", "FR_34---Foto.jpg", "FR_40---Foto.jpg", "FR_47---Foto.jpg", "FR_48---Foto.jpg", "FR_50---Foto.jpg", // banheiros
                "FR_35---Foto.jpg", "FR_36---Foto.jpg", "FR_78---Foto.jpg", "FR_79---Foto.jpg", // lavanderia
            ]),
        ],
    },
    {
        id: "villa-blanca-i-lote-3",
        condominio: "villa-blanca-i",
        titulo: "Lote 3",
        status: STATUS.VENDIDO,
        descricao:
            "Casa de 3 pavimentos, com ambientes amplos e bem distribuídos. Térreo com garagem, sala de estar com pé-direito duplo, sala de jantar, lavabo social, cozinha, lavanderia, área gourmet, piscina e banheiro externo. Primeiro pavimento com três suítes, sendo uma suíte máster, todas com closet e varanda. Segundo pavimento com ambiente com banheiro que pode ser usado como quarto, sala de jogos ou cinema, além de área descoberta.",
        fotos: lista("projeto-ch", [
            "VB_21.jpg",
            "VB_28.jpg",
            "VB_27.jpg",
            "VB_26.jpg",
            "VB_29.jpg",
            "VB_30.jpg",
            "VB_31.jpg",
            "VB_32.jpg",
            "VB_33.jpg",
            "VB_34.jpg",
            "VB_35.jpg",
            "VB_36.jpg",
            "VB_37.jpg",
            "VB_38.jpg",
            "VB_39.jpg",
        ]),
    },

    // ───────────── Disponíveis (aba "Casas à venda") ─────────────
    {
        id: "bothanica-park-lote-6",
        condominio: "bothanica-park",
        titulo: "Lote 6",
        status: STATUS.A_VENDA,
        descricao:
            "Residência de arquitetura contemporânea, com sala de estar ampla e integrada, sala de jantar, cozinha, área gourmet com churrasqueira, terraço com vista panorâmica e suítes com acabamentos em madeira e porcelanato. Plantas dos pavimentos disponíveis nas últimas fotos.",
        fotos: sequencia("bothanica-park/lote-06", 24),
    },
    {
        id: "villa-blanca-iv-lote-13",
        condominio: "villa-blanca-iv",
        titulo: "Lote 13",
        status: STATUS.A_VENDA,
        descricao:
            "Casa de arquitetura moderna, com garagem coberta, salas integradas, cozinha com ilha, área gourmet com piscina e TV externa, e suítes com closet. Planta do pavimento térreo disponível na última foto.",
        fotos: sequencia("villa-blanca-iv/lote-13", 14),
    },
    {
        id: "villa-blanca-iv-lote-22",
        condominio: "villa-blanca-iv",
        titulo: "Lote 22",
        status: STATUS.A_VENDA,
        descricao:
            "Residência de design contemporâneo, com sala de estar e jantar integradas, cozinha com ilha e bancada, espaço de cinema e lazer, academia, terraço, suítes com closet e banheiros em acabamento de alto padrão.",
        fotos: sequencia("villa-blanca-iv/lote-22", 32),
    },
];

export const casasPorStatus = (status) => CASAS.filter((casa) => casa.status === status);

export const casasDoCondominio = (slug, status) =>
    CASAS.filter((casa) => casa.condominio === slug && casa.status === status);

// Condomínios que possuem ao menos uma casa no status informado (na ordem de CONDOMINIOS).
export const condominiosComCasas = (status) =>
    Object.entries(CONDOMINIOS)
        .filter(([slug]) => casasDoCondominio(slug, status).length > 0)
        .map(([slug, dados]) => ({slug, ...dados}));
