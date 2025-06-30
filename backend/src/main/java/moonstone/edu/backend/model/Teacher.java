package moonstone.edu.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "teachers")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Teacher {
    @Id
    private String id;
    private String name;
    private String fullName;
    private String email;
    private String password;
    private String mobileNumber;
    private String whatsappNumber;
    private String subject;
    private String address;
}
