package com.example.synergia.rest

import br.com.evoge.utils.objects.ResponseMessenger
import com.example.synergia.dto.EventoDto
import com.example.synergia.dto.UsuarioDto
import com.example.synergia.services.EventoService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/evento")
class EventoResource (
    private val eventoService: EventoService,
) {
    @GetMapping("getById/{idEvento}")
    fun getEventoById(
        @PathVariable("idEvento") idEvento: Long
    ): ResponseEntity<EventoDto?> {
        return ResponseMessenger.buildResponse(null) {
            eventoService.getById(idEvento);
        }
    }
    @GetMapping("get-all")
    fun getAllEvento(): ResponseEntity<List<EventoDto>> {
        return ResponseMessenger.buildResponse(null) {
            eventoService.getAll();
        }
    }
    @PostMapping("create-evento")
    fun createEvento(): ResponseEntity<Void> {
        return ResponseMessenger.buildResponse(null) {
            null
        }
    }
}