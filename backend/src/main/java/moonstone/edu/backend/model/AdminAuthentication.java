package moonstone.edu.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "adminauthentication")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdminAuthentication {
    @Id
    private String id;
    private String name;
    private String email;
    private String password;
}
