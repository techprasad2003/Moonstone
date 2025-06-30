// ApplicationRepository.java
package moonstone.edu.backend.repository;

import moonstone.edu.backend.model.Application;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ApplicationRepository extends MongoRepository<Application, String> {
}
