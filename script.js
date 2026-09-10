/* =========================================================
   MΛD06 PORTFOLIO
   JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PRELOADER
       ===================================================== */

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {

        setTimeout(() => {
            preloader.classList.add("hide");
        }, 700);

    });


    /* =====================================================
       NAVBAR SCROLL EFFECT
       ===================================================== */

    const navbar = document.getElementById("navbar");

    function updateNavbar() {

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-open");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("mobile-open")) {

            icon.classList.remove("bi-list");
            icon.classList.add("bi-x-lg");

        } else {

            icon.classList.remove("bi-x-lg");
            icon.classList.add("bi-list");

        }

    });


    /* Close mobile menu after clicking a link */

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("mobile-open");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("bi-x-lg");
            icon.classList.add("bi-list");

        });

    });


    /* =====================================================
       TYPING EFFECT
       ===================================================== */

    const typingElement = document.getElementById("typing");

    const roles = [
        "Software Developer",
        "Web Developer",
        "Frontend Developer",
        "UI Enthusiast"
    ];

    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentRole = roles[roleIndex];

        if (!deleting) {

            typingElement.textContent =
                currentRole.substring(
                    0,
                    characterIndex + 1
                );

            characterIndex++;

            if (characterIndex === currentRole.length) {

                deleting = true;

                setTimeout(typeEffect, 1700);

                return;
            }

        } else {

            typingElement.textContent =
                currentRole.substring(
                    0,
                    characterIndex - 1
                );

            characterIndex--;

            if (characterIndex === 0) {

                deleting = false;

                roleIndex =
                    (roleIndex + 1) % roles.length;

            }

        }

        const speed = deleting ? 45 : 80;

        setTimeout(typeEffect, speed);
    }

    typeEffect();


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-link");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveLink
    );

    updateActiveLink();


    /* =====================================================
       CURSOR GLOW
       ===================================================== */

    const cursorGlow =
        document.querySelector(".cursor-glow");

    const isTouchDevice =
        window.matchMedia(
            "(pointer: coarse)"
        ).matches;


    if (!isTouchDevice) {

        document.addEventListener(
            "mousemove",
            event => {

                cursorGlow.style.left =
                    `${event.clientX}px`;

                cursorGlow.style.top =
                    `${event.clientY}px`;

                cursorGlow.style.opacity = "1";

            }
        );

        document.addEventListener(
            "mouseleave",
            () => {

                cursorGlow.style.opacity = "0";

            }
        );

    }


    /* =====================================================
       MAGNETIC BUTTONS
       ===================================================== */

    if (!isTouchDevice) {

        const magneticButtons =
            document.querySelectorAll(".magnetic");

        magneticButtons.forEach(button => {

            button.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        button.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;

                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;

                    button.style.transform =
                        `translate(${x * 0.12}px, ${y * 0.12}px)`;

                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    button.style.transform =
                        "translate(0, 0)";

                }
            );

        });

    }


    /* =====================================================
       3D PROFILE CARD
       ===================================================== */

    const profileCard =
        document.querySelector(".profile-card");

    if (!isTouchDevice && profileCard) {

        profileCard.addEventListener(
            "mousemove",
            event => {

                const rect =
                    profileCard.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                const rotateY =
                    ((x / rect.width) - 0.5) * 10;

                const rotateX =
                    ((y / rect.height) - 0.5) * -10;

                profileCard.style.transform =
                    `rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );


        profileCard.addEventListener(
            "mouseleave",
            () => {

                profileCard.style.transform =
                    "rotate(-4deg)";

            }
        );

    }


    /* =====================================================
       SMOOTH ANCHOR SCROLL
       ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(anchor => {

        anchor.addEventListener(
            "click",
            event => {

                const targetId =
                    anchor.getAttribute("href");

                if (
                    targetId === "#" ||
                    !document.querySelector(targetId)
                ) {
                    return;
                }

                event.preventDefault();

                const target =
                    document.querySelector(targetId);

                const navbarHeight =
                    navbar.offsetHeight + 20;

                const targetPosition =
                    target.offsetTop -
                    navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }
        );

    });


    /* =====================================================
       PARALLAX BACKGROUND
       ===================================================== */

    const heroGrid =
        document.querySelector(".hero-grid");

    const orbOne =
        document.querySelector(".orb-one");

    const orbTwo =
        document.querySelector(".orb-two");


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY < window.innerHeight) {

                const scroll =
                    window.scrollY;

                if (heroGrid) {
                    heroGrid.style.transform =
                        `translateY(${scroll * 0.12}px)`;
                }

                if (orbOne) {
                    orbOne.style.transform =
                        `translateY(${scroll * 0.08}px)`;
                }

                if (orbTwo) {
                    orbTwo.style.transform =
                        `translateY(${scroll * -0.06}px)`;
                }

            }

        }
    );


    /* =====================================================
       KEYBOARD ACCESSIBILITY
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                navLinks.classList.remove(
                    "mobile-open"
                );

                const icon =
                    menuBtn.querySelector("i");

                icon.classList.remove(
                    "bi-x-lg"
                );

                icon.classList.add(
                    "bi-list"
                );

            }

        }
    );

});
/* =========================================
   MΛD06 PORTFOLIO — SCRIPT.JS
========================================= */


/* =========================================
   PRELOADER
========================================= */

window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");

    if (preloader) {
        setTimeout(() => {
            preloader.classList.add("hide");
        }, 700);
    }
});


/* =========================================
   NAVBAR SCROLL
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", () => {

        navMenu.classList.toggle("active");
        menuButton.classList.toggle("active");

    });


    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");
            menuButton.classList.remove("active");

        });

    });

}


/* =========================================
   TYPING EFFECT
========================================= */

const typingElement = document.querySelector("#typing");

const roles = [
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
    "UI Enthusiast"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1600);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }
    }

    setTimeout(
        typeEffect,
        deleting ? 55 : 90
    );
}

typeEffect();


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================================
   ACTIVE NAV LINK
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================================
   CURSOR GLOW
========================================= */

const cursorGlow =
    document.querySelector(".cursor-glow");

if (
    cursorGlow &&
    window.matchMedia("(pointer: fine)").matches
) {

    window.addEventListener("mousemove", event => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    });

}


/* =========================================
   MAGNETIC BUTTONS
========================================= */

if (window.matchMedia("(pointer: fine)").matches) {

    document
        .querySelectorAll(".magnetic")
        .forEach(button => {

            button.addEventListener("mousemove", event => {

                const rect =
                    button.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;

                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;

                button.style.transform =
                    `translate(${x * 0.12}px, ${y * 0.12}px)`;

            });


            button.addEventListener("mouseleave", () => {

                button.style.transform =
                    "translate(0, 0)";

            });

        });

}


/* =========================================
   3D PROFILE CARD
========================================= */

const profileCard =
    document.querySelector(".profile-card");

if (
    profileCard &&
    window.matchMedia("(pointer: fine)").matches
) {

    profileCard.addEventListener("mousemove", event => {

        const rect =
            profileCard.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 12;

        const rotateX =
            ((y / rect.height) - 0.5) * -12;

        profileCard.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    profileCard.addEventListener("mouseleave", () => {

        profileCard.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg)";

    });

}


/* =========================================
   SMOOTH ANCHOR SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetID =
            link.getAttribute("href");

        if (
            !targetID ||
            targetID === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetID);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================
   HERO PARALLAX
========================================= */

const heroGrid =
    document.querySelector(".hero-grid");

const heroOrbs =
    document.querySelectorAll(".hero-orb");

if (
    heroGrid &&
    window.matchMedia("(pointer: fine)").matches
) {

    window.addEventListener("mousemove", event => {

        const x =
            (event.clientX / window.innerWidth - 0.5);

        const y =
            (event.clientY / window.innerHeight - 0.5);

        heroGrid.style.transform =
            `translate(${x * 8}px, ${y * 8}px)`;

        heroOrbs.forEach((orb, index) => {

            const strength =
                (index + 1) * 10;

            orb.style.transform =
                `translate(
                    ${x * strength}px,
                    ${y * strength}px
                )`;

        });

    });

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuButton) {
            menuButton.classList.remove("active");
        }

    }

});


/* =========================================
   CONTACT FORM
   FRONTEND ONLY — MAILTO
========================================= */

const contactForm =
    document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", event => {

        event.preventDefault();


        /* YOUR EMAIL */
        const receiver =
            "madhesh10806@gmail.com";


        /* GET FORM VALUES */
        const name =
            document.querySelector("#name").value.trim();

        const email =
            document.querySelector("#email").value.trim();

        const subject =
            document.querySelector("#subject").value.trim();

        const message =
            document.querySelector("#message").value.trim();


        /* VALIDATION */
        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {

            alert("Please fill in all fields.");

            return;
        }


        /* EMAIL BODY */
        const emailBody =
`Hello Madhesh,

You received a new message from your portfolio.

Name: ${name}
Email: ${email}

Message:
${message}

------------------------------
Sent from MΛD06 Portfolio
`;


        /* CREATE MAILTO LINK */
        const mailtoURL =
            `mailto:${receiver}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(emailBody)}`;


        /* OPEN EMAIL APP */
        window.location.href = mailtoURL;


        /* RESET FORM */
        setTimeout(() => {
            contactForm.reset();
        }, 500);

    });

}


/* =========================================
   CONTACT EMAIL LINKS
========================================= */

document
    .querySelectorAll(
        'a[href="mailto:yourmail@gmail.com"]'
    )
    .forEach(link => {

        link.href =
            "mailto:madhesh10806@gmail.com";

    });


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "%cMΛD06 Portfolio",
    "font-size:20px;font-weight:bold;"
);

console.log(
    "%cBuilt with HTML, CSS & JavaScript.",
    "font-size:12px;"
);
