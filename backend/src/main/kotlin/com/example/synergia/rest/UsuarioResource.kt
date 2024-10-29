package com.example.synergia.rest

import br.com.evoge.utils.objects.ResponseMessenger
import com.example.synergia.dto.entity_mirror.UsuarioDto
import com.example.synergia.services.UsuarioService
import org.apache.coyote.Response
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RequestPart
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.multipart.MultipartFile

@RestController
@RequestMapping("/api/usuario")
class UsuarioResource (
    private val usuarioService: UsuarioService,
) {
    @GetMapping("get-by-id/{id-usuario}")
    fun getUsuarioById(
        @PathVariable("id-usuario") idUsuario: Long
    ): ResponseEntity<UsuarioDto?> {
        return ResponseMessenger.buildResponse(null) {
            usuarioService.getById(idUsuario);
        }
    }
    @GetMapping("get-all")
    fun getAllUsuarios(): ResponseEntity<List<UsuarioDto>> {
        return ResponseMessenger.buildResponse(null) {
            usuarioService.getAll();
        }
    }
    @PostMapping(
        "create-users-from-file",
        consumes = ["multipart/form-data"]
    )
    fun createUsersFromFile(
        @RequestPart("file") file: MultipartFile
    ): ResponseEntity<Void> {
        return ResponseMessenger.buildResponse(null) {
            usuarioService.createUsersFromFile(file)
            null
        }
    }
//    @PostMapping("upload-itens-a-ignorar", consumes = ["multipart/form-data"])
//    fun uploadItensAIgnorar(
//        @RequestPart("file") file: MultipartFile,
//        @RequestParam("id-subvencao") idSubvencao: Long,
//    ): ResponseEntity<Void> {
//        return ResponseMessenger.buildResponse("Itens atualizados") {
//            pendenciasUploadService.uploadItensAIgnorar(
//                file,
//                idSubvencao
//            )
//            null
//        }
//    }
    @PostMapping(
        "export-users-as-excel",
        produces = ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]
    )
    fun exportUsersAsExcel(): ResponseEntity<Void> {
        return ResponseMessenger.buildResponse(null) {
            usuarioService.exportUsersAsExcel()
            null
        }
    }
    @PostMapping("upload-itens-a-ignorar", consumes = ["multipart/form-data"])
    fun uploadItensAIgnorar(
        @RequestPart("file") file: MultipartFile,
        @RequestParam("id-subvencao") idSubvencao: Long,
    ): ResponseEntity<Void> {
        return ResponseMessenger.buildResponse("Itens atualizados") {
            pendenciasUploadService.uploadItensAIgnorar(
                file,
                idSubvencao
            )
            null
        }
    }
}
