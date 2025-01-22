// JavaScript for collapsible FAQ
document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isExpanded = button.classList.contains('expanded');
  
      // Close all answers
      document.querySelectorAll('.faq-answer').forEach((el) => {
        el.style.maxHeight = null;
      });
      document.querySelectorAll('.faq-question').forEach((el) => {
        el.classList.remove('expanded');
      });
  
      // Open the clicked answer
      if (!isExpanded) {
        button.classList.add('expanded');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
  