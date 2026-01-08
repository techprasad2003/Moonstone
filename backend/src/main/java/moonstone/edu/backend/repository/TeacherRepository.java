// TeacherRepository.java
package moonstone.edu.backend.repository;

import moonstone.edu.backend.model.Teacher;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface TeacherRepository extends MongoRepository<Teacher, String> {
    Optional<Teacher> findByEmail(String email);
}
