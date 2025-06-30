package moonstone.edu.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "newsletters")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Newsletter {
    @Id
    private String id;
    private String email;
}
