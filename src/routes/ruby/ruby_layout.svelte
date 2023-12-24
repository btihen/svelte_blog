<!-- post.svelte -->
<script>
  import Toc from 'svelte-toc'
  export let author;
  export let title;
  export let date;
</script>

<!--
Install the "flowbite-typography" NPM package to apply styles and format the article content:

URL: https://flowbite.com/docs/components/typography/
-->
<div class="grid grid-cols-12 w-11/12">
  <div
    class="col-span-12 md:col-span-4 lg:col-span-3 md:pr-2 md:border-r-4 border-red-300 dark:border-blue-300"
  >
    <address class="flex items-center mb-6 not-italic">
      <div
        class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"
      >
        <img
          class="mr-4 w-16 h-16 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
          alt="Jese Leos"
        />
        <div>
          <a
            href="/about"
            rel="author"
            class="text-xl font-bold text-gray-900 dark:text-white">{author}</a
          >
          <p class="text-base text-gray-500 dark:text-gray-400">Tags!</p>
          <p class="text-base text-gray-500 dark:text-gray-400">
            <time pubdate datetime="2022-02-08" title="February 8th, 2022"
              >{date}</time
            >
          </p>
        </div>
      </div>
    </address>
    <h1>Contents</h1>
    <Toc />
  </div>
  <div class="col-span-12 md:col-span-8 lg:col-span-9 pl-3">
    <article
      class="max-w-none format format-sm sm:format-base lg:format-lg dark:format-invert"
    >
      <header class="mb-4 lg:mb-6 not-format text-center">
        <h1
          class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white"
        >
          {title}
        </h1>
      </header>

      <slot />
    </article>
  </div>
</div>
