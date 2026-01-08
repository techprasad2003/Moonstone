package moonstone.edu.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

import moonstone.edu.backend.dto.LoginRequest;
import moonstone.edu.backend.dto.SignupRequest;
import moonstone.edu.backend.model.User;
import moonstone.edu.backend.repository.UserRepository;
import moonstone.edu.backend.security.JwtUtil;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest request) {
        Optional<User> existing = userRepository.findByEmail(request.getEmail());
        if (existing.isPresent()) {
            return ResponseEntity.badRequest().body("User already exists with this email");
        }
        String encodedPassword = passwordEncoder.encode(request.getPassword());
        User user = new User(null, request.getName(), request.getEmail(), encodedPassword);
        userRepository.save(user);
        return ResponseEntity.status(201).body("Sign up successful!");
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody LoginRequest request) {
        Optional<User> userOptional = userRepository.findByEmail(request.getEmail());
        if (userOptional.isEmpty() || !passwordEncoder.matches(request.getPassword(), userOptional.get().getPassword())) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
        String token = jwtUtil.generateToken(userOptional.get().getId());
        return ResponseEntity.ok().body("Sign in successful. Token: " + token);
    }
}
