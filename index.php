<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style_index2.css">

    <!--Box Icon-->
    <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

    <!--Remix Icon-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css">

    <!--google Fonts-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap">

    <!-- Lightbox2 CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.1/css/lightbox.min.css">

    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <!-- Lightbox2 JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.1/js/lightbox.min.js"></script>
</head>
<body>

    <!--Header-->
    <header>
        <a href="#home" class="logo">Kaynn</a>

        <ul class="navbar">
            <li><a href="#home" class="scroll-link">Home</a></li>
            <li><a href="#about" class="scroll-link">About</a></li>
            <li><a href="#skills" class="scroll-link">Skills</a></li>
            <li><a href="#projects" class="scroll-link">Projects</a></li>
            <li><a href="#achievements" class="scroll-link">Achievement</a></li>
            <li><a href="#certificates" class="scroll-link">Certificates</a></li>
            <li><a href="#contact" class="scroll-link">Contact</a></li>
        </ul>
        
        <!-- Add the login and register buttons here -->
        <div class="user-buttons">
            <a href="login.php" class="login-btn">Login</a>
            <a href="register.php" class="register-btn">Register</a>
        </div>

        <div class="bx bx-menu" id="menu-icon"></div>
    </header>

    <!--home-->
    <section class="home hidden" id="home">
        <div class="home-text">
          <h5>What's up? I am Kyan Oclares,</h5>
          <h1 id="typed-text">Website Developer</h1>
      
          <div class="socials-logo">
            <a href="#">Follow Me on</a>
            <a href="https://www.facebook.com/oclareskyan426"><i class="ri-facebook-fill"></i></a>
            <a href="https://www.instagram.com/kaynnonig/"><i class="ri-instagram-line"></i></a>
            <a href="https://www.tiktok.com/@kaynn30"><i class="ri-tiktok-fill"></i></a>
            <a href="https://github.com/kaynn04"><i class="ri-github-line"></i></a>
            <a href="#"><i class="ri-linkedin-fill"></i></a>
          </div>
        </div>
      
        <div class="home-img">
          <img src="Images/me.png" alt="Your image" />
        </div>

    </section>

    <!--About-->

    <section class="about hidden" id="about">
        <div class="center">
            <div class="h-main">
                <div class="h-text">
                    <h2>about</h2>
                </div>
            </div>
            <p>
                My name is Kyan Oclares, and I am a 20-year-old student at National University, pursuing a degree in BS Information Technology - Mobile and Technology. I am dedicated to my studies, but I also enjoy engaging in extra-curricular activities such as the following:
            </p>
        </div>
        <div class="about-content">
            <div class="box">
                <h3>Watching Anime/Kdrama</h3>
                <p>Jujutsu Kaisen, Assassination Classroom, Attack on Titan, My Hero Academia, and more</p>
            </div>
            <div class="box">
                <h3>Playing Sports</h3>
                <p>Basketball, Volleyball, Table Tennis, Badminton, and more</p>
            </div>
            <div class="box">
                <h3>Playing Online Games</h3>
                <p>Tekken 8, Valorant, League of Legends, and more</p>
            </div>
        </div>
    </section>

    <!--Skills-->
    <section class="skills hidden" id="skills">
        <div class="center">
            <div class="h-main">
                <div class="h-text">
                    <h2>skills</h2>
                </div>
            </div>
            <p>
                Proficient in a diverse range of programming languages and technologies, my skill set reflects a strong foundation in the field of Information Technology. Here are some of the languages I have a background in:
            </p>
        </div>

        <div class="skills_category">
                <div class="category1">
                <p class="category-title1">Front End</p>
                <div class="skill" id="html">
                    <img class="logo html-logo active-logo" src="Images/skills/htmllogo.png" alt="HTML Logo">
                    <p>HTML</p>
                </div>
                <div class="skill" id="css">
                    <img class="logo css-logo active-logo" src="Images/skills/csslogo.png" alt="CSS Logo">
                    <p>CSS</p>
                </div>
                <div class="skill" id="javascript">                   
                    <img class="logo javascript-logo active-logo" src="Images/skills/javascriptlogo.png" alt="JavaScript Logo">
                    <p>JavaScript</p>
                </div>
                </div>
            
                <div class="category2">
                <p class="category-title2">Back End</p>
                <div class="skill" id="Python">          
                    <img class="logo python-logo active-logo" src="Images/skills/pythonlogo.png" alt="Python Logo">
                    <p>Python</p>
                </div>
                <div class="skill" id="Java">                   
                    <img class="logo java-logo active-logo" src="Images/skills/javalogo.png" alt="Java Logo">
                    <p>Java</p>
                </div>
                <div class="skill" id="mysql">
                    <img class="logo mysql-logo active-logo" src="Images/skills/mysqllogo.png" alt="MySQL Logo">
                    <p>MySQL</p>
                </div>
                </div>
            
                
                <div class="category3">
                <p class="category-title3">Others</p>
                <div class="skill" id="Figma">
                    <img class="logo figma-logo active-logo" src="Images/skills/figmalogo.png" alt="Figma Logo">
                    <p>Figma</p>
                </div>
                <div class="skill" id="Git">
                    <img class="logo github-logo active-logo" src="Images/skills/githublogo.png" alt="GitHub Logo">
                    <p>GitHub</p>
                </div>
                <div class="skill" id="Android-Studio">
                    <img class="logo androidstudio-logo active-logo" src="Images/skills/androidstudiologo.png" alt="GitHub Logo">
                    <p>Android Studio</p>
                </div>
        </div>
    </section>

    <!--Projects-->
    <section class="projects hidden" id="projects">
        <div class="center">
            <div class="h-main">
                <div class="h-text">
                    <h2>projects</h2>
                </div>
            </div>
            <p>
                My collection of projects that not only showcase my skills but also represent valuable lessons learned and continuous improvement. Here are some of my projects that is connected with web development:
            </p>
        </div>

        <div class="work-content">
            <div class="row">
                <img src="Images/calculator_project.png">
                <div class="main-row">
                    <div class="row-text">
                        <h5>HTML - CSS - JS</h5>
                        <h4>Calculator</h4>
                    </div>
                    <div class="row-icon">
                        <i class="ri-github-fill"></i>
                    </div>
                </div>
            </div>

            <div class="row">
                <img src="Images/galactic_grid.png">
                <div class="main-row">
                    <div class="row-text">
                        <h5>HTML - PHP - CSS - JS - MYSQL</h5>
                        <h4>Galactic-Grid</h4>
                    </div>
                    <div class="row-icon">
                        <i class="ri-github-fill"></i>
                    </div>
                </div>
            </div>

            <div class="row">
                <img src="Images/forms.png">
                <div class="main-row">
                    <div class="row-text">
                        <h5>HTML - CSS</h5>
                        <h4>Forms</h4>
                    </div>
                    <div class="row-icon">
                        <i class="ri-github-fill"></i>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!--Achievements-->
    <section class="achievements hidden" id="achievements">
        <div class="center">
            <div class="h-main">
                <div class="h-text">
                    <h2>achievements</h2>
                </div>
            </div>
            <p>
                Highlighting my proudest achievements—each a testament to dedication, resilience, and the pursuit of excellence.
            </p>
        </div>

        <div class="work-content">
            <div class="row">
                <img src="Images/deans.png">
                <div class="main-row">
                    <div class="row-text">
                        <h4>Deanlister</h4>
                        <h5>I consistently earned a place on the Dean's list throughout my academic journey. I also achieved a remarkable rank within the top 3 on the Dean's list.</h5>
                    </div>
                </div>
            </div>

            <div class="row">
                <img src="Images/highschool.jpg">
                <div class="main-row">
                    <div class="row-text">
                        <h4>Honor Student</h4>
                        <h5>I was an honor student throughout my grade school years and maintained this achievement until senior high school.</h5>
                    </div>
                </div>
            </div>

            <div class="row">
                <img src="Images/ssc.jpg">
                <div class="main-row">
                    <div class="row-text">
                        <h4>Leadership Award</h4>
                        <h5>I received this award upon completing my term as the president of the student body in grade 10 and vice president in grade 9.</h5>
                    </div>
                </div>
            </div>

            <div class="row">
                <img src="Images/rovers.jpg">
                <div class="main-row">
                    <div class="row-text">
                        <h4>Best Radiant Leader</h4>
                        <h5>In Grade 10, while serving as one of the radiant leaders, I earned this award. Our involvement included participating in an overnight event</h5>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!--certificates-->
    <section class="certificates hidden" id="certificates">
        <div class="center">
            <div class="h-main">
                <div class="h-text">
                    <h2>Certificates</h2>
                </div>
            </div>
            <p>
                Elevating my expertise, one certificate at a time. Explore my certified achievements showcasing dedication and continuous learning. (Click the image to see it clearly)
            </p>
        </div>

        <div class="certificate-scroll">
            <div class="certificate-item">
                <a href="Images/img-1.png" data-lightbox="certificates" class="certificate-item" data-title="Certificate 1">
                    <img src="Images/img-1.png" alt="Certificate 1">
                </a>
            </div>
            <div class="certificate-item">
                <a href="Images/img-2.png" data-lightbox="certificates" class="certificate-item" data-title="Certificate 2">
                    <img src="Images/img-2.png" alt="Certificate 2">
                </a>
            </div>
            <div class="certificate-item">
                <a href="Images/img-3.png" data-lightbox="certificates" class="certificate-item" data-title="Certificate 3">
                    <img src="Images/img-3.png" alt="Certificate 3">
                </a>
            </div>
            <div class="certificate-item">
                <a href="Images/img-4.png" data-lightbox="certificates" class="certificate-item" data-title="Certificate 4">
                    <img src="Images/img-4.png" alt="Certificate 4">
                </a>
            </div>
            <div class="certificate-item">
                <a href="Images/img-5.png" data-lightbox="certificates" class="certificate-item" data-title="Certificate 5">
                    <img src="Images/img-5.png" alt="Certificate 5">
                </a>
            </div>
            <div class="certificate-item">
                <a href="Images/img-6.png" data-lightbox="certificates" class="certificate-item" data-title="Certificate 6">
                    <img src="Images/img-6.png" alt="Certificate 6">
                </a>
            </div>
            <!-- Add more certificate items as needed -->
        </div>
    </section>
    
    <!--contact-->
    <section class="contact hidden" id="contact">
        <div class="center">
            <div class="h-main">
                <div class="h-text">
                    <h2>contact</h2>
                </div>
            </div>
            <p>
                Feel free to drop me a line for collaboration, inquiries, or just a friendly chat. Excited to connect and explore new opportunities together!
            </p>
        </div>

        <div class="contact-form">
            <form action="">
                <input type="text" placeholder="Full Name..." class="blurred" disabled>
                <input type="email" placeholder="Email..." class="blurred" disabled>
                <textarea name="" id="" cols="30" rows="10" placeholder="Write a message here..." class="blurred" disabled></textarea>
                <input type="submit" name="" value="Send Message" class="send-btn blurred" id="send-btn" disabled>
                <p style="color: red; font-size: 14px;">Please log in to send a message.</p>
            </form>
        </div>
    </section>

    <div class="end-content">
        <a href="#home" class="scroll-top">
            <i class="ri-arrow-up-s-fill"></i>
        </a>

        <div class="copyright">
            <p>@ 2024 Kaynn . ALL RIGHTS RESERVED</p>
        </div>

        <div class="copyright">
            <p>DEVELOPED BY OCLARES</p>
        </div>
    </div>

    <!--JS file-->
    <script src="function.js"></script>

</body>
</html>