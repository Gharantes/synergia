package com.example.synergia.repositories

import com.example.synergia.domain.Evento
import org.springframework.data.jpa.repository.JpaRepository

interface EventoRepository : JpaRepository<EventoRepository, Long> {
    fun getAll(): List<Evento>
}
