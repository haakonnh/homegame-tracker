<script lang="ts">
	import type { Game } from "$lib/types";
	import { onMount } from "svelte";

    /* let date: any;
    let players: any; */

    export let game: Game;
    export let gameNumber: number;

    const arrayPlayers = [ game.players ]
    

    onMount(() => {
        //console.log($homegameStore.name)
    });
</script>
<div class="card card-hover variant-glass border border-primary-200  w-96 shadow-xl bg-neutral mt-5">
<div class="card-body ">
<h2 class="card-header text-xl text-center text-primary-500">
    Game {gameNumber + 1}
  </h2>

  <div class="overflow-x-auto p-4">
    <table class="table table-zebra">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Winnings</th>
        </tr>
      </thead>
      <tbody>

        {#each game.players as player, index }
        <tr>
          <th>{index + 1}</th>
          <td>{player.name}</td>
          <td>{player.score}</td>
        </tr>
        {/each}
        <!-- row 3 -->
      </tbody>
    </table>
  </div>
</div>
</div>