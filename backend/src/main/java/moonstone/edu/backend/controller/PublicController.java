import moonstone.edu.backend.controller.NewsletterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// PublicController.java
@RestController
@RequestMapping("/api/public")
@CrossOrigin
public class PublicController {

    @Autowired
    private NewsletterRepository newsletterRepo;
    @Autowired
    private QueryRepository queryRepo;
    @Autowired
    private SubscriptionRepository subscriptionRepo;

    @PostMapping("/newsletter")
    public ResponseEntity<?> subscribeNewsletter(@RequestBody Newsletter newsletter) {
        newsletterRepo.save(newsletter);
        return ResponseEntity.ok("Subscribed to newsletter");
    }

    @PostMapping("/query")
    public ResponseEntity<?> submitQuery(@RequestBody Query query) {
        queryRepo.save(query);
        return ResponseEntity.ok("Query submitted successfully");
    }

    @PostMapping("/subscription")
    public ResponseEntity<?> subscribe(@RequestBody Subscription subscription) {
        subscriptionRepo.save(subscription);
        return ResponseEntity.ok("Subscribed successfully");
    }
}
