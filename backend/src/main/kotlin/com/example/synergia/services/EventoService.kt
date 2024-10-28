package com.example.synergia.services

import com.example.synergia.domain.Evento
import com.example.synergia.dto.EventoDto
import com.example.synergia.dto.input.CreateEventoDto
import com.example.synergia.repositories.EventoRepository
import org.springframework.stereotype.Service

@Service
class EventoService (
    private val eventoRepository: EventoRepository,
) {
    fun getById(idEvento: Long): EventoDto? {
        return getAll().filter { it.idEvento == idEvento }.firstOrNull()
    }
    fun getAll(): List<EventoDto> {
        return listOf(
            EventoDto(1, "1", "", listOf(), listOf(), listOf()),
            EventoDto(2, "2", "", listOf(), listOf(), listOf()),
        )
    }

    fun createEvento(createEventoDto: CreateEventoDto): Evento {
//        val evento = Evento().apply {
//            name = createEventoDto.name
//            description = createEventoDto.description
//        }
//        evento.save(eventoRepository)
//        return eventoRepository.save(evento)
    }
}
