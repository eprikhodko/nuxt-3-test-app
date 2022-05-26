<template>
  <!-- <div>
    <NuxtWelcome />
    hello from Nuxt 3!
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </div> -->

  <div class="max-w-lg mx-auto">
    <header class="flex justify-between mt-10">
      <h1 class="text-3xl font-sans font-semibold text-title-active">Assets</h1>
      <div class="flex items-center">
        <p class="mr-4 font-semibold text-placeholder text-sm">Sort by:</p>

        <div class="cursor-pointer flex">
          <p class="font-semibold text-label text-sm">By price</p>
          <img
            class="ml-1"
            src="./assets/img/icons/Arrow.svg"
            alt="arrow icon"
          />
        </div>
      </div>
    </header>

    <div class="grid grid-cols-4 gap-4 mt-8">
      <div class="bg-blue-200 rounded-2xl p-4">
        <h4>Etherium</h4>
        <h5>Eth</h5>
        <p class="mt-4">$0,95</p>
      </div>

      <div class="bg-blue-200 rounded-2xl">
        <h4>Etherium</h4>
        <h5>Eth</h5>
        <p>$0,95</p>
      </div>

      <div class="bg-blue-200 rounded-2xl">
        <h4>Etherium</h4>
        <h5>Eth</h5>
        <p>$0,95</p>
      </div>

      <div class="bg-blue-200 rounded-2xl">
        <h4>Etherium</h4>
        <h5>Eth</h5>
        <p>$0,95</p>
      </div>
    </div>
  </div>
</template>
