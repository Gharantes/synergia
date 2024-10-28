/**
 * OpenAPI definition
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface InfoPessoaSimplesDto { 
    id: number;
    nome: string;
    emailContato: string;
    tipoUsuario: InfoPessoaSimplesDto.TipoUsuarioEnum;
}
export namespace InfoPessoaSimplesDto {
    export type TipoUsuarioEnum = 'PROFESSOR' | 'COORDENADOR' | 'ALUNO';
    export const TipoUsuarioEnum = {
        Professor: 'PROFESSOR' as TipoUsuarioEnum,
        Coordenador: 'COORDENADOR' as TipoUsuarioEnum,
        Aluno: 'ALUNO' as TipoUsuarioEnum
    };
}


