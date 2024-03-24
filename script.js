const openModalButtons = document.querySelectorAll('.open-modal');
const closeModalButtons = document.querySelectorAll('.close-button');
const semesterLinks = document.querySelectorAll('.semester-link');
const contentSections = document.querySelectorAll('.content');

openModalButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); 
    const modalTarget = button.dataset.modalTarget;
    const modal = document.getElementById(modalTarget);
    modal.style.display = 'block';
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.style.display = 'none';
  });
});

semesterLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    // Remove 'active' class from previously active link
    semesterLinks.forEach(l => l.classList.remove('active'));

    // Add 'active' class to this clicked link
    this.classList.add('active');

    // Hide all content sections
    contentSections.forEach(section => section.style.display = 'none');

    // Display the targeted semester section
    const targetSemester = parseInt(this.dataset.semester);
    const targetSection = document.querySelector(`.content[data-semester="${targetSemester}"]`);

    // Check if targetSection exists before attempting to set its style
    if (targetSection) {
      targetSection.style.display = 'block';
    }
  });
});


// Add event listeners for "Read More" buttons
document.querySelectorAll('.box button').forEach(button => {
  button.addEventListener('click', function (event) {
      event.preventDefault();

      // Retrieve the associated download link
      const downloadLink = this.getAttribute('data-download-link');

      // Perform download or redirect to the download link
      if (downloadLink) {
          window.open(downloadLink, '_blank');
      }
  });
});


 