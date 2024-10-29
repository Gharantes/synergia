package com.example.synergia.services

import com.example.synergia.dto.entity_mirror.UsuarioDto
import org.springframework.stereotype.Service

@Service
class UsuarioService {
    fun getById(idUsuario: Long): UsuarioDto? {
        return null
    }
    fun getAll(): List<UsuarioDto> {
        return listOf()
    }
}
