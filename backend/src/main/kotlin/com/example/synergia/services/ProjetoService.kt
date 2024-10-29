package com.example.synergia.services

import com.example.synergia.dto.entity_mirror.ProjetoDto
import com.example.synergia.mappers.EventoMapper
import com.example.synergia.mappers.ProjetoMapper
import com.example.synergia.repositories.ProjetoRepository
import org.springframework.stereotype.Service

@Service
class ProjetoService (
    private val projetoRepository: ProjetoRepository
) {
    fun getById(idProjeto: Long): ProjetoDto? {
        return projetoRepository.findById(idProjeto)
            .map { ProjetoMapper().entityToDto(it) }
            .orElse(null)
    }
    fun getAll(): List<ProjetoDto> {
        return projetoRepository.findAll()
            .map { ProjetoMapper().entityToDto(it) }
    }

    fun createProjeto(createProjetoDto: Any) {
        println("Projeto criado")
    }
}
