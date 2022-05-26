<template>
  <!-- <div>
    <NuxtWelcome />
    hello from Nuxt 3!
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </div> -->

  <div class="px-12 pt-10">
    <div class="max-w-lg mx-auto">
      <header class="flex justify-between">
        <h1 class="text-3xl font-sans font-semibold text-title-active">
          Assets
        </h1>
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

      <main>
        <div class="grid grid-cols-4 gap-8 mt-8">
          <div class="bg-background rounded-2xl p-4">
            <div class="flex items-start">
              <img src="./assets/img/icons/ETH.svg" alt="eth curreny icon" />
              <div class="ml-3">
                <h4 class="font-semibold text-body text-base">Etherium</h4>
                <h5 class="mt-1 uppercase text-disabled text-sm">Eth</h5>
              </div>
            </div>
            <p class="mt-8 font-semibold text-body text-xl">$0,95</p>
          </div>

          <div class="bg-background rounded-2xl p-4">
            <div class="flex items-start">
              <img src="./assets/img/icons/ETH.svg" alt="eth curreny icon" />
              <div class="ml-3">
                <h4 class="font-semibold text-body text-base">Etherium</h4>
                <h5 class="mt-1 uppercase text-disabled text-sm">Eth</h5>
              </div>
            </div>
            <p class="mt-8 font-semibold text-body text-xl">$0,95</p>
          </div>

          <div class="bg-background rounded-2xl p-4">
            <div class="flex items-start">
              <img src="./assets/img/icons/ETH.svg" alt="eth curreny icon" />
              <div class="ml-3">
                <h4 class="font-semibold text-body text-base">Etherium</h4>
                <h5 class="mt-1 uppercase text-disabled text-sm">Eth</h5>
              </div>
            </div>
            <p class="mt-8 font-semibold text-body text-xl">$0,95</p>
          </div>

          <div class="bg-background rounded-2xl p-4">
            <div class="flex items-start">
              <img src="./assets/img/icons/ETH.svg" alt="eth curreny icon" />
              <div class="ml-3">
                <h4 class="font-semibold text-body text-base">Etherium</h4>
                <h5 class="mt-1 uppercase text-disabled text-sm">Eth</h5>
              </div>
            </div>
            <p class="mt-8 font-semibold text-body text-xl">$0,95</p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
