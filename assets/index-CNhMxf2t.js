(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();document.querySelector("#app").innerHTML=`
  <section id="home" class="mb-16">
    <h1 class="text-4xl font-bold text-blue-600 mb-4">Welcome to Jigsaw Energy</h1>
    <p class="text-lg text-gray-700">Innovating the future of sustainable energy solutions.</p>
  </section>

  <section id="about" class="mb-16">
    <h2 class="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
    <p class="text-gray-600">Jigsaw Energy is dedicated to developing cutting-edge renewable energy solutions.</p>
  </section>

  <section id="solution" class="mb-16">
    <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Solution</h2>
    <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </section>

  <section id="team" class="mb-16 px-8">
    <h2 class="text-3xl font-bold text-gray-800 mb-8">Our Team</h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <a href="https://linkedin.com" target="_blank" class="block">
          <div class="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold text-gray-800 mb-1">Anu Jayasinghe</h3>
        </a>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <a href="https://linkedin.com" target="_blank" class="block">
          <div class="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold text-gray-800 mb-1">Diego Cerda</h3>
        </a>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <a href="https://linkedin.com" target="_blank" class="block">
          <div class="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold text-gray-800 mb-1">Ev Macker</h3>
        </a>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <a href="https://linkedin.com" target="_blank" class="block">
          <div class="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold text-gray-800 mb-1">Flore Wang</h3>
          <p class="text-gray-600">Channel Manager</p>
        </a>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <a href="https://linkedin.com" target="_blank" class="block">
          <div class="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold text-gray-800 mb-1">Holly Zhou</h3>
          <p class="text-gray-600">Product Marketing @ Logitech</p>
        </a>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <a href="https://linkedin.com" target="_blank" class="block">
          <div class="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold text-gray-800 mb-1">Ivan Poon</h3>
        </a>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <a href="https://linkedin.com" target="_blank" class="block">
          <div class="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold text-gray-800 mb-1">Jean Watanabe</h3>
        </a>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <a href="https://linkedin.com" target="_blank" class="block">
          <div class="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold text-gray-800 mb-1">Jonathan Qu</h3>
        </a>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <a href="https://linkedin.com" target="_blank" class="block">
          <div class="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold text-gray-800 mb-1">Katherine Tan</h3>
        </a>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <a href="https://linkedin.com" target="_blank" class="block">
          <div class="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold text-gray-800 mb-1">Mohith</h3>
        </a>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <a href="https://linkedin.com" target="_blank" class="block">
          <div class="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold text-gray-800 mb-1">Nora</h3>
        </a>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <a href="https://linkedin.com" target="_blank" class="block">
          <div class="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold text-gray-800 mb-1">Ryan Kotler</h3>
        </a>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <a href="https://linkedin.com" target="_blank" class="block">
          <div class="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold text-gray-800 mb-1">Sachin Goradia</h3>
        </a>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <a href="https://linkedin.com" target="_blank" class="block">
          <div class="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold text-gray-800 mb-1">Yung Chen</h3>
        </a>
      </div>
    </div>
  </section>

  <section id="climatebase" class="mb-16">
    <h2 class="text-3xl font-bold text-gray-800 mb-4">Climatebase Project</h2>
    <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </section>

  <section id="contact" class="mb-16">
    <h2 class="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
    <p class="text-gray-600">Get in touch with us at contact@jigsawenergy.org</p>
  </section>
`;
