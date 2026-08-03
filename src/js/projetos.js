const projetos = [
    {
        classe: "projeto ativo",
        titulo: "Projeto Berserk",
        link: "https://antonioprolucas.github.io/prototipo-Berserk-retrogame-tela-de-selecao/",
        imagem: "./src/img/projects/projeto-Berserk.png",
        alt: "Protótipo retrô game de Berserk",
        descricao: "Prototipo de uma tela de seleção de personagens estilo retrô game do manga/anime Berserk, feitos com as minhas próprias pixel arts (referencia: \"Dungeons & Dragons de SNES\"). Feito em HTML, CSS e Javascript"
    },
    {
        classe: "projeto ativo",
        titulo: "SMW: Reimagined",
        link: "https://antonioprolucas.github.io/SuperMarioWorld-Remake/",
        imagem: "./src/img/projects/Projeto-SMW.png",
        alt: "Projeto SMW: Reimagined",
        descricao: "Estudo técnico focado em game feel, física 2D e animação desenhada à mão, inspirado em jogos clássicos de plataforma do SNES."
    },
    {
        classe: "projeto ativo",
        titulo: "Projeto GTA",
        link: "https://antonioprolucas.github.io/projeto-gta/",
        imagem: "./src/img/projects/Projeto_GTA.png",
        alt: "Projeto landing page GTA",
        descricao: "Página landing page simulando tela de compra do GTA V. Feito com HTML, CSS e Javascript"
    },
    {
        classe: "projeto",
        titulo: "Projeto AluraFlix",
        link: "https://codepen.io/AntonioPROLucas/pen/WNPMQyM",
        imagem: "./src/img/projects/Meu_projeto_Imersão-Dev_Aluraflix.png",
        alt: "Projeto da imersão dev da Alura - Lista de filmes",
        descricao: "Projeto de fundo dinâmico onde você pode adicionar uma imagem de seus filmes e series preferidos. Feito no codepen com HTML, CSS e Javascript"
    },
    {
        classe: "projeto",
        titulo: "Projeto One Piece",
        link: "https://antonioprolucas.github.io/projeto-one-piece-final/",
        imagem: "./src/img/projects/Projeto_One-Piece.png",
        alt: "Projeto One Piece",
        descricao: "Página de descrição dos personagens do anime One Piece! Feito com HTML, CSS e Javascript"
    },
    {
        classe: "projeto",
        titulo: "Projeto X-MEN",
        link: "https://antonioprolucas.github.io/x-men-szpc/",
        imagem: "./src/img/projects/Projeto_X-MEN.png",
        alt: "Protótipo arcade game X-MEN",
        descricao: "Prototipo de uma tela de seleção de personagens estilo arcade game dos X-MEN. Feito em HTML, CSS e Javascript"
    },
    {
        classe: "projeto",
        titulo: "Projeto Mario Jump",
        link: "https://antonioprolucas.github.io/mario/",
        imagem: "./src/img/projects/Projeto_Mario_Jump.png",
        alt: "Mario jump",
        descricao: "Game web do Mario estilo Dino Chrome. Feito em HTML, CSS e Javascript"
    },
    {
        classe: "projeto",
        titulo: "Zelda Timeline Guide",
        link: "https://antonioprolucas.github.io/Zelda-Timeline-Guide/",
        imagem: "./src/img/projects/Projeto_Zelda-timeline.png",
        alt: "Projeto Zelda Timeline Guide",
        descricao: "Guia interativo sobre a timeline da séri The Legend of Zelda, feita com HTML, CSS e JavaScript. Permite que os usuários entendam a cronologia da franquia, visualizem sinopses e acessem links para uma wiki externa para obter informações aprofundadas."
    },
    {
        classe: "projeto",
        titulo: "Projeto Pokedevs",
        link: "https://antonioprolucas.github.io/Pokedevs-SZPC/",
        imagem: "./src/img/projects/Projeto-Pokedevs.png",
        alt: "Projeto Pokedevs",
        descricao: "Projeto feito com HTML, CSS e JS na semana do zero ao programdor contratado. Uma interfece que representam imgens e atributos de devs inspirados em Pokémons!"
    },
    {
        classe: "projeto",
        titulo: "Projeto JuriIA",
        link: "https://github.com/AntonioPROLucas/Projeto_JuriIA/",
        imagem: "./src/img/projects/Projeto-JuriIA.png",
        alt: "Projeto landing page GTA",
        descricao: "O JuriIA automatiza o atendimento e a gestão jurídica via IA, utilizando RAG para respostas precisas e agentes autônomos para integrar ferramentas como o Google Calendar. Feito com Python e Dkango."
    },
    {
        classe: "projeto",
        titulo: "App Previsão do Tempo",
        link: "https://antonioprolucas.github.io/App-Previsao_do_tempo/",
        imagem: "./src/img/projects/Projeto_Previsão-Tempo.png",
        alt: "Protótipo Previsão do tempo",
        descricao: "Página previsão do tempo, digite uma cidade e ele te mostrará o tempo e a temperatura. Feito em HTML, CSS e Javascript"
    },
    {
        classe: "projeto",
        titulo: "Página AudioBook",
        link: "https://antonioprolucas.github.io/intensivao-javascript-audiobook-DonCasmurro/",
        imagem: "./src/img/projects/Projeto-AudioBook.png",
        alt: "Pagina de AudioBook",
        descricao: "Página com audiobook de Dom Casmurro, feito no Intensivão de Javascript da Hashtag Treinamentos. Feito em HTML, CSS e Javascript"
    },
    {
        classe: "projeto",
        titulo: "Página SmartWatch",
        link: "https://antonioprolucas.github.io/Intensivao-de-javascript_2-Prototipo_pagina-de-smartwatch/",
        imagem: "./src/img/projects/Projeto-Smart-watch.png",
        alt: "Clone de Página AppleWatch",
        descricao: "Página clone da pagina de compra AppleWatch, feito no Intensivão de Javascript da Hashtag Treinamentos. Feito em HTML, CSS e Javascript"
    },
    {
        classe: "projeto",
        titulo: "Projeto Chainlit : ChatIA",
        link: "https://github.com/AntonioPROLucas/Meu-primeiro-projeto-Chainlit_ChatIA",
        imagem: "./src/img/projects/MeuProjetoChainlit1.png",
        alt: "Chat IA",
        descricao: "Página de assistente virtual sobre linguagens programação, digite uma linguagem de progrmação e falará a respeito e mostrará link de projetos feitos com a linguagem. Feito com a linguagem Python e o framework Chailint"
    },
    {
        classe: "projeto",
        titulo: "AntonioPROChat",
        link: "https://github.com/AntonioPROLucas/Meu-projeto-flet_Chat-compartilhado",
        imagem: "./src/img/projects/Projeto-Chat.png",
        alt: "Chat",
        descricao: "Página de chat compartilhado. Feito com Python e Flet"
    },
    {
        classe: "projeto",
        titulo: "Projeto Acqua",
        link: "https://antonioprolucas.github.io/Desafio_Dev-Mentors_Landing-Page_Predio/",
        imagem: "./src/img/projects/Projeto-predio.png",
        alt: "Projeto landing page Prédio Acqua",
        descricao: "Página landing page simulando o lançamento do Prédio Acqua, com um contador fucional da data par o lançamento em tempo real. Desafio feito no dev mentors. Feito com HTML, CSS e Javascript"
    },
];