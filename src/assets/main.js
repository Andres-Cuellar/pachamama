/* ============================================================
   PACHAMAMA — main.js
   Hamburger menu, nav scroll shadow, fade-in observer, FAQ accordion
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ─── Hamburger ─────────────────────────────────────────────
  
  // ─── FAQ Accordion ─────────────────────────────────────────
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item   = trigger.closest('.accordion-item');
      const body   = item.querySelector('.accordion-body');
      const isOpen = body.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion-body.open').forEach(b => {
        b.classList.remove('open');
        b.previousElementSibling?.classList.remove('open');
      });

      // Open current
      if (!isOpen) {
        body.classList.add('open');
        trigger.classList.add('open');
      }
    });
  });
});
