// TeacherService.java
package moonstone.edu.backend.service;

import moonstone.edu.backend.model.Teacher;
import moonstone.edu.backend.model.TeacherApplication;
import moonstone.edu.backend.repository.TeacherApplicationRepository;
import moonstone.edu.backend.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherService {

    @Autowired
    private TeacherRepository teacherRepo;

    @Autowired
    private TeacherApplicationRepository appRepo;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public TeacherApplication submitApplication(TeacherApplication app) {
        app.setPassword(encoder.encode(app.getPassword()));
        return appRepo.save(app);
    }

    public List<TeacherApplication> getApplications() {
        return appRepo.findAll();
    }

    public Optional<TeacherApplication> findApplicationById(String id) {
        return appRepo.findById(id);
    }

    public void removeApplication(String id) {
        appRepo.deleteById(id);
    }

    public Teacher approveApplication(TeacherApplication app) {
        Teacher teacher = new Teacher(null, app.getFullName(), app.getFullName(), app.getEmail(), app.getPassword(), app.getMobileNumber(), app.getWhatsappNumber(), app.getSubject(), app.getAddress());
        return teacherRepo.save(teacher);
    }

    public List<Teacher> getAllTeachers() {
        return teacherRepo.findAll();
    }

    public Optional<Teacher> findTeacherByEmail(String email) {
        return teacherRepo.findByEmail(email);
    }

    public void removeTeacher(String id) {
        teacherRepo.deleteById(id);
    }

    public boolean checkPassword(String raw, String hashed) {
        return encoder.matches(raw, hashed);
    }

    public void updatePassword(Teacher teacher, String newPassword) {
        teacher.setPassword(encoder.encode(newPassword));
        teacherRepo.save(teacher);
    }
}
