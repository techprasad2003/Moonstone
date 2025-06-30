// AuthController.java
@RestController
@RequestMapping("/api")
@CrossOrigin
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest request) {
        Optional<User> existing = userRepository.findByEmail(request.getEmail());
        if (existing.isPresent()) {
            return ResponseEntity.badRequest().body("User already exists with this email");
        }
        String encodedPassword = passwordEncoder.encode(request.getPassword());
        User user = new User(null, request.getName(), request.getEmail(), encodedPassword);
        userRepository.save(user);
        return ResponseEntity.status(201).body("Sign up successful!");
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody LoginRequest request) {
        Optional<User> userOptional = userRepository.findByEmail(request.getEmail());
        if (userOptional.isEmpty() || !passwordEncoder.matches(request.getPassword(), userOptional.get().getPassword())) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
        String token = jwtUtil.generateToken(userOptional.get().getId());
        return ResponseEntity.ok().body("Sign in successful. Token: " + token);
    }
}
