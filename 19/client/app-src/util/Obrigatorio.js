export function obrigatorio(parametro) {

    throw new Error(`${parametro} é um parâmetro obrigatório`);
}