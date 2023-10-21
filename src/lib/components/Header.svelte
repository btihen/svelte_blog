<script>
  import Toggle from "$lib/components/Toggle.svelte";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Dropdown,
    DropdownItem,
    DropdownDivider,
    ImagePlaceholder,
    Skeleton,
    TextPlaceholder,
  } from "flowbite-svelte";
  import {
    ChevronDownOutline,
    AdjustmentsHorizontalOutline,
    SunOutline,
    MoonSolid,
    ComputerSpeakerOutline,
    SearchOutline,
  } from "flowbite-svelte-icons";
  import { page } from "$app/stores";
  $: activeUrl = $page.url.pathname;
</script>

<div class="relative px-8">
  <Navbar
    class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b-4 border-red-400 bg-blue-50"
  >
    <NavBrand href="/">
      <!--
      <img
        src="/images/flowbite-svelte-icon-logo.svg"
        class="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      -->
      <span
        class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >btihen</span
      >
    </NavBrand>
    <NavHamburger />
    <NavUl {activeUrl}>
      <NavLi class="cursor-pointer">
        Articles<ChevronDownOutline
          class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline"
        />
      </NavLi>
      <Dropdown class="w-44 z-20">
        <DropdownItem href="/posts">All Topics</DropdownItem>
        <DropdownItem href="/ruby">Ruby & Rails</DropdownItem>
        <DropdownItem href="/elixir">Elixir & Phoenix</DropdownItem>
        <DropdownItem href="/crystal">Crystal & Lucky</DropdownItem>
        <DropdownItem href="/edu">Education</DropdownItem>
        <DropdownDivider />
        <DropdownItem href="/tech">Technology</DropdownItem>
      </Dropdown>

      <NavLi href="/pubs">Publications</NavLi>

      <NavLi href="/about">About</NavLi>

      <!--
      <NavLi href="/contact">Contact</NavLi>
      -->

      <NavLi href="/search">
        <SearchOutline
          id="theme-toggle-dark-icon"
          class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
        />
      </NavLi>

      <NavLi class="cursor-pointer">
        <AdjustmentsHorizontalOutline
          class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
        />
        <!--
        Settings
        <ChevronDownOutline
          class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline"
        />
        -->
      </NavLi>
      <Dropdown class="w-44 z-20">
        <DropdownItem
          class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2"
        >
          <SunOutline
            id="theme-toggle-dark-icon"
            class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
          />&NonBreakingSpace; Light Mode
        </DropdownItem>
        <DropdownItem
          class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2"
        >
          <MoonSolid
            id="theme-toggle-dark-icon"
            class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
          />&NonBreakingSpace; Dark Mode
        </DropdownItem>
        <DropdownItem
          class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2"
        >
          <ComputerSpeakerOutline
            id="theme-toggle-dark-icon"
            class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
          />
          &NonBreakingSpace; System Mode
        </DropdownItem>
      </Dropdown>
      <Toggle />
    </NavUl>
  </Navbar>
  <div style="height:50px;" />
</div>
