<template>
  <div class="bg-background rounded-2xl p-4">
    <div class="flex items-start">
      <img src="../assets/img/icons/ETH.svg" alt="eth curreny icon" />
      <div class="ml-3">
        <h4 class="font-semibold text-body text-base">
          {{
            currency.fullName ? currency.fullName : currency.pair.slice(0, -4)
          }}
        </h4>
        <h5 class="mt-1 uppercase text-disabled text-sm">
          {{ currency.symbol }}
        </h5>
      </div>
    </div>
    <p class="mt-8 font-semibold text-body text-xl">{{ currency.rate }}</p>
  </div>
</template>

<script>
export default {
  props: {
    currency: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
