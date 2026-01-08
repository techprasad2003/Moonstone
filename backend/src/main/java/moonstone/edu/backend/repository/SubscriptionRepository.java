// SubscriptionRepository.java
package moonstone.edu.backend.repository;

import moonstone.edu.backend.model.Subscription;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SubscriptionRepository extends MongoRepository<Subscription, String> {
}
