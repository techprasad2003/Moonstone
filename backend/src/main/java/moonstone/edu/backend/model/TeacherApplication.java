package moonstone.edu.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "teacherapplications")
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

    public TeacherApplication() {}

    public TeacherApplication(String id, String fullName, String mobileNumber, String whatsappNumber, String subject, String email, String password, String address) {
        this.id = id;
        this.fullName = fullName;
        this.mobileNumber = mobileNumber;
        this.whatsappNumber = whatsappNumber;
        this.subject = subject;
        this.email = email;
        this.password = password;
        this.address = address;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public String getMobileNumber() { return mobileNumber; }
    public void setMobileNumber(String mobileNumber) { this.mobileNumber = mobileNumber; }
    public String getWhatsappNumber() { return whatsappNumber; }
    public void setWhatsappNumber(String whatsappNumber) { this.whatsappNumber = whatsappNumber; }
    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
}
