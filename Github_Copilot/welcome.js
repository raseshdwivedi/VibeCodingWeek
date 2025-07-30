// welcome.js
// Modern SaaS landing page inspired by lovable.dev

document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.background = "linear-gradient(120deg, #f8fafc 0%, #e0eafc 100%)";
document.body.style.fontFamily = "'Montserrat', 'Roboto', Arial, sans-serif";
document.body.innerHTML = `
  <nav style="position: fixed; top: 0; left: 0; width: 100%; height: 72px; background: #fff; box-shadow: 0 2px 16px rgba(44,62,80,0.08); display: flex; align-items: center; justify-content: space-between; z-index: 10; padding: 0 48px;">
    <div style="font-size: 1.6rem; font-weight: 700; color: #232526; letter-spacing: 2px;">Infra Templates</div>
    <ul style="list-style: none; display: flex; align-items: center; margin: 0; padding: 0; gap: 2rem;">
      <li><a href="#" style="text-decoration: none; color: #232526; font-size: 1.1rem; font-weight: 600;">Home</a></li>
      <li><a href="#" style="text-decoration: none; color: #232526; font-size: 1.1rem; font-weight: 600;">About</a></li>
      <li><button id="login-btn" type="button" style="padding: 0.5rem 1.5rem; border-radius: 24px; border: none; background: linear-gradient(90deg, #232526 0%, #66a6ff 100%); color: #fff; font-size: 1.1rem; font-weight: 600; box-shadow: 0 2px 8px rgba(102,166,255,0.18); cursor: pointer;">Login / Register</button></li>
    </ul>
  </nav>
  <main style="display: flex; flex-direction: row; align-items: flex-start; justify-content: center; min-height: 100vh; padding-top: 120px;">
    <section style="background: #fff; padding: 56px 80px; border-radius: 36px; box-shadow: 0 16px 48px rgba(44,62,80,0.12); text-align: center; max-width: 640px; width: 100%; margin-top: 40px; position: relative;">
      <h1 style="font-size: 3.2rem; font-weight: 700; color: #232526; margin-bottom: 18px; letter-spacing: 2px;">Launch Your Cloud Infrastructure in Minutes</h1>
      <p style="font-size: 1.35rem; color: #4a6fa5; margin-bottom: 32px; font-weight: 500;">Choose a template, customize, and deploy instantly. Perfect for SaaS, startups, and enterprise teams.</p>
      <button style="padding: 18px 48px; font-size: 1.2rem; font-weight: 700; color: #fff; background: linear-gradient(90deg, #66a6ff 0%, #89f7fe 100%); border: none; border-radius: 32px; box-shadow: 0 2px 12px rgba(102,166,255,0.18); cursor: pointer; margin-bottom: 18px;">Get Started</button>
      <div id="service-select-container" style="display:none; margin-top:24px;"></div>
      <button id="use-template-btn" style="display:none; padding: 14px 40px; font-size: 1.15rem; font-weight: 600; color: #fff; background: linear-gradient(90deg, #66a6ff 0%, #89f7fe 100%); border: none; border-radius: 28px; box-shadow: 0 2px 12px rgba(102,166,255,0.18); cursor: pointer; margin-top: 18px;">Use Template</button>
      <div id="actions-container" style="display:none; margin-top:18px;">
        <button id="download-btn" style="padding: 12px 32px; font-size: 1.05rem; margin-right: 16px; border-radius: 24px; border: none; background: #fff; box-shadow: 0 2px 8px rgba(102,166,255,0.18); cursor: pointer; font-weight: 600;">
          <i class="fa fa-download" style="margin-right:8px;"></i>Download Template
        </button>
        <button id="git-btn" style="padding: 12px 32px; font-size: 1.05rem; border-radius: 24px; border: none; background: #fff; box-shadow: 0 2px 8px rgba(102,166,255,0.18); cursor: pointer; font-weight: 600;">
          <i class="fab fa-git-alt" style="margin-right:8px;"></i>Clone to Remote Repo
        </button>
      </div>
    </section>
    <aside style="flex: 1; min-width: 340px; max-width: 400px; margin-left: 48px; margin-top: 40px; display: flex; justify-content: flex-end;">
      <div id="auth-modal" style="background:#fff; border-radius:24px; box-shadow:0 8px 32px rgba(44,62,80,0.18); padding:40px 32px; min-width:320px; max-width:360px;">
        <h2 style="text-align:center; font-size:2rem; font-weight:700; color:#232526; margin-bottom:24px;">Login / Register</h2>
        <form id="login-form" style="display:block;">
          <input type="text" placeholder="Username" style="width:100%; padding:12px; margin-bottom:16px; border-radius:12px; border:1px solid #cfd8dc; font-size:1rem;" required />
          <input type="password" placeholder="Password" style="width:100%; padding:12px; margin-bottom:16px; border-radius:12px; border:1px solid #cfd8dc; font-size:1rem;" required />
          <button type="submit" style="width:100%; padding:12px; border-radius:12px; border:none; background:linear-gradient(90deg,#66a6ff 0%,#89f7fe 100%); color:#fff; font-size:1.1rem; font-weight:600; margin-bottom:12px;">Login</button>
        </form>
        <div style="text-align:center; margin-bottom:12px;">
          <span style="color:#4a6fa5; font-size:0.95rem;">or</span>
        </div>
        <form id="register-form" style="display:block;">
          <input type="text" placeholder="Username" style="width:100%; padding:12px; margin-bottom:16px; border-radius:12px; border:1px solid #cfd8dc; font-size:1rem;" required />
          <input type="email" placeholder="Email" style="width:100%; padding:12px; margin-bottom:16px; border-radius:12px; border:1px solid #cfd8dc; font-size:1rem;" required />
          <input type="password" placeholder="Password" style="width:100%; padding:12px; margin-bottom:16px; border-radius:12px; border:1px solid #cfd8dc; font-size:1rem;" required />
          <button type="submit" style="width:100%; padding:12px; border-radius:12px; border:none; background:linear-gradient(90deg,#232526 0%,#66a6ff 100%); color:#fff; font-size:1.1rem; font-weight:600;">Register</button>
        </form>
      </div>
    </aside>
  </main>
`;

