package moonstone.edu.backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import moonstone.edu.backend.dto.LoginRequest;
import moonstone.edu.backend.model.AdminAuthentication;
import moonstone.edu.backend.repository.AdminAuthenticationRepository;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    private AdminAuthenticationRepository adminRepo;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody AdminAuthentication admin) {
        if (adminRepo.findAll().size() > 0) {
            return ResponseEntity.status(403).body("Only one admin allowed.");
        }
        admin.setPassword(encoder.encode(admin.getPassword()));
        adminRepo.save(admin);
        return ResponseEntity.status(201).body("Admin signed up.");
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody LoginRequest request) {
        Optional<AdminAuthentication> optionalAdmin = adminRepo.findByEmail(request.getEmail());
        if (optionalAdmin.isEmpty() || !encoder.matches(request.getPassword(), optionalAdmin.get().getPassword())) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
        return ResponseEntity.ok("Admin signed in");
    }

    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestParam String email, @RequestParam String oldPassword, @RequestParam String newPassword) {
        Optional<AdminAuthentication> adminOpt = adminRepo.findByEmail(email);
        if (adminOpt.isEmpty()) return ResponseEntity.status(404).body("Admin not found");
        AdminAuthentication admin = adminOpt.get();
        if (!encoder.matches(oldPassword, admin.getPassword())) return ResponseEntity.status(400).body("Old password incorrect");
        admin.setPassword(encoder.encode(newPassword));
        adminRepo.save(admin);
        return ResponseEntity.ok("Password updated successfully");
    }
}
