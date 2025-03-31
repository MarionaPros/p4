package edu.comillas.icai.gitt.pat.spring.mvc.controller;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ModeloMensajes(
        @NotBlank(message="El campo no puede ser nulo")
        String nombre,
        @NotBlank(message="El campo no puede estar vacío")
        String email,
        @NotNull(message="El campo no puede ser nulo")
        Integer numTelefono,
        @NotBlank(message="El mensaje no puede estar vacío")
        String mensaje
) {}