// Add external CSS stylesheets for enhanced look
const style1 = document.createElement('link');
style1.rel = 'stylesheet';
style1.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
document.head.appendChild(style1);
const style2 = document.createElement('link');
style2.rel = 'stylesheet';
style2.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(style2);

// Modal logic
setTimeout(() => {
  const loginBtn = document.getElementById('login-btn');
  const modalBg = document.getElementById('modal-bg');
  const authModal = document.getElementById('auth-modal');
  const closeModal = document.getElementById('close-modal');
  if (loginBtn && modalBg && authModal && closeModal) {
    loginBtn.onclick = () => {
      modalBg.style.display = 'block';
      authModal.style.display = 'block';
      // Focus username input for better UX
      const usernameInput = authModal.querySelector('#login-form input[type="text"]');
      if (usernameInput) usernameInput.focus();
    };
    closeModal.onclick = () => {
      modalBg.style.display = 'none';
      authModal.style.display = 'none';
    };
    modalBg.onclick = () => {
      modalBg.style.display = 'none';
      authModal.style.display = 'none';
    };
  }
}, 100);

// Hide only the dropdowns and actions until login
const serviceSelectContainer = document.getElementById('service-select-container');
const useTemplateBtn = document.getElementById('use-template-btn');
const actionsContainer = document.getElementById('actions-container');
if (serviceSelectContainer) serviceSelectContainer.style.display = 'none';
if (useTemplateBtn) useTemplateBtn.style.display = 'none';
if (actionsContainer) actionsContainer.style.display = 'none';

