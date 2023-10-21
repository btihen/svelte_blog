<!-- contact/+page.svelte -->
<h1>Get in touch</h1>

<p><a href="mailto:me@my.tld">Email me!</a></p>

<hr />

<h5
  id="drawer-label"
  class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
>
  <svg
    class="w-4 h-4 mr-2.5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 16"
  >
    <path
      d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
    />
    <path
      d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
    />
  </svg>Contact us
</h5>
<button
  type="button"
  data-drawer-hide="drawer-contact"
  aria-controls="drawer-contact"
  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
>
  <svg
    class="w-3 h-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
    />
  </svg>
  <span class="sr-only">Close menu</span>
</button>
<form action="#" class="mb-6">
  <div class="mb-6">
    <label
      for="email"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Your email</label
    >
    <input
      type="email"
      id="email"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="name@company.com"
      required
    />
  </div>
  <div class="mb-6">
    <label
      for="subject"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Subject</label
    >
    <input
      type="text"
      id="subject"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Let us know how we can help you"
      required
    />
  </div>
  <div class="mb-6">
    <label
      for="message"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Your message</label
    >
    <textarea
      id="message"
      rows="4"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Your message..."
    />
  </div>
  <button
    type="submit"
    class="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
    >Send message</button
  >
</form>
<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
  <a href="#" class="hover:underline">info@company.com</a>
</p>
<p class="text-sm text-gray-500 dark:text-gray-400">
  <a href="#" class="hover:underline">212-456-7890</a>
</p>

<hr />

<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div
    class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
    aria-hidden="true"
  >
    <div
      class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
      style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
    />
  </div>
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Contact sales
    </h2>
    <p class="mt-2 text-lg leading-8 text-gray-600">
      Aute magna irure deserunt veniam aliqua magna enim voluptate.
    </p>
  </div>
  <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label
          for="first-name"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >First name</label
        >
        <div class="mt-2.5">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autocomplete="given-name"
            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          for="last-name"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Last name</label
        >
        <div class="mt-2.5">
          <input
            type="text"
            name="last-name"
            id="last-name"
            autocomplete="family-name"
            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div class="sm:col-span-2">
        <label
          for="company"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Company</label
        >
        <div class="mt-2.5">
          <input
            type="text"
            name="company"
            id="company"
            autocomplete="organization"
            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div class="sm:col-span-2">
        <label
          for="email"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Email</label
        >
        <div class="mt-2.5">
          <input
            type="email"
            name="email"
            id="email"
            autocomplete="email"
            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div class="sm:col-span-2">
        <label
          for="phone-number"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Phone number</label
        >
        <div class="relative mt-2.5">
          <div class="absolute inset-y-0 left-0 flex items-center">
            <label for="country" class="sr-only">Country</label>
            <select
              id="country"
              name="country"
              class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
            </select>
            <svg
              class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="tel"
            name="phone-number"
            id="phone-number"
            autocomplete="tel"
            class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div class="sm:col-span-2">
        <label
          for="message"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Message</label
        >
        <div class="mt-2.5">
          <textarea
            name="message"
            id="message"
            rows="4"
            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div class="flex gap-x-4 sm:col-span-2">
        <div class="flex h-6 items-center">
          <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
          <button
            type="button"
            class="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            role="switch"
            aria-checked="false"
            aria-labelledby="switch-1-label"
          >
            <span class="sr-only">Agree to policies</span>
            <!-- Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" -->
            <span
              aria-hidden="true"
              class="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
            />
          </button>
        </div>
        <label class="text-sm leading-6 text-gray-600" id="switch-1-label">
          By selecting this, you agree to our
          <a href="#" class="font-semibold text-indigo-600"
            >privacy&nbsp;policy</a
          >.
        </label>
      </div>
    </div>
    <div class="mt-10">
      <button
        type="submit"
        class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >Let's talk</button
      >
    </div>
  </form>
</div>

<hr />

