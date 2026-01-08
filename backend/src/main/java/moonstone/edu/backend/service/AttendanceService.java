// AttendanceService.java
package moonstone.edu.backend.service;

import moonstone.edu.backend.model.StudentInformation;
import moonstone.edu.backend.repository.StudentInformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AttendanceService {

    @Autowired
    private StudentInformationRepository studentRepo;

    public List<StudentInformation> getStudents(String standard, String board, String subject) {
        return studentRepo.findByStandardAndBoardAndSubject(standard, board, subject);
    }

    public Optional<StudentInformation> getStudentById(String id) {
        return studentRepo.findById(id);
    }

    public void save(StudentInformation student) {
        studentRepo.save(student);
    }

    public void deleteDateFromAll(List<StudentInformation> students, String date) {
        for (StudentInformation s : students) {
            s.getPresent().removeIf(d -> d.equals(date));
            s.getAbsent().removeIf(d -> d.equals(date));
            studentRepo.save(s);
        }
    }

    public void clearAttendanceFor(List<StudentInformation> students) {
        for (StudentInformation s : students) {
            s.setPresent(new ArrayList<>());
            s.setAbsent(new ArrayList<>());
            studentRepo.save(s);
        }
    }

    public Set<String> getAllAttendanceDates() {
        Set<String> dates = new HashSet<>();
        for (StudentInformation s : studentRepo.findAll()) {
            dates.addAll(s.getPresent());
            dates.addAll(s.getAbsent());
        }
        return dates;
    }
}
