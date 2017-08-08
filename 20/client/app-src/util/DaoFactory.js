import { ConnectionFactory }  from './ConnectionFactory';
import { NegociacaoDao } from '../domain/negociacao/NegociacaoDao';

export async function getNegociacaoDao() {

    let conn = await ConnectionFactory.getConnection();
    return new NegociacaoDao(conn);
}