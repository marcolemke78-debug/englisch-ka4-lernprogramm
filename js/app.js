/**
 * App-Einstieg für das Englisch-KA4-Lernprogramm.
 * Definiert die Lektionsliste (LESSONS) und steuert die Navigation.
 *
 * Die eigentlichen Lektionsinhalte stehen in den js/lessons-*.js-Dateien
 * und tragen sich ins globale Register window.LESSON_DATA ein.
 */
const LESSONS = [
  // Modul 1: Wortschatz (Unit 4)
  { id: 1, title: 'California dreams – Wortschatz', module: 'vocab' },
  { id: 2, title: 'Werbung & Anzeigen – Wortschatz', module: 'vocab' },
  { id: 3, title: 'Social Media & Trends – Wortschatz', module: 'vocab' },
  // Modul 2: Grammatik
  { id: 4, title: 'Simple present & present progressive', module: 'grammar' },
  { id: 5, title: 'Adjektiv oder Adverb?', module: 'grammar' },
  { id: 6, title: 'Present perfect', module: 'grammar' },
  // Modul 3: Fit für die KA
  { id: 7, title: 'Gemischte Übungen (KA-Format)', module: 'training' },
  { id: 8, title: 'Hörverstehen (Listening)', module: 'training' },
  { id: 9, title: 'Probe-Klassenarbeit', module: 'training' },
];

function navigateToLesson(id) {
  document.getElementById('progress-bar-container').style.display = '';
  document.getElementById('sidebar').classList.remove('open');
  // Wiederholungs-Box ausblenden, sobald aktiv in eine Lektion navigiert wird.
  const reviewBox = document.getElementById('review-due');
  if (reviewBox) reviewBox.style.display = 'none';
  Progress.setLastLesson(id);
  if (Progress.getStatus(id) === 'not_started') {
    Progress.setStatus(id, 'in_progress');
  }
  document.querySelectorAll('#sidebar li').forEach(li => li.classList.remove('active'));
  Renderer.renderLesson(id);
  Renderer.renderSidebar(LESSONS);
  Renderer.renderProgressBar();
  const activeItem = document.querySelector(`#sidebar li[data-lesson-id="${id}"]`);
  if (activeItem) activeItem.classList.add('active');
  // nach oben scrollen, damit der Lektionstitel sichtbar ist
  const main = document.getElementById('content');
  if (main) main.scrollTop = 0;
  window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', () => {
  Renderer.renderSidebar(LESSONS);
  Renderer.renderProgressBar();
  const lastLesson = Progress.getLastLesson();
  navigateToLesson(lastLesson);
  // Begrüßung: Fällig-Box NACH der initialen Navigation zeigen.
  Renderer.renderReviewDue();

  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
  document.getElementById('reset-progress').addEventListener('click', () => {
    if (confirm('Fortschritt wirklich zurücksetzen?')) {
      Progress.reset();
      location.reload();
    }
  });
});
