<script lang="ts">
	import type { Game } from "$lib/types";
	import { onMount } from "svelte";

    /* let date: any;
    let players: any; */

    export let game: any;
    export let gameNumber: number;

    const arrayPlayers = [ game.players ]
    

    onMount(() => {
        //console.log($homegameStore.name)
    });
</script>
<div class="card card-hover variant-glass border border-primary-400  w-full sm:w-96 shadow-xl bg-neutral mt-5">
<div class="card-body ">
<h2 class="card-header sm:text-2xl font-extrabold tracking-widest text-center text-primary-500">
    Game {gameNumber + 1}
  </h2>

  <div class="overflow-x-auto p-4">
    <table class="w-full text-sm text-left ">
      <!-- head -->
      <thead>
        <tr class="dark:bg-gray-700 dark:text-gray-400 ">
          <th scope="col" class="px-6 py-2"></th>
          <th scope="col" class="px-6 py-2">Name</th>
          <th scope="col" class="px-6 py-2">Winnings</th>
        </tr>
      </thead>
      <tbody>
        {#each game.scores as s, index }
        <tr class="border-b dark:border-gray-700">
          <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {index + 1}</th>
          <td class="px-6 py-2">{s.playerName}</td>
          <td class="px-6 py-2">{s.score}</td>
        </tr>
        {/each}
        <!-- row 3 -->
      </tbody>
    </table>
  </div>
</div>
</div>

<style>
  td {
    padding: 0.25rem;
  }
</style>