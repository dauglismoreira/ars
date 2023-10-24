'use client'
export default function scrollToSection(sectionId, target = 0) {
    const section = document.getElementById(sectionId);

    if (section) {
        window.scrollTo({
            top: section.offsetTop - target,
            behavior: 'smooth',
        });
    }
}