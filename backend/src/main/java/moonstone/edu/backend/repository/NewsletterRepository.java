// NewsletterRepository.java
package moonstone.edu.backend.repository;

import moonstone.edu.backend.model.Newsletter;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NewsletterRepository extends MongoRepository<Newsletter, String> {
}
