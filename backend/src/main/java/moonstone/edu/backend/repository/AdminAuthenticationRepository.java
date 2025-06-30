// AdminAuthenticationRepository.java
package moonstone.edu.backend.repository;

import moonstone.edu.backend.model.AdminAuthentication;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface AdminAuthenticationRepository extends MongoRepository<AdminAuthentication, String> {
    Optional<AdminAuthentication> findByEmail(String email);
}
