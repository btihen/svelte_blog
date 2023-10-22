<script>
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterLink,
    FooterBrand,
    FooterIcon,
  } from "flowbite-svelte";
  import {
    FacebookSolid,
    FileSolid,
    LinkedinSolid,
    GithubSolid,
    DiscordSolid,
    TwitterSolid,
    XCompanySolid,
  } from "flowbite-svelte-icons";
</script>

<Footer class="bg-blue-50 border-t-4 border-red-400 dark:border-blue-300">
  <FooterCopyright href="/" by="btihen™" />

  <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
    <FooterIcon target="_blank" rel="noreferrer noopener" href="/">
      <FileSolid
        class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
      />
    </FooterIcon>
    <FooterIcon
      target="_blank"
      rel="noreferrer noopener"
      href="https://www.linkedin.com/in/bill-tihen/"
    >
      <LinkedinSolid
        class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
      />
    </FooterIcon>
    <FooterIcon
      target="_blank"
      rel="noreferrer noopener"
      href="https://twitter.com/btihen"
    >
      <XCompanySolid
        class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
      />
    </FooterIcon>
    <FooterIcon
      target="_blank"
      rel="noreferrer noopener"
      href="https://github.com/btihen"
    >
      <GithubSolid
        class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
      />
    </FooterIcon>
  </div>
</Footer>
