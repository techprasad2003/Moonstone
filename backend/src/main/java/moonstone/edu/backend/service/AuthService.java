// AuthService.java
package moonstone.edu.backend.service;

import moonstone.edu.backend.model.User;
import moonstone.edu.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User registerUser(String name, String email, String password) {
        String hashed = encoder.encode(password);
        User user = new User(null, name, email, hashed);
        return userRepository.save(user);
    }

    public boolean checkPassword(String raw, String hashed) {
        return encoder.matches(raw, hashed);
    }

    public BCryptPasswordEncoder getEncoder() {
        return encoder;
    }
}
