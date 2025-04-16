import './style.css'

document.querySelector('#app').innerHTML = `
  <section id="home" class="px-4 md:px-8 lg:px-16 py-8 md:py-16">
    <h1 class="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Welcome to Jigsaw Energy</h1>
    <p class="text-base md:text-lg text-gray-700">Innovating the future of sustainable energy solutions.</p>
  </section>

  <section id="about" class="px-4 md:px-8 lg:px-16 py-8 md:py-16">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">About Us</h2>
    <p class="text-base md:text-lg text-gray-600">Jigsaw Energy is dedicated to developing cutting-edge renewable energy solutions.</p>
  </section>

  <section id="solution" class="px-4 md:px-8 lg:px-16 py-8 md:py-16">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Solution</h2>
    <p class="text-base md:text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </section>

  <section id="team" class="px-4 md:px-8 lg:px-16 py-8 md:py-16">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Our Team</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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

  <section id="climatebase" class="px-4 md:px-8 lg:px-16 py-8 md:py-16">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Climatebase Project</h2>
    <p class="text-base md:text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </section>

  <section id="contact" class="px-4 md:px-8 lg:px-16 py-8 md:py-16">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
    <p class="text-base md:text-lg text-gray-600">Get in touch with us at contact@jigsawenergy.org</p>
  </section>
`
