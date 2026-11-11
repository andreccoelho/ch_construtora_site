import styled from "styled-components";

/**
 * Botão padrão do site.
 *
 * Variantes (prop `$variante`):
 *   - "primario" (padrão): dourado preenchido, texto escuro (melhor contraste).
 *   - "contorno": transparente com borda dourada.
 *
 * Outras props:
 *   - `$bloco`: ocupa a largura toda (até 21rem) — usado em CTAs de seção.
 *   - `$semSeta`: oculta a seta animada.
 *
 * Funciona como <button> ou, com `as="a"`, como link.
 */
export const Botao = styled.button`
    --ouro-claro: #cdbd85;
    --ouro: #bdad77;
    --ouro-escuro: #8a7d54;

    position: relative;
    overflow: hidden;
    isolation: isolate;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    box-sizing: border-box;
    min-height: 3.25rem;
    width: ${({$bloco}) => ($bloco ? "100%" : "auto")};
    max-width: ${({$bloco}) => ($bloco ? "21rem" : "100%")};
    padding: 0.9rem 2.25rem;
    border-radius: 0.75rem;
    font-family: inherit;
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.12em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1),
        background-color 0.35s ease,
        border-color 0.35s ease,
        color 0.35s ease;

    ${({$variante}) =>
        $variante === "contorno"
            ? `
        color: var(--ouro);
        background: transparent;
        border: 1px solid rgba(189, 173, 119, 0.55);
        box-shadow: none;
    `
            : `
        color: #141414;
        background: linear-gradient(135deg, var(--ouro-claro) 0%, var(--ouro) 55%, var(--ouro-escuro) 100%);
        border: 1px solid transparent;
        box-shadow: 0 6px 20px rgba(189, 173, 119, 0.22);
    `}

    /* brilho que atravessa o botão no hover */
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        background: linear-gradient(105deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%);
        transform: translateX(-120%);
        transition: transform 0.7s ease;
    }

    /* seta */
    &::after {
        content: ${({$semSeta}) => ($semSeta ? "none" : '"→"')};
        font-size: 1.1em;
        letter-spacing: 0;
        transition: transform 0.35s ease;
    }

    &:hover {
        transform: translateY(-2px);
        ${({$variante}) =>
            $variante === "contorno"
                ? `
            background: rgba(189, 173, 119, 0.14);
            border-color: var(--ouro);
            color: var(--ouro-claro);
        `
                : `
            color: #141414;
            box-shadow: 0 12px 30px rgba(189, 173, 119, 0.38);
        `}
    }

    &:hover::before {
        transform: translateX(120%);
    }

    &:hover::after {
        transform: translateX(4px);
    }

    &:active {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }

    @media (max-width: 768px) {
        min-height: 3rem;
        padding: 0.8rem 1.75rem;
        font-size: 0.85rem;
    }

    @media (max-width: 480px) {
        width: ${({$bloco}) => ($bloco ? "100%" : "auto")};
    }
`;

export default Botao;
