// QueryRepository.java
package moonstone.edu.backend.repository;

import moonstone.edu.backend.model.Query;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QueryRepository extends MongoRepository<Query, String> {
}