// Show dropdowns and actions after successful login
const loginForm = document.getElementById('login-form');
if (loginForm) {
  let loginHandled = false;
  loginForm.onsubmit = async e => {
    e.preventDefault();
    if (loginHandled) return;
    loginHandled = true;
    const inputs = loginForm.querySelectorAll('input');
    const data = {
      username: inputs[0].value,
      password: inputs[1].value
    };
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      if (res.ok) {
        // Success: redirect to dashboard
        window.location.href = '/dashboard.html';
        // Add signout button and username to nav
        setTimeout(() => {
          const navList = document.querySelector('nav ul');
          if (navList) {
            // Remove login button if present
            const loginBtn = document.getElementById('login-btn');
            if (loginBtn) loginBtn.style.display = 'none';
            // Remove previous username/signout if present
            const oldUser = document.getElementById('nav-username');
            if (oldUser) navList.removeChild(oldUser);
            const oldSignout = document.getElementById('nav-signout');
            if (oldSignout) navList.removeChild(oldSignout);
            // Add username
            const usernameLi = document.createElement('li');
            usernameLi.id = 'nav-username';
            usernameLi.innerHTML = `<span style="padding: 0.5rem 1.5rem; border-radius: 24px; background: linear-gradient(90deg, #232526 0%, #66a6ff 100%); color: #fff; font-size: 1.1rem; font-weight: 600; box-shadow: 0 2px 8px rgba(102,166,255,0.18);">${data.username}</span>`;
            navList.appendChild(usernameLi);
            // Add signout button
            const signoutLi = document.createElement('li');
            signoutLi.id = 'nav-signout';
            signoutLi.innerHTML = `<button id="signout-btn" style="padding: 0.5rem 1.5rem; border-radius: 24px; border: none; background: linear-gradient(90deg, #e74c3c 0%, #ffb347 100%); color: #fff; font-size: 1.1rem; font-weight: 600; box-shadow: 0 2px 8px rgba(231,76,60,0.18); cursor: pointer;">Sign Out</button>`;
            navList.appendChild(signoutLi);
            // Signout logic
            document.getElementById('signout-btn').onclick = function() {
              // Remove username and signout button
              if (usernameLi) navList.removeChild(usernameLi);
              if (signoutLi) navList.removeChild(signoutLi);
              // Show login button again
              if (loginBtn) loginBtn.style.display = 'inline-block';
              // Hide cloud/service dropdowns and actions
              if (cloudSelect) cloudSelect.style.display = 'none';
              if (serviceSelectContainer) serviceSelectContainer.style.display = 'none';
              if (useTemplateBtn) useTemplateBtn.style.display = 'none';
              if (actionsContainer) actionsContainer.style.display = 'none';
            };
          }
        }, 100);
      } else {
        // Error: show message
        alert(result.message || 'Login failed. Please try again.');
        loginHandled = false;
      }
    } catch (err) {
      console.error(err);
      alert('An unexpected error occurred. Please try again later.');
      loginHandled = false;
    }
  }
}

// Register form submission handling
const registerForm = document.getElementById('register-form');
if (registerForm) {
  let registerHandled = false;
  registerForm.onsubmit = async e => {
    e.preventDefault();
    if (registerHandled) return;
    registerHandled = true;
    const inputs = registerForm.querySelectorAll('input');
    const data = {
      username: inputs[0].value,
      email: inputs[1].value,
      password: inputs[2].value
    };
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      if (res.ok) {
        // Success: auto-login and redirect to dashboard
        const loginRes = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: data.username, password: data.password })
        });
        if (loginRes.ok) {
          window.location.href = '/dashboard.html';
        } else {
          alert('Registration successful, but auto-login failed. Please log in manually.');
          registerHandled = false;
        }
      } else {
        // Error: show message
        alert(result.message || 'Registration failed. Please try again.');
        registerHandled = false;
      }
    } catch (err) {
      console.error(err);
      alert('An unexpected error occurred. Please try again later.');
      registerHandled = false;
    }
  }
}

// Show service selection and actions on template selection
document.getElementById('service-select-container').style.display = 'block';
document.getElementById('use-template-btn').style.display = 'block';
document.getElementById('actions-container').style.display = 'block';

// Template selection logic
const templates = [
  {
    name: "Basic Web App",
    description: "A simple web application template.",
    cloudProvider: "AWS",
    language: "Node.js",
    framework: "Express",
    database: "MongoDB",
    id: "basic-web-app"
  },
  {
    name: "E-commerce Platform",
    description: "A complete e-commerce solution.",
    cloudProvider: "Azure",
    language: "Python",
    framework: "Django",
    database: "PostgreSQL",
    id: "ecommerce-platform"
  },
  {
    name: "Blog Platform",
    description: "A platform for hosting blogs.",
    cloudProvider: "GCP",
    language: "Go",
    framework: "Gin",
    database: "Cloud SQL",
    id: "blog-platform"
  }
];

