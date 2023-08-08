<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

{#if !data}

    <h1 class="h1">No data</h1>

{:else}
<main class="m-auto w-2/3">

<h1 class="m-auto pt-10 pb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">{data.homegameData.name}</mark> Leaderboard</h1>

        <div class="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {#each data.homegameData.players as player, index}
        
            <!-- Repeat for each player -->
            <div class="card p-4 bg-gradient-to-b bg-base-200 shadow-xl hover:shadow-xl">
              <div class="card-body">
                <h2 class="card-title text-white font-bold">{player.name.toLocaleUpperCase()}</h2>
                <p class="text-md text-primary-content"
                class:text-green-600={player.totalScore > 0}
                class:text-red-500={player.totalScore < 0}>
                Total Score: {(player.totalScore > 0) ? '+' : ''}{player.totalScore}</p>
                <!-- Add more player information as needed -->
                {#if player.totalScore > 0}
                <div class="card-actions justify-end text-2xl">
                   🎉
                </div>
                {:else if player.totalScore < 0}
                <div class="card-actions justify-end text-2xl">
                   😢
                </div>
                {/if}
            </div>
              
            </div>
          
          
        {/each}
        </div>
</main>
    
{/if}

