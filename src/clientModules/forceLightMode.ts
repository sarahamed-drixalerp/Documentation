import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  try {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'light');
  } catch {
    // ignore storage errors
  }

  document.documentElement.setAttribute('data-theme', 'light');
  document.documentElement.setAttribute('data-theme-choice', 'light');
  document.documentElement.style.colorScheme = 'light';
}