function updateServiceSelect(templateId) {
  const template = templates.find(t => t.id === templateId);
  const serviceSelect = document.getElementById('cloud-select');
  const serviceLabel = document.querySelector('label[for="cloud-select"]');
  if (template) {
    const { cloudProvider } = template;
    // Show the cloud provider dropdown
    if (serviceSelect) {
      serviceSelect.style.display = 'block';
      serviceSelect.innerHTML = `
        <option value="${cloudProvider}" selected>${cloudProvider}</option>
      `;
    }
    // Show the cloud provider label
    if (serviceLabel) {
      serviceLabel.style.display = 'block';
      serviceLabel.innerHTML = `Cloud Provider: ${cloudProvider}`;
    }
  } else {
    // Hide the cloud provider dropdown and label if no template is selected
    if (serviceSelect) serviceSelect.style.display = 'none';
    if (serviceLabel) serviceLabel.style.display = 'none';
  }
}

// Initial population of service select options
updateServiceSelect(templates[0].id);

// Template selection buttons
const templateButtons = templates.map(template => `
  <button type="button" class="template-btn" data-template-id="${template.id}" style="display:block; width:100%; padding:16px 24px; margin-bottom:16px; border-radius:12px; border:1px solid #cfd8dc; background:#fff; box-shadow:0 4px 12px rgba(44,62,80,0.08); cursor:pointer;">
    <h3 style="font-size:1.25rem; font-weight:700; color:#232526; margin:0 0 8px 0;">${template.name}</h3>
    <p style="font-size:1rem; color:#4a6fa5; margin:0;">${template.description}</p>
  </button>
`).join('');
const serviceSelectContainer = document.getElementById('service-select-container');
if (serviceSelectContainer) {
  serviceSelectContainer.innerHTML = `
    <label for="cloud-select" style="font-size:1rem; font-weight:500; color:#232526; margin-bottom:8px; display:none;">Cloud Provider</label>
    <select id="cloud-select" style="width:100%; padding:12px; margin-bottom:16px; border-radius:12px; border:1px solid #cfd8dc; font-size:1rem; display:none;">
      <option value="">Select a cloud provider</option>
    </select>
  ` + templateButtons;
}

// Re-apply template selection logic after dynamic content update
document.querySelectorAll('.template-btn').forEach(btn => {
  btn.onclick = function() {
    const templateId = this.getAttribute('data-template-id');
    // Highlight selected button
    document.querySelectorAll('.template-btn').forEach(b => b.style.background = '#fff');
    this.style.background = '#e0f7fa';
    // Update service select options
    updateServiceSelect(templateId);
    // Show the "Use Template" button
    document.getElementById('use-template-btn').style.display = 'block';
  };
});

document.getElementById('use-template-btn').onclick = function() {
  const selectedOption = document.getElementById('cloud-select').value;
  if (!selectedOption) {
    alert('Please select a cloud provider before using the template.');
    return;
  }
  // Redirect to template usage page (mockup)
  window.location.href = `/template-usage.html?template=${selectedOption}`;
};

// Enhanced input focus effect
document.querySelectorAll('input').forEach(input => {
  input.onfocus = function() {
    this.parentNode.style.boxShadow = '0 0 8px rgba(102,166,255,0.4)';
    this.parentNode.style.borderColor = '#66a6ff';
  };
  input.onblur = function() {
    this.parentNode.style.boxShadow = 'none';
    this.parentNode.style.borderColor = '#cfd8dc';
  };
});

