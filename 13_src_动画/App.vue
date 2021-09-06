<template>
  <div>
    <TransactionTest/>
    <Test2/>
  </div>
</template>

<script>

import TransactionTest from './components/TransactionTest';
import Test2 from './components/Test2'

export default {
  name: "App",
  components: {
    TransactionTest, Test2
  },
};
</script>
