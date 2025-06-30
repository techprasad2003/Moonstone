package moonstone.edu.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "applications")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Application {
    @Id
    private String id;
    private String fullName;
    private String standard;
    private String board;
    private String subject;
    private String mobileNumber;
    private String whatsappNumber;
    private String fathersFullName;
    private String mothersFullName;
    private String fathersMobile;
    private String mothersMobile;
    private String address;
}
