package com.example.synergia.rest

import br.com.evoge.utils.objects.ResponseMessenger
import com.example.synergia.dto.UsuarioDto
import com.example.synergia.services.UsuarioService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/test")
class UsuarioResource (
    private val usuarioService: UsuarioService,
) {
    @GetMapping("getById/{idUsuario}")
    fun getUsuarioById(
        @PathVariable("idUsuario") idUsuario: Long
    ): ResponseEntity<UsuarioDto?> {
        return ResponseMessenger.buildResponse(null) {
            usuarioService.getById(idUsuario);
        }

    }
    @GetMapping("getAll")
    fun getAllUsuarios(): ResponseEntity<List<UsuarioDto>> {
        return ResponseMessenger.buildResponse(null) {
            usuarioService.getAll();
        }
    }
}