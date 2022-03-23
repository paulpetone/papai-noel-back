import axios from "axios";

type ViaCepResponse = {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

const getResult = async (_, variables) => {
    const { cep } = variables
    const { data: { bairro } } = await axios.get<ViaCepResponse>(`https://viacep.com.br/ws/${cep}/json/`)
    const shouldReceivePresent = bairro !== 'Morumbi'
    const message = shouldReceivePresent ? 'Voce deve receber presente' : 'Se fudeu otario'

    return {
        message,
        shouldReceivePresent
    }
}

export default getResult