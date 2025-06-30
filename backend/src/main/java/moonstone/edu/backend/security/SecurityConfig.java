package moonstone.edu.backend.security;

import org.springframework.context.annotation.*;
import org.springframework.security.config.annotation.method.configuration.*;
import org.springframework.security.config.annotation.security.builders.*;
import org.springframework.security.config.annotation.security.configuration.*;
import org.springframework.security.config.annotation.security.builders.HttpSecurity;
import org.springframework.security.config.http.*;
import org.springframework.security.web.*;
import org.springframework.security.web.security.*;
import org.springframework.security.web.security.builders.*;
import org.springframework.security.web.security.config.*;
import org.springframework.security.web.security.filter.*;
import org.springframework.security.web.security.filter.*;
import org.springframework.security.config.annotation.method.configuration.*;
import org.springframework.security.web.authentication.*;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableMethodSecurity
@EnableWebSecurity
@Configuration
public class SecurityConfig {

    private final JwtFilter jwtFilter;

    public SecurityConfig(JwtFilter jwtFilter) {
        this.jwtFilter = jwtFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .antMatchers("/api/signin", "/api/signup", "/api/public/**").permitAll()
                        .anyRequest().authenticated())
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }
}
