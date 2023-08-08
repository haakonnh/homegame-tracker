<script lang="ts">
	import GameTable from '$lib/components/GameTable.svelte';
    interface HomegameLoadData {
        homegameData: any;
    }

    export let data: HomegameLoadData;

</script>

<main class="container mx-auto px-4">
    {#if data.homegameData}
    <h1 class="mt-5 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">{data.homegameData.name.toLocaleUpperCase()}</mark> Homepage</h1>
    <div class="grid grid-cols-2 content-center w-1/2 m-auto py-5 gap-4">
        <div class="w-full"><a href="/add-game" class="btn btn-md sm:btn-xl bg-primary-500 w-full " >Add game</a></div>
    <div class="w-full"><a href="{data.homegameData.name}/leaderboard" class="btn bg-primary-500 btn-md sm:btn-xl w-full">Leaderboard</a></div>
    </div>

    <div class="grid grid-cols-3">
        {#if data.homegameData.games}
    
        {#each data.homegameData.games as game, index}
        
            <GameTable {game} gameNumber={index} />
        
        {/each}

        {:else}
        
        <div class="grid place-items-center h-24">
            <p class="text-2xl font-bold text-gray-500 dark:text-gray-400">No games yet</p>
        </div>
            
        {/if}
    
    </div>
    {:else}
    <div class="content-center">
    <span class="loading loading-spinner text-primary w-40"></span>
    <span class="loading loading-spinner text-secondary w-40"></span>
    <span class="loading loading-spinner text-accent w-40"></span>
    <span class="loading loading-spinner text-neutral w-40 "></span>
    <span class="loading loading-spinner text-info w-40"></span>
    <span class="loading loading-spinner text-success w-40"></span>
    <span class="loading loading-spinner text-warning w-40 mt-20"></span>
    </div>
    {/if}
</main>