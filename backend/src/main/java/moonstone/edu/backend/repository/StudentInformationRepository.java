// StudentInformationRepository.java
package moonstone.edu.backend.repository;

import moonstone.edu.backend.model.StudentInformation;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface StudentInformationRepository extends MongoRepository<StudentInformation, String> {
    List<StudentInformation> findByStandardAndBoardAndSubject(String standard, String board, String subject);
}
