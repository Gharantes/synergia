package com.example.synergia.rest

import br.com.evoge.utils.objects.ResponseMessenger
import com.example.synergia.dto.entity_mirror.EventoDto
import com.example.synergia.dto.entity_mirror.ProjetoDto
import com.example.synergia.dto.input.CreateEventoDto
import com.example.synergia.services.EventoService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/evento")
class EventoResource (
    private val eventoService: EventoService,
) {
    @GetMapping("get-by-id/{id-evento}")
    fun getEventoById(
        @PathVariable("id-evento") idEvento: Long
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
    @GetMapping("get-projetos-of-evento/{id-evento}")
    fun getProjetosOfEvento(
        @PathVariable("id-evento") idEvento: Long
    ): ResponseEntity<List<ProjetoDto>> {
        return ResponseMessenger.buildResponse(null) {
            eventoService.getProjetosOfEvento(idEvento);
        }
    }
    @PostMapping("create-evento")
    fun createEvento(
        @RequestBody createEventoDto: CreateEventoDto
    ): ResponseEntity<Void> {
        return ResponseMessenger.buildResponse(null) {
            eventoService.createEvento(createEventoDto);
            null
        }
    }
    @DeleteMapping("delete-evento/{id-evento}")
    fun deleteEvento(
        @PathVariable("id-evento") idEvento: Long
    ): ResponseEntity<Void> {
        return ResponseMessenger.buildResponse(null) {
            eventoService.deleteEvento(idEvento);
            null
        }
    }
}
