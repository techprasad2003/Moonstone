package moonstone.edu.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "queries")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Query {
    @Id
    private String id;
    private String name;
    private String email;
    private String message;
}
