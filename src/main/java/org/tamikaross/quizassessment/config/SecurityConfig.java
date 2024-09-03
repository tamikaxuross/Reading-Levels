package org.tamikaross.quizassessment.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())  // Disable CSRF for simplicity, but be cautious in production
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/register", "/login", "/css/**", "/js/**", "/images/**").permitAll()  // Allow access to registration, login, and static resources
                        .anyRequest().authenticated()  // All other requests require authentication
                )
                .formLogin(formLogin -> formLogin
                        .loginPage("/login")  // Custom login page
                        .defaultSuccessUrl("/quizzes", true)  // Redirect to quizzes page after login
                        .permitAll()
                )
                .logout(logout -> logout
                        .logoutUrl("/logout")
                        .logoutSuccessUrl("/login?logout")  // Redirect to login page after logout
                        .permitAll()
                );

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
