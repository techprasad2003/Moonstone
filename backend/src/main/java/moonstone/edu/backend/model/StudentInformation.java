package moonstone.edu.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "studentinformations")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentInformation {
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
    private List<String> present = new ArrayList<>();
    private List<String> absent = new ArrayList<>();
}
