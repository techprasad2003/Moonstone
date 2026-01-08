// TeacherApplicationRepository.java
package moonstone.edu.backend.repository;

import moonstone.edu.backend.model.TeacherApplication;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface TeacherApplicationRepository extends MongoRepository<TeacherApplication, String> {
    Optional<TeacherApplication> findByEmail(String email);
}
