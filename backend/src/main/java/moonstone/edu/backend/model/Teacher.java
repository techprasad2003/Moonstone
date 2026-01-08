package moonstone.edu.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "teachers")
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

    public Teacher() {}

    public Teacher(String id, String name, String fullName, String email, String password, String mobileNumber, String whatsappNumber, String subject, String address) {
        this.id = id;
        this.name = name;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.mobileNumber = mobileNumber;
        this.whatsappNumber = whatsappNumber;
        this.subject = subject;
        this.address = address;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getMobileNumber() { return mobileNumber; }
    public void setMobileNumber(String mobileNumber) { this.mobileNumber = mobileNumber; }
    public String getWhatsappNumber() { return whatsappNumber; }
    public void setWhatsappNumber(String whatsappNumber) { this.whatsappNumber = whatsappNumber; }
    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
}
