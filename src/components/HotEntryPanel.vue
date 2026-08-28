<script setup>
import { hotLinksRef, popularLinksRef } from '../usecases/data';
</script>

<template>
  <div class="panel-hot-entries">
    <section class="popular-entries">
      <h2>人気のエントリー</h2>
      <ul>
        <li v-for="link in popularLinksRef">
          <a :href="'https://anond.hatelabo.jp/' + link.id" target="_blank">
            {{ link.title }}
          </a>
        </li>
      </ul>
    </section>
    <section class="hot-entries">
      <h2>注目のエントリー</h2>
      <ul>
        <li v-for="link in hotLinksRef">
          <a :href="'https://anond.hatelabo.jp/' + link.id" target="_blank">
            {{ link.title }}
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>
