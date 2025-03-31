package edu.comillas.icai.gitt.pat.spring.mvc.controller;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
        @Bean
        public WebMvcConfigurer corsConfigurer() {
            return new WebMvcConfigurer() {
                @Override
                public void addCorsMappings(CorsRegistry registry) {
                    registry.addMapping("/**") // Aplica CORS a todos los endpoints
                            .allowedOrigins("file:///C:/Users/mario/OneDrive/Escritorio/3rTeleco/2nCuatri/Programaci%C3%B3nAppsTelem%C3%A1ticas/practicas/Practica2/Informacion.html") // Cambia esto según tu frontend
                            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                            .allowedHeaders("*")
                            .allowCredentials(true);
                }
            };
        }
}


