<template>
  <!-- <div>
    <NuxtWelcome />
    hello from Nuxt 3!
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </div> -->

  <div class="border-solid border-4 border-green-500 max-w-5xl mx-auto">
    <header class="border-solid border-2 border-rose-400 flex justify-between">
      <h1 class="text-3xl font-sans font-semibold text-title-active">Assets</h1>
      <div class="flex items-center">
        <p class="mr-4 font-semibold text-placeholder text-sm">Sort by:</p>
        <p class="font-semibold text-label text-sm">By price</p>
      </div>
    </header>

    <div class="grid grid-cols-4 gap-4 mt-4">
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
