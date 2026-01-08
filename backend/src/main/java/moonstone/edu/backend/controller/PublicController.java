package moonstone.edu.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import moonstone.edu.backend.model.Newsletter;
import moonstone.edu.backend.model.Query;
import moonstone.edu.backend.model.Subscription;
import moonstone.edu.backend.repository.NewsletterRepository;
import moonstone.edu.backend.repository.QueryRepository;
import moonstone.edu.backend.repository.SubscriptionRepository;

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
