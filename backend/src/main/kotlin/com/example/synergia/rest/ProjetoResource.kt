package com.example.synergia.rest

import br.com.evoge.utils.objects.ResponseMessenger
import com.example.synergia.dto.entity_mirror.ProjetoDto
import com.example.synergia.services.ProjetoService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/projeto")
class ProjetoResource (
    private val projetoService: ProjetoService,
) {
    @GetMapping("getById/{idProjeto}")
    fun getProjetoById(
        @PathVariable("idProjeto") idProjeto: Long
    ): ResponseEntity<ProjetoDto?> {
        return ResponseMessenger.buildResponse(null) {
            projetoService.getById(idProjeto);
        }
    }
    @GetMapping("getAll")
    fun getAllProjetos(): ResponseEntity<List<ProjetoDto>> {
        return ResponseMessenger.buildResponse(null) {
            projetoService.getAll();
        }
    }

    @PostMapping("create-projeto")
    fun createProjeto(
        @RequestBody createProjetoDto: CreateProjetoDto
    ): ResponseEntity<Void> {
        return ResponseMessenger.buildResponse(null) {
            projetoService.createProjeto(createProjetoDto);
            null
        }
    }
}
