<script>
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
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import { page } from "$app/stores";
  $: activeUrl = $page.url.pathname;
</script>

<div class="relative px-8">
  <Navbar
    class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b bg-blue-50"
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
      <NavLi href="/about">About</NavLi>

      <NavLi class="cursor-pointer">
        Articles<ChevronDownOutline
          class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline"
        />
      </NavLi>
      <Dropdown class="w-44 z-20">
        <DropdownItem href="/ruby">Ruby & Rails</DropdownItem>
        <DropdownItem href="/elixir">Elixir & Phoenix</DropdownItem>
        <DropdownItem href="/blog">Crystal & Lucky</DropdownItem>
        <DropdownDivider />
        <DropdownItem href="/blog">Technology</DropdownItem>
      </Dropdown>

      <NavLi href="/blog">Blogs</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>
  <div style="height:50px;" />
</div>
