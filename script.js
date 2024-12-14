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
        <p class="popup-blurb">The Push-It! is an extendable, rotating wheelchair attachment that enables wheelchair users to open doors with ease. 
        </p>
        <br>
        <div class="left-text">
            <h4 style="font-family:Montserrat; font-size:30px">The Problem</h4><br>
            <ul style="font-size:15px; padding-left: 5%">
                <li>There are over 2.7 million wheelchair users in North America</li><br>
                <li>This number is growing exponentially due to our aging population and increasing longevity</li><br>
                <li>Currently, manual wheelchairs make up 61.1% of the wheelchairs in North America</li>
            </ul></div>
            <br>
            <img src="assets/wheelchair wikihow.jpeg" alt="MILO Image 0" class="centered-image"><br>
            <div class="left-text"><h4 style="font-family:Montserrat; font-size:30px">Initial Design</h4></div><br>
            <div class="image-row" style="justify-content:center">
            <div class="image-container-milo" style="justify-content:center">
                <img src="assets/push-it sketch.png" alt="MILO Image 1">
                <p class="image-blurb style="max-width:5rem; font-size:15px"><span style="font-weight:bold; font-size:20px"><em>Initial Sketch</span></em><br>The device consists of two arms (1 short and 1 long, with a high friction tip).</p>
            </div>
            <div class="image-container-milo">
                <img src="assets/push-it CAD.png" alt="MILO Image 2">
                <h4 class="image-blurb" style="font-weight:bold; font-size:20px"><em>CAD visualization</em></h4>
                <p class="image-blurb" style="font-size:15px">We used Solidworks to create an early-stage visualization of our concept to share with the client</p>
            </div>
        </div>
        <br><br>
        <img src="assets/design moments.png" alt="Long Push-It Image" class="long-image">
        <br><div class="centered-text">
            <p>Refined drawing of the Push-It!</p>
        <br></div></div>
        
        <div class="left-text">
            <h4 style="font-size:30px; font-family: Montserrat">Prototype</h4><br>
            <ul style="font-size:15px; padding-left: 5%">
                <li>The final prototype consists of a short arm connected to a telescoping longer arm with a high friction tip</li><br>
                <li>The user can pull the shorter arm towards them, which causes the longer arm to extend outward as a result of the two pivot points.</li><br>
                <li>The longer arm's high friction tip makes contact with the door and exerts a pushing force on it, taking advantage of moment-arms</li>
            </ul></div>
            <br>
            <img src="assets/push-it main visual.png" alt="MILO Image 0" class="centered-image"><br>
        <div class="left-text">
        <h4 style="font-size:30px; font-family: Montserrat">User Feedback</h4><br>
            <ul style="font-size:15px; padding-left: 5%">
                <li>We created a comprehensive User Testing Guide for our prototype and converted each feedback note into an action item for future iterations.</li><br>
                <li>One item we received was a push back on the wheelchair, so we created a prototype wheel locking system.</li><br>
                <li>Another feedback item was that the device was not aesthetically pleasing, so we added a color scheme!</li>
            </ul></div><br>
            <img src="assets/push-it michael.png" alt="MILO Image 0" class="centered-image"><br>
        </div>
        <p class="centered-text" style="font-family:Montserrat; font-size:36px"><b>Outcome</b></p>
        <br>
        <p class="centered-text" style="font-family:Arvo; margin-left:30%; margin-right:30%">We received the Design Award during the DTC Showcase in Winter 2023!</p>
        `},
    "MILO": {
        description: `
            <div class="popup-title">MILO</div>
            <p class="popup-blurb"><u>Role:</u> Project Manager &nbsp; | &nbsp; <u>Client:</u> Shirley Ryan AbilityLab <br><br>A voice-controlled robotic arm attachment for hospital beds, designed to promote patient independence during rehabilitation. A collaboration with Northwestern Medical Makers, the Shirley Ryan AbilityLab, and Stryker Corporation.</p>
            <br>
            
            <div class="left-text">
                <h4 style="font-family:Montserrat; font-size:30px">The Problem</h4><br>
                <ul style="font-size:15px; padding-left: 5%">
                    <li>Patients with paraplegia and quadriplegia experience significantly limited mobility</li><br>
                    <li>Those in rehab struggle with mental health due to their sudden feeling of helplessness</li><br>
                    <li>MILO aims to promote independence in these patients. Research has shown patients recover more rapidly with a positive mental state!</li>
                </ul>
                <br>
                <img src="assets/quadriplegia.png" alt="MILO Image 0" class="centered-image"><br>
                <h4 style="font-family:Montserrat; font-size:30px">Research</h4><br>
                <ul style="font-size:15px; padding-left: 5%">
                    <li>We visited Shirley Ryan AbilityLab and were able to meet with nurses and quadriplegic patients to define our key requirements.</li><br>
                    <li>We determined that we need a voice-controlled robotic arm that can carry a phone/tablet</li><br>
                    <li>We also determined a need for portability so nurses can easily move the device during emergencies / patient transfers.</li>
                </ul>
            </div>
            </div><br><br>
            <div class="left-text"><h4 style="font-family:Montserrat; font-size:30px">Our Design</h4><br></div>
            <div class="image-row" style="justify-content:center">
                <div class="image-container-milo" style="justify-content:center">
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
            <ul class="left-text" style="font-family:Arvo; font-size:15px"><li>The key internal design consists of a voice-recognition (VR) module and motor control (MC) module tied together, where each module consists of an Arduino connected to a few peripherals.</li><br> <li>The VR module processes the speech input and sends a 4bit binary number to the MC module, which recognizes the case and moves the servo appropriately to adjust the arm position.</li>
            </ul>
            <br><br>

            <div class="side-image-container">
                <img src="assets/MILO main visual.png" alt="MILO Image 3" class="side-image">
                <div class="side-blurb">
                    <h4 style="font-family:Montserrat; font-size:30px">CAD Modeling</h4>
                    <br><p>We utilized Solidworks to create a comprehensive CAD model of MILO, including the internal mechanical systems and the appropriate arm degrees of freedom (DOF).<br> MILO has 2 DOF, one linear (moving up and down) and one angular (rotating in the horizontal plane).
                    </p>
                </div>
            </div>
            <br>
            <div class="left-text"><h4 style="font-size:30px; font-family:Montserrat">Personal Achievements</h4><br>
                <ul style="font-size: 15px; padding-left: 5%"><li>Designer of voice recognition and motor control systems</li><br>
                <li>Single point of contact for cross-team interactions</li><br>
                <li>Owner of team budget, timelines, and milestones - ensure team is on track</li><br>
                <li>RESNA Finalist team representative</li></ul><br><br>
                <h4 style="font-size:30px; font-family:Montserrat">Next steps</h4><br>
                <ul style="font-size: 15px; padding-left: 5%"><li>Minimize cost of VR/MC modules by condensing into one module</li><br>
                <li>Select and acquire materials for fabrication</li><br>
                <li>Design linear actuator and rotational gear system for arm motion</li><br>
                <li>Develop prototypes and share with key users</li></ul>

        `,
    },
    "Line-following robot": {
        description: "<div class='container'><div class='title'>Line-following Robot</div><img src='assets/robot main visual.png' alt='Method Bottle Image'><div class='caption'><b>Skills:</b> PCB design, CAD, 3D printing, soldering, embedded programming (C).</div></div>"
    },
    "Method Bottle": {
        "description": "<div class='container'><div class='title'>Method Bottle</div><img src='assets/method bottle main visual v2.png' alt='Method Bottle Image'><div class='caption'><b>Skills:</b> Advanced solid modeling in Solidworks, utilizing solid modeling and surface modeling techniques.</div></div>"
    },
    
    "Motor Driver": {
        description: "<div class='container'><div class='title'>Motor Driver</div><img src='assets/motor driver main visual.jpg' alt='Method Bottle Image'><div class='caption'><b>Skills:</b> Embedded programming on PIC32 microcontroller (C), user interface coded using Python. Expansive library with two PID feedback control systems.</div></div>"
    }
    // Add more projects as needed
};


// Function to open the popup
function openPopup(projectName) {
    const popup = document.getElementById('popup');
    popup.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById("popup-description").innerHTML = projectsData[projectName].description;
    popup.style.display = 'flex';
    setTimeout(() => popup.classList.add('show-popup'), 10); // Trigger animation
}

function closePopup() {
    const popup = document.getElementById('popup');
    
    popup.classList.remove('show-popup');
    setTimeout(() => popup.style.display = 'none', 300); // Match transition duratio
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