<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div
      class="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none"
    >
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">
            Get in touch
          </h2>
          <p class="mt-4 leading-7 text-gray-600">
            Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
          </p>
        </div>
        <div
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8"
        >
          <div class="rounded-2xl bg-gray-50 p-10">
            <h3 class="text-base font-semibold leading-7 text-gray-900">
              Collaborate
            </h3>
            <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
              <div>
                <dt class="sr-only">Email</dt>
                <dd>
                  <a
                    class="font-semibold text-indigo-600"
                    href="mailto:collaborate@example.com"
                    >collaborate@example.com</a
                  >
                </dd>
              </div>
              <div class="mt-1">
                <dt class="sr-only">Phone number</dt>
                <dd>+1 (555) 905-2345</dd>
              </div>
            </dl>
          </div>
          <div class="rounded-2xl bg-gray-50 p-10">
            <h3 class="text-base font-semibold leading-7 text-gray-900">
              Press
            </h3>
            <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
              <div>
                <dt class="sr-only">Email</dt>
                <dd>
                  <a
                    class="font-semibold text-indigo-600"
                    href="mailto:press@example.com">press@example.com</a
                  >
                </dd>
              </div>
              <div class="mt-1">
                <dt class="sr-only">Phone number</dt>
                <dd>+1 (555) 905-3456</dd>
              </div>
            </dl>
          </div>
          <div class="rounded-2xl bg-gray-50 p-10">
            <h3 class="text-base font-semibold leading-7 text-gray-900">
              Join our team
            </h3>
            <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
              <div>
                <dt class="sr-only">Email</dt>
                <dd>
                  <a
                    class="font-semibold text-indigo-600"
                    href="mailto:careers@example.com">careers@example.com</a
                  >
                </dd>
              </div>
              <div class="mt-1">
                <dt class="sr-only">Phone number</dt>
                <dd>+1 (555) 905-4567</dd>
              </div>
            </dl>
          </div>
          <div class="rounded-2xl bg-gray-50 p-10">
            <h3 class="text-base font-semibold leading-7 text-gray-900">
              Say hello
            </h3>
            <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
              <div>
                <dt class="sr-only">Email</dt>
                <dd>
                  <a
                    class="font-semibold text-indigo-600"
                    href="mailto:hello@example.com">hello@example.com</a
                  >
                </dd>
              </div>
              <div class="mt-1">
                <dt class="sr-only">Phone number</dt>
                <dd>+1 (555) 905-5678</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">
            Locations
          </h2>
          <p class="mt-4 leading-7 text-gray-600">
            Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum
            commodo.
          </p>
        </div>
        <div
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8"
        >
          <div class="rounded-2xl bg-gray-50 p-10">
            <h3 class="text-base font-semibold leading-7 text-gray-900">
              Los Angeles
            </h3>
            <address
              class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600"
            >
              <p>4556 Brendan Ferry</p>
              <p>Los Angeles, CA 90210</p>
            </address>
          </div>
          <div class="rounded-2xl bg-gray-50 p-10">
            <h3 class="text-base font-semibold leading-7 text-gray-900">
              New York
            </h3>
            <address
              class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600"
            >
              <p>886 Walter Street</p>
              <p>New York, NY 12345</p>
            </address>
          </div>
          <div class="rounded-2xl bg-gray-50 p-10">
            <h3 class="text-base font-semibold leading-7 text-gray-900">
              Toronto
            </h3>
            <address
              class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600"
            >
              <p>7363 Cynthia Pass</p>
              <p>Toronto, ON N3Y 4H8</p>
            </address>
          </div>
          <div class="rounded-2xl bg-gray-50 p-10">
            <h3 class="text-base font-semibold leading-7 text-gray-900">
              Chicago
            </h3>
            <address
              class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600"
            >
              <p>726 Mavis Island</p>
              <p>Chicago, IL 60601</p>
            </address>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<hr />

<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<div class="relative isolate bg-white">
  <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
    <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
      <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
        <div
          class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2"
        >
          <svg
            class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width="200"
                height="200"
                x="100%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M130 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" stroke-width="0" fill="white" />
            <svg x="100%" y="-1" class="overflow-visible fill-gray-50">
              <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
            />
          </svg>
        </div>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
          Get in touch
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Proin volutpat consequat porttitor cras nullam gravida at. Orci
          molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu
          sed malesuada et magna.
        </p>
        <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
          <div class="flex gap-x-4">
            <dt class="flex-none">
              <span class="sr-only">Address</span>
              <svg
                class="h-7 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
            </dt>
            <dd>545 Mavis Island<br />Chicago, IL 99191</dd>
          </div>
          <div class="flex gap-x-4">
            <dt class="flex-none">
              <span class="sr-only">Telephone</span>
              <svg
                class="h-7 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </dt>
            <dd>
              <a class="hover:text-gray-900" href="tel:+1 (555) 234-5678"
                >+1 (555) 234-5678</a
              >
            </dd>
          </div>
          <div class="flex gap-x-4">
            <dt class="flex-none">
              <span class="sr-only">Email</span>
              <svg
                class="h-7 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </dt>
            <dd>
              <a class="hover:text-gray-900" href="mailto:hello@example.com"
                >hello@example.com</a
              >
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <form
      action="#"
      method="POST"
      class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
    >
      <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              for="first-name"
              class="block text-sm font-semibold leading-6 text-gray-900"
              >First name</label
            >
            <div class="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="last-name"
              class="block text-sm font-semibold leading-6 text-gray-900"
              >Last name</label
            >
            <div class="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="email"
              class="block text-sm font-semibold leading-6 text-gray-900"
              >Email</label
            >
            <div class="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="phone-number"
              class="block text-sm font-semibold leading-6 text-gray-900"
              >Phone number</label
            >
            <div class="mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autocomplete="tel"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block text-sm font-semibold leading-6 text-gray-900"
              >Message</label
            >
            <div class="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows="4"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div class="mt-8 flex justify-end">
          <button
            type="submit"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >Send message</button
          >
        </div>
      </div>
    </form>
  </div>
</div>