// Animated gradient background for buttons
const btnGradientAnimation = `
  @keyframes btnGradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  button {
    background: linear-gradient(90deg, #66a6ff 0%, #89f7fe 100%);
    background-size: 200% 100%;
    animation: btnGradient 3s ease infinite;
  }
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = btnGradientAnimation;
document.head.appendChild(styleSheet);

// Cloud provider logos
const cloudLogos = {
  AWS: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png',
  Azure: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png',
  GCP: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Google_Cloud_Platform_logo.svg/2560px-Google_Cloud_Platform_logo.svg.png'
};

function updateCloudLogo(provider) {
  const logoContainer = document.getElementById('cloud-logo');
  if (logoContainer) {
    if (provider && cloudLogos[provider]) {
      logoContainer.innerHTML = `<img src="${cloudLogos[provider]}" alt="${provider} Logo" style="max-width:100%; height:auto;">`;
    } else {
      logoContainer.innerHTML = '';
    }
  }
}

// Initial logo update
updateCloudLogo(templates[0].cloudProvider);

// Update logo on template selection
document.querySelectorAll('.template-btn').forEach(btn => {
  btn.onclick = function() {
    const templateId = this.getAttribute('data-template-id');
    const template = templates.find(t => t.id === templateId);
    if (template) {
      updateCloudLogo(template.cloudProvider);
    }
  };
});

// Smooth scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 72, // Adjust for fixed nav height
        behavior: 'smooth'
      });
    }
  });
});

// Form validation and submission with enhanced UX
document.querySelectorAll('form').forEach(form => {
  form.onsubmit = async function(e) {
    e.preventDefault();
    const inputs = this.querySelectorAll('input');
    let isValid = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = '#e74c3c';
        input.placeholder = 'This field is required';
      } else {
        input.style.borderColor = '#cfd8dc';
      }
    });
    if (!isValid) return;
    // Submit form data
    const formData = new FormData(this);
    const actionUrl = this.getAttribute('action');
    try {
      const res = await fetch(actionUrl, {
        method: 'POST',
        body: formData
      });
      const result = await res.json();
      if (res.ok) {
        // Success: show success message and reset form
        alert('Form submitted successfully!');
        this.reset();
      } else {
        // Error: show message
        alert(result.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('An unexpected error occurred. Please try again later.');
    }
  };
});

// Dynamic content loading for templates section
const templatesSection = document.getElementById('templates-section');
if (templatesSection) {
  templatesSection.innerHTML = templates.map(template => `
    <div class="template-card" style="background:#fff; border-radius:12px; box-shadow:0 4px 12px rgba(44,62,80,0.08); padding:24px; margin-bottom:24px;">
      <h3 style="font-size:1.5rem; font-weight:700; color:#232526; margin:0 0 12px 0;">${template.name}</h3>
      <p style="font-size:1rem; color:#4a6fa5; margin:0 0 16px 0;">${template.description}</p>
      <button type="button" class="select-template-btn" data-template-id="${template.id}" style="padding:12px 24px; border-radius:12px; border:none; background:linear-gradient(90deg,#66a6ff 0%,#89f7fe 100%); color:#fff; font-size:1.1rem; font-weight:600; cursor:pointer;">
        Select Template
      </button>
    </div>
  `).join('');
}

// Re-apply template selection logic after dynamic content update
document.querySelectorAll('.select-template-btn').forEach(btn => {
  btn.onclick = function() {
    const templateId = this.getAttribute('data-template-id');
    // Highlight selected card
    document.querySelectorAll('.template-card').forEach(card => card.style.border = 'none');
    this.parentNode.style.border = '2px solid #66a6ff';
    // Update service select options
    updateServiceSelect(templateId);
    // Show the "Use Template" button
    document.getElementById('use-template-btn').style.display = 'block';
  };
});

// Enhanced accessibility features
document.querySelectorAll('button, [tabindex]').forEach(el => {
  el.setAttribute('aria-hidden', 'false');
  el.setAttribute('tabindex', '0');
  el.style.outline = 'none';
  el.onfocus = function() {
    this.style.boxShadow = '0 0 0 3px rgba(102,166,255,0.4)';
  };
  el.onblur = function() {
    this.style.boxShadow = 'none';
  };
});

// Custom scrollbar styles
const scrollbarStyle = `
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #66a6ff;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
`;
const styleSheet2 = document.createElement("style");
styleSheet2.type = "text/css";
styleSheet2.innerText = scrollbarStyle;
document.head.appendChild(styleSheet2);

// Service worker registration for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

// Push notification subscription
async function subscribeUserToPush() {
  const registration = await navigator.serviceWorker.getRegistration();
  if (!registration) throw new Error('Service Worker not registered');
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlB64ToUint8Array('YOUR_PUBLIC_VAPID_KEY')
  });
  console.log('User subscribed to push notifications:', subscription);
  // TODO: Send subscription to server for storage
}

// Request notification permission and subscribe user
document.getElementById('enable-notifications-btn').onclick = async function() {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    try {
      await subscribeUserToPush();
      alert('You have successfully subscribed to push notifications.');
    } catch (err) {
      console.error(err);
      alert('Failed to subscribe to push notifications. Please try again later.');
    }
  } else {
    alert('Push notifications are disabled. You can enable them in your browser settings.');
  }
};

// Helper function to convert VAPID key from base64 URL-safe string to Uint8Array
function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');
  const rawData = window.atob(base64);
  return new Uint8Array([...rawData].map(char => char.charCodeAt(0)));
}

// Initial setup for theme switcher
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const themeSwitcher = document.getElementById('theme-switcher');
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}
function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}
themeSwitcher.onclick = toggleTheme;
prefersDarkScheme.addEventListener("change", e => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? "dark" : "light");
  }
});

// Apply saved theme on initial load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  // Default to light theme
  setTheme("light");
}

// Auto-hide auth modal on outside click
document.addEventListener('click', function(event) {
  const modalBg = document.getElementById('modal-bg');
  const authModal = document.getElementById('auth-modal');
  if (modalBg && authModal && event.target === modalBg) {
    modalBg.style.display = 'none';
    authModal.style.display = 'none';
  }
});

// Keyboard navigation and accessibility enhancements
document.addEventListener('keydown', function(event) {
  const authModal = document.getElementById('auth-modal');
  if (authModal && authModal.style.display !== 'none') {
    // Close modal on Escape key
    if (event.key === 'Escape') {
      authModal.style.display = 'none';
      document.getElementById('modal-bg').style.display = 'none';
    }
  }
});

// Focus trap inside modal
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const allFocusableElements = [
// Add all focusable elements inside the modal here
  ...loginForm.querySelectorAll('input, button'),
  ...registerForm.querySelectorAll('input, button')
];
function trapFocus(e) {
  const firstElement = allFocusableElements[0];
  const lastElement = allFocusableElements[allFocusableElements.length - 1];
  if (e.key === 'Tab') {
    if (e.shiftKey) { // Shift + Tab
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else { // Tab
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }
}
document.getElementById('auth-modal').addEventListener('keydown', trapFocus);

// Improved error handling and user feedback
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.onsubmit = async function(e) {
    e.preventDefault();
    const inputs = this.querySelectorAll('input');
    let isValid = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = '#e74c3c';
        input.placeholder = 'This field is required';
      } else {
        input.style.borderColor = '#cfd8dc';
      }
    });
    if (!isValid) return;
    // Submit form data
    const formData = new FormData(this);
    const actionUrl = this.getAttribute('action');
    try {
      const res = await fetch(actionUrl, {
        method: 'POST',
        body: formData
      });
      const result = await res.json();
      if (res.ok) {
        // Success: show success message and reset form
        alert('Form submitted successfully!');
        this.reset();
        // Close modal if it's the auth form
        if (this.id === 'login-form' || this.id === 'register-form') {
          document.getElementById('auth-modal').style.display = 'none';
          document.getElementById('modal-bg').style.display = 'none';
        }
      } else {
        // Error: show message
        alert(result.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('An unexpected error occurred. Please try again later.');
    }
  };
});

// Enhanced mobile responsiveness
const mediaQuery = window.matchMedia('(max-width: 768px)');
function handleTabletChange(e) {
  if (e.matches) {
    // Mobile styles
    document.body.style.fontSize = '14px';
    document.querySelector('nav').style.flexDirection = 'column';
    document.querySelector('nav ul').style.flexDirection = 'column';
    document.querySelector('nav ul').style.alignItems = 'flex-start';
    document.querySelector('nav ul').style.gap = '1rem';
    document.querySelector('main').style.flexDirection = 'column';
    document.querySelector('main').style.alignItems = 'center';
    document.querySelector('aside').style.width = '100%';
    document.querySelector('aside').style.order = '1';
    document.querySelector('section').style.width = '100%';
    document.querySelector('section').style.order = '2';
  } else {
    // Reset to desktop styles
    document.body.style.fontSize = '';
    document.querySelector('nav').style.flexDirection = '';
    document.querySelector('nav ul').style.flexDirection = '';
    document.querySelector('nav ul').style.alignItems = '';
    document.querySelector('nav ul').style.gap = '';
    document.querySelector('main').style.flexDirection = '';
    document.querySelector('main').style.alignItems = '';
    document.querySelector('aside').style.width = '';
    document.querySelector('aside').style.order = '';
    document.querySelector('section').style.width = '';
    document.querySelector('section').style.order = '';
  }
}
mediaQuery.addEventListener('change', handleTabletChange);
handleTabletChange(mediaQuery); // Initial check

// Improved loading performance
document.addEventListener('DOMContentLoaded', function() {
  // Lazy load images
  const lazyImages = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.onload = () => img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  lazyImages.forEach(img => imageObserver.observe(img));

  // Lazy load non-critical scripts
  const lazyScripts = document.querySelectorAll('script[data-src]');
  const scriptObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const script = document.createElement('script');
        script.src = entry.target.dataset.src;
        script.onload = () => entry.target.classList.add('loaded');
        document.body.appendChild(script);
        observer.unobserve(entry.target);
      }
    });
  });
  lazyScripts.forEach(script => scriptObserver.observe(script));
});

// Accessibility improvements
document.querySelectorAll('button, [tabindex]').forEach(el => {
  el.setAttribute('aria-hidden', 'false');
  el.setAttribute('tabindex', '0');
  el.style.outline = 'none';
  el.onfocus = function() {
    this.style.boxShadow = '0 0 0 3px rgba(102,166,255,0.4)';
  };
  el.onblur = function() {
    this.style.boxShadow = 'none';
  };
});

// Custom scrollbar styles
const scrollbarStyle = `
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #66a6ff;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
`;
const styleSheet2 = document.createElement("style");
styleSheet2.type = "text/css";
styleSheet2.innerText = scrollbarStyle;
document.head.appendChild(styleSheet2);

// Service worker registration for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

// Push notification subscription
async function subscribeUserToPush() {
  const registration = await navigator.serviceWorker.getRegistration();
  if (!registration) throw new Error('Service Worker not registered');
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlB64ToUint8Array('YOUR_PUBLIC_VAPID_KEY')
  });
  console.log('User subscribed to push notifications:', subscription);
  // TODO: Send subscription to server for storage
}

// Request notification permission and subscribe user
document.getElementById('enable-notifications-btn').onclick = async function() {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    try {
      await subscribeUserToPush();
      alert('You have successfully subscribed to push notifications.');
    } catch (err) {
      console.error(err);
      alert('Failed to subscribe to push notifications. Please try again later.');
    }
  } else {
    alert('Push notifications are disabled. You can enable them in your browser settings.');
  }
};

// Helper function to convert VAPID key from base64 URL-safe string to Uint8Array
function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');
  const rawData = window.atob(base64);
  return new Uint8Array([...rawData].map(char => char.charCodeAt(0)));
}

// Initial setup for theme switcher
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const themeSwitcher = document.getElementById('theme-switcher');
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}
function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}
themeSwitcher.onclick = toggleTheme;
prefersDarkScheme.addEventListener("change", e => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? "dark" : "light");
  }
});

// Apply saved theme on initial load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  // Default to light theme
  setTheme("light");
}

// Auto-hide auth modal on outside click
document.addEventListener('click', function(event) {
  const modalBg = document.getElementById('modal-bg');
  const authModal = document.getElementById('auth-modal');
  if (modalBg && authModal && event.target === modalBg) {
    modalBg.style.display = 'none';
    authModal.style.display = 'none';
  }
});

// Keyboard navigation and accessibility enhancements
document.addEventListener('keydown', function(event) {
  const authModal = document.getElementById('auth-modal');
  if (authModal && authModal.style.display !== 'none') {
    // Close modal on Escape key
    if (event.key === 'Escape') {
      authModal.style.display = 'none';
      document.getElementById('modal-bg').style.display = 'none';
    }
  }
});

// Focus trap inside modal
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const allFocusableElements = [
// Add all focusable elements inside the modal here
  ...loginForm.querySelectorAll('input, button'),
  ...registerForm.querySelectorAll('input, button')
];
function trapFocus(e) {
  const firstElement = allFocusableElements[0];
  const lastElement = allFocusableElements[allFocusableElements.length - 1];
  if (e.key === 'Tab') {
    if (e.shiftKey) { // Shift + Tab
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else { // Tab
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }
}
document.getElementById('auth-modal').addEventListener('keydown', trapFocus);

// Improved error handling and user feedback
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.onsubmit = async function(e) {
    e.preventDefault();
    const inputs = this.querySelectorAll('input');
    let isValid = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = '#e74c3c';
        input.placeholder = 'This field is required';
      } else {
        input.style.borderColor = '#cfd8dc';
      }
    });
    if (!isValid) return;
    // Submit form data
    const formData = new FormData(this);
    const actionUrl = this.getAttribute('action');
    try {
      const res = await fetch(actionUrl, {
        method: 'POST',
        body: formData
      });
      const result = await res.json();
      if (res.ok) {
        // Success: show success message and reset form
        alert('Form submitted successfully!');
        this.reset();
        // Close modal if it's the auth form
        if (this.id === 'login-form' || this.id === 'register-form') {
          document.getElementById('auth-modal').style.display = 'none';
          document.getElementById('modal-bg').style.display = 'none';
        }
      } else {
        // Error: show message
        alert(result.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('An unexpected error occurred. Please try again later.');
    }
  };
});

// Enhanced mobile responsiveness
const mediaQuery = window.matchMedia('(max-width: 768px)');
function handleTabletChange(e) {
  if (e.matches) {
    // Mobile styles
    document.body.style.fontSize = '14px';
    document.querySelector('nav').style.flexDirection = 'column';
    document.querySelector('nav ul').style.flexDirection = 'column';
    document.querySelector('nav ul').style.alignItems = 'flex-start';
    document.querySelector('nav ul').style.gap = '1rem';
    document.querySelector('main').style.flexDirection = 'column';
    document.querySelector('main').style.alignItems = 'center';
    document.querySelector('aside').style.width = '100%';
    document.querySelector('aside').style.order = '1';
    document.querySelector('section').style.width = '100%';
    document.querySelector('section').style.order = '2';
  } else {
    // Reset to desktop styles
    document.body.style.fontSize = '';
    document.querySelector('nav').style.flexDirection = '';
    document.querySelector('nav ul').style.flexDirection = '';
    document.querySelector('nav ul').style.alignItems = '';
    document.querySelector('nav ul').style.gap = '';
    document.querySelector('main').style.flexDirection = '';
    document.querySelector('main').style.alignItems = '';
    document.querySelector('aside').style.width = '';
    document.querySelector('aside').style.order = '';
    document.querySelector('section').style.width = '';
    document.querySelector('section').style.order = '';
  }
}
mediaQuery.addEventListener('change', handleTabletChange);
handleTabletChange(mediaQuery); // Initial check

// Improved loading performance
document.addEventListener('DOMContentLoaded', function() {
  // Lazy load images
  const lazyImages = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.onload = () => img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  lazyImages.forEach(img => imageObserver.observe(img));

  // Lazy load non-critical scripts
  const lazyScripts = document.querySelectorAll('script[data-src]');
  const scriptObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const script = document.createElement('script');
        script.src = entry.target.dataset.src;
        script.onload = () => entry.target.classList.add('loaded');
        document.body.appendChild(script);
        observer.unobserve(entry.target);
      }
    });
  });
  lazyScripts.forEach(script => scriptObserver.observe(script));
});
