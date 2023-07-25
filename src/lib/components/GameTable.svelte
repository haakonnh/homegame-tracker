<script lang="ts">
	import { homegameStore } from "$lib/stores/homegameStore";
	import type { Game } from "$lib/types";
	import type { Timestamp } from "firebase/firestore";
	import { onMount } from "svelte";

    /* let date: any;
    let players: any; */

    export let game: Game;
    export let gameNumber: number;
    

    onMount(() => {
        //console.log($homegameStore.name)
    });
</script>
<div class="card w-96 shadow-xl bg-neutral mt-5">
<div class="card-body ">
<h2 class="card-title">
    Game {gameNumber + 1}
    <div class="badge badge-secondary">NEW</div>
  </h2>

  <div class="overflow-x-auto">
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
        <!-- row 1 -->

        {#each Object.entries(game?.players) as [playerId, data], index }
        <tr>
          <th>{index + 1}</th>
          <td>{data.name}</td>
          <td>{data.delta}</td>
        </tr>
        {/each}
        <!-- row 3 -->
      </tbody>
    </table>
  </div>
</div>
</div>