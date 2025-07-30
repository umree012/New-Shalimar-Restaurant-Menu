document.addEventListener('DOMContentLoaded', function () {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Show corresponding section on bubble click
  const bubbles = document.querySelectorAll('.bubble');
  const sections = document.querySelectorAll('.menu-section');

  bubbles.forEach(bubble => {
    bubble.addEventListener('click', () => {
      const targetId = bubble.getAttribute('data-target');

      // Hide all sections
      sections.forEach(section => section.classList.add('hidden'));

      // Show the selected one
      document.getElementById(targetId).classList.remove('hidden');
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      let isUrdu = true;


    });
  });
});
