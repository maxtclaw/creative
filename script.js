const accordionButtonAllEl = document.querySelectorAll('.accordionButton');

// loop through all .accordionButton elements and create event listeners for each instance
for (let i = 0; i < accordionButtonAllEl.length; i++) {
    accordionButtonAllEl[i].addEventListener('click', function (event) {
        // Toggle Arrow Icon on Click
        this.firstElementChild.firstElementChild.classList.toggle('fa-angle-down');
        this.firstElementChild.firstElementChild.classList.toggle('fa-angle-right');
    
        // Selecting the Accordion Container Element
        const accordionContainerEl = this.parentElement.lastElementChild;
    
        // Toggle Visibility Class (tracks visibility of container)
        accordionContainerEl.classList.toggle('accordion-container-visible');
    
        // Adjust max-height depending on visibility
        if (accordionContainerEl.classList.contains("accordion-container-visible")) {
            // Give accordion-container height of its content
            accordionContainerEl.style.maxHeight = accordionContainerEl.scrollHeight + "px";
        } else {
            // Remove accordion-container's height
            accordionContainerEl.style.maxHeight = 0 + "px"
        }
    })
}