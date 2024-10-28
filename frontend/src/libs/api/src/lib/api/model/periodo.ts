/**
 * OpenAPI definition
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface Periodo { 
    descricao: string;
    tipoPeriodo: Periodo.TipoPeriodoEnum;
    dataUnica?: string;
    dataInicio?: string;
    dataFim?: string;
}
export namespace Periodo {
    export type TipoPeriodoEnum = 'UNIQUE' | 'BETWEEN';
    export const TipoPeriodoEnum = {
        Unique: 'UNIQUE' as TipoPeriodoEnum,
        Between: 'BETWEEN' as TipoPeriodoEnum
    };
}


