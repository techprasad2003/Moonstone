package moonstone.edu.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "applications")
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

    public Application() {}

    public Application(String id, String fullName, String standard, String board, String subject, String mobileNumber, String whatsappNumber, String fathersFullName, String mothersFullName, String fathersMobile, String mothersMobile, String address) {
        this.id = id;
        this.fullName = fullName;
        this.standard = standard;
        this.board = board;
        this.subject = subject;
        this.mobileNumber = mobileNumber;
        this.whatsappNumber = whatsappNumber;
        this.fathersFullName = fathersFullName;
        this.mothersFullName = mothersFullName;
        this.fathersMobile = fathersMobile;
        this.mothersMobile = mothersMobile;
        this.address = address;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public String getStandard() { return standard; }
    public void setStandard(String standard) { this.standard = standard; }
    public String getBoard() { return board; }
    public void setBoard(String board) { this.board = board; }
    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }
    public String getMobileNumber() { return mobileNumber; }
    public void setMobileNumber(String mobileNumber) { this.mobileNumber = mobileNumber; }
    public String getWhatsappNumber() { return whatsappNumber; }
    public void setWhatsappNumber(String whatsappNumber) { this.whatsappNumber = whatsappNumber; }
    public String getFathersFullName() { return fathersFullName; }
    public void setFathersFullName(String fathersFullName) { this.fathersFullName = fathersFullName; }
    public String getMothersFullName() { return mothersFullName; }
    public void setMothersFullName(String mothersFullName) { this.mothersFullName = mothersFullName; }
    public String getFathersMobile() { return fathersMobile; }
    public void setFathersMobile(String fathersMobile) { this.fathersMobile = fathersMobile; }
    public String getMothersMobile() { return mothersMobile; }
    public void setMothersMobile(String mothersMobile) { this.mothersMobile = mothersMobile; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
}
