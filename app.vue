<script setup>
const { pending, data: currencies } = useLazyFetch(
  "https://www.binance.com/bapi/asset/v1/public/asset-service/product/currency"
);
</script>

<template>
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
          <!-- you'll need to handle a loading state -->
          <div v-if="pending">Loading ...</div>
          <CurrencyCard
            v-else
            v-for="currency in currencies.data"
            :key="currency.pair"
            :currency="currency"
          />
        </div>
      </main>
    </div>
  </div>
</template>
