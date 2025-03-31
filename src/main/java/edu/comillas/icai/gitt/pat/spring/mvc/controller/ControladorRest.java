package edu.comillas.icai.gitt.pat.spring.mvc.controller;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController

public class ControladorRest {
    private final Map<String,ModeloMensajes> mensajes= new HashMap<>();

    @PostMapping("/api/mensajes")
    @ResponseStatus(HttpStatus.CREATED)

    public ModeloMensajes crea(@RequestBody @Valid ModeloMensajes mensajeNuevo, BindingResult resultado){
        if(resultado.hasErrors()){
            return new ModeloMensajes(null,null,null, null);
        }
        mensajes.put(mensajeNuevo.nombre(),mensajeNuevo);
        return mensajeNuevo;
    }
    @GetMapping("/api/mensajes/{nombre}")
    public ModeloMensajes obtener(@PathVariable String nombre){
        return mensajes.get(nombre);
    }
    @PutMapping("api/mensajes/{nombre}")
    public ModeloMensajes actualizar(@PathVariable String nombre,
                                         @RequestBody ModeloMensajes apartamentoNuevo) {
        ModeloMensajes mensajeActual = mensajes.get(nombre);
        if (mensajeActual == null) {
            return null;
        }
        ModeloMensajes mensajeActualizado = new ModeloMensajes(
                nombre,
                apartamentoNuevo.email() != null ? apartamentoNuevo.email() : mensajeActual.email(),
                apartamentoNuevo.numTelefono() != null ? apartamentoNuevo.numTelefono() : mensajeActual.numTelefono(),
                apartamentoNuevo.mensaje() != null ? apartamentoNuevo.mensaje() : mensajeActual.mensaje());

        mensajes.put(nombre,mensajeActualizado);
        return mensajeActualizado;
    }
    @DeleteMapping("/api/mensajes/{nombre}")
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public void eliminar(@PathVariable String nombre) {
        mensajes.remove(nombre);

    }
}
