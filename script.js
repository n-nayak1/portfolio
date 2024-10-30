function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
    const topBanner = document.getElementById('topBanner');
    const homeSection = document.getElementById('home');
    if (window.scrollY > homeSection.offsetHeight) {
        topBanner.classList.add('visible');
    } else {
        topBanner.classList.remove('visible');
    }
});

// Project data
const projectsData = {
    "Push-It!": {
        description: `
        <div class="popup-title">Push-It!</div>
        <p class="popup-blurb">The Push-It! is a extendable, rotating, wheelchair attachment that allows manual wheelchair users to push open doors with ease. The main components of design are the user-operated "L-arm" which consists of a long moment arm, as well as the extendable contact arm which features a high friction tip in order to maintain contact with the door during use.
        </p>
        <br><br>
        <div class="side-image-container">
            <img src="assets/wheelchair wikihow.jpeg" alt="Push-It Image 1" class="side-image">
            <div class="side-blurb">
                <h4 style="font-size:25px">Key User</h4><br>
                <ul style="font-size:15px">
                    <li>In North America, there are more 2.7 million wheelchair users</li><br>
                    <li>This number is only expected to grow exponentially due to our aging population and increasing longevity</li><br>
                    <li>Currently, manual wheelchairs make up 61.1% of the wheelchairs in North America</li>
                </ul>
            </div>
        </div>
        <br><br>
        <div class="image-row">
            <div class="stacked-images">
                <div class="image-container-pushit">
                    <img src="assets/push-it sketch.png" alt="Push-It Image 2">
                    <p class="image-blurb">Sketch of Design</p>
                </div>
                <div class="image-container-pushit">
                    <img src="assets/push-it CAD.png" alt="Push-It Image 3">
                    <p class="image-blurb">CAD visualization</p>
                </div>
            </div>
            <div class="image-container-pushit right-aligned">
                <img src="assets/push-it main visual.png" alt="Push-It Image 4">
                <p class="image-blurb">Prototype</p>
            </div>
        </div>
        <br><br>
        <img src="assets/design moments.png" alt="Long Push-It Image" class="long-image" >
        <br><br>
        <p class="centered-text" style="font-family:Arvo">After speaking with key users and brainstorming, we were able to put together a preliminary sketch of our solution. I created a CAD visualization to share with our client, and from there, we began the mock-up process.
        </p>
        <br><br>
        <div class="side-image-container">
            <img src="assets/push-it michael.png" alt="Push-It Image 5" class="side-image">
            <div class="side-blurb">
                <h4 style="font-family:Montserrat; font-size:30px">Improving with user feedback</h4>
                <br><p>We also created a comprehensive User Testing Guide for our prototype and turned each piece of feedback into an action item for future iterations.
                </p>
            </div>
        </div>
        <br><br>
        <p class="centered-text" style="font-family:Montserrat; font-size:36px"><b>Outcome</b></p>
        <br>
        <p class="centered-text" style="font-family:Arvo">We were able to present in the DTC Design Showcase and received the Design Award in our category!</p>
        `},
    "MILO": {
        description: `
            <div class="popup-title">MILO</div>
            <p class="popup-blurb">A voice-controlled robotic arm attachment for hospital beds, designed to promote patient independence during rehabilitation.</p>
            <br>
            <div class="side-image-container">
                <img src="assets/quadriplegia.png" alt="MILO Image 0" class="side-image">
                <div class="side-blurb">
                    <h4 style="font-family:Montserrat; font-size:30px">The Problem</h4><br>
                    <ul style="font-size:15px">
                        <li>Patients with paraplegia and quadriplegia experience significantly limited functions and mobility</li><br>
                        <li>Those in rehab commonly struggle with mental health due to their sudden dependence on others - they feel helpless</li><br>
                        <li>MILO aims to promote independence in these patients. Research has shown patients recover more rapidly with a positive mental state!</li>
                    </ul>
                </div>
            </div><br><br>
            <div class="image-row">
                <div class="image-container-milo" style="margin-left:15rem">
                    <img src="assets/vr module.png" alt="MILO Image 1">
                    <p class="image-blurb style="max-width:5rem"><span style="font-weight:bold; font-size:20px"><em>Voice Recognition Module</span></em><br>A microphone connected to an amplifier and low pass filter, wired to an Arduino for processing.</p>
                </div>
                <div class="image-container-milo">
                    <img src="assets/servo module.png" alt="MILO Image 2">
                    <h4 class="image-blurb" style="font-weight:bold; font-size:20px"><em>Motor Control Module</em></h4>
                    <p class="image-blurb">A servo motor connected to an Arduino for control and modulation.</p>
                </div>
            </div>
            <br><br>
            <p class="centered-text" style="font-family:Arvo">The voice-recognition module processes the speech input and sends a 4bit binary number to the motor control Arduino, which recognizes the case and moves the servo appropriately.
            </p>
            <br><br>

            <div class="side-image-container">
                <img src="assets/MILO main visual.png" alt="MILO Image 3" class="side-image">
                <div class="side-blurb">
                    <h4 style="font-family:Montserrat; font-size:30px">CAD Modeling</h4>
                    <br><p>We utilized Solidworks to create a comprehensive CAD model of MILO, including the internal mechanical systems and the appropriate arm degrees of freedom (DOF).<br> MILO has 2 DOF, one linear (moving up and down) and one angular (rotating in the horizontal plane.
                    </p>
                </div>
            </div>
            <br>
            <div class="centered-text">
                <h4 style="font-size:40px">Project Management</h4><br>
                <p>Dividing subteams and assigning leads<br><br>
                Serving as SPOC for cross-team communication<br><br>
                Setting timelines, milestones, and meeting direction<br><br></p>
                <h4 style="font-size:40px">Next steps</h4><br>
                <p>Minimize cost of VR/motor control module<br><br>
                Choose and acquire materials for fabrication<br><br>
                Design linear actuator and rotational gear system for arm motion<br><br>
                Develop prototypes and share with key users</p>

        `,
    },
    "Line-following robot": {
        title: "Line-following robot",
        description: "A robot that uses feedback control loops to follow a line.",
        image: "assets/robot main visual.png"
    },
    "Method Bottle": {
        title: "Method Bottle",
        description: "A reverse-engineered CAD model of an everyday object.",
        image: "assets/method bottle main visual v2.png"
    },
    "Motor Driver": {
        title: "Motor Driver",
        description: "A DC motor driver with a Python control interface.",
        image: "assets/motor driver main visual.JPG"
    }
    // Add more projects as needed
};


// Function to open the popup
function openPopup(projectName) {
    const project = projectsData[projectName];

    if (project) {
        // Populate the popup title and description with the specific project data
        document.getElementById("popup-description").innerHTML = project.description; // Use innerHTML for the description
        
        // Display the popup
        document.getElementById("popup").style.display = "flex";
        document.getElementById("overlayBackground").style.display = "block"; // Show overlay
    }
    setTimeout(() => {
        popupContainer.classList.add('show-popup'); // Add class to trigger transition
    }, 10); // Small delay to ensure the display is applied

}



function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById("overlayBackground").style.display = "none"; // Hide overlay

    setTimeout(() => {
        popupContainer.style.display = 'none'; // Hide after animation ends
    }, 300); // Match the duration of the transition
}

// Function to scroll back to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the back-to-top button when scrolling down
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > 300) { // Show when 300px down
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
