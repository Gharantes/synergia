package com.example.synergia

import org.springframework.boot.ApplicationArguments
import org.springframework.boot.ApplicationRunner
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class SynergiaApplication
	: ApplicationRunner
{
	override fun run (args: ApplicationArguments) {
		println("Teste")
	}
}

fun main(args: Array<String>) {
	runApplication<SynergiaApplication>(*args)
}
