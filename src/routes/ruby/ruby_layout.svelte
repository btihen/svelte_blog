<!-- post.svelte -->
<script>
  import Toc from "svelte-toc";
  export let author;
  export let title;
  export let date;
</script>

<!--
Install the "flowbite-typography" NPM package to apply styles and format the article content:

URL: https://flowbite.com/docs/components/typography/
-->
<div class="grid w-11/12 grid-cols-12">
  <div
    class="col-span-12 border-red-300 dark:border-blue-300 md:col-span-4 md:border-r-4 md:pr-2 lg:col-span-3"
  >
    <address class="mb-6 flex items-center not-italic">
      <div
        class="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white"
      >
        <img
          class="mr-4 h-16 w-16 rounded-full"
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

    <h1 class="text-gray-900dark:text-white text-l font-bold">Contents</h1>

    <Toc
      --toc-active-border="solid cornflowerblue"
      --toc-active-border-width="0 0 0 2pt"
      --toc-active-border-radius="0"
    />
  </div>
  <div class="col-span-12 pl-3 md:col-span-8 lg:col-span-9">
    <article
      class="format format-sm sm:format-base lg:format-lg dark:format-invert max-w-none"
    >
      <header class="not-format mb-4 text-center lg:mb-6">
        <h1
          class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-4xl"
        >
          {title}
        </h1>
      </header>

      <slot />
    </article>
  </div>
</div>
