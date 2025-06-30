package moonstone.edu.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "teacherapplications")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeacherApplication {
    @Id
    private String id;
    private String fullName;
    private String mobileNumber;
    private String whatsappNumber;
    private String subject;
    private String email;
    private String password;
    private String address;
}
