<script lang="ts">
	import GameTable from '$lib/components/GameTable.svelte';
    import { modalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { readable } from 'svelte/store';
    import QuestionMark from '~icons/mdi/help-circle-outline';

    interface HomegameLoadData {
        homegameData: any;
        readable: boolean | undefined;
    }

    export let data: HomegameLoadData;

    const modal: ModalSettings = {
        type: 'alert',
        // Data
        title: 'Info',
        body: "Welcome to the homegame dashboard. If you are an owner of this homegame, you can add games, delete games, manage permissions and view the leaderboard. If you are a player, you can add games and view the leaderboard.",
        image: 'https://media.giphy.com/media/xT9DPlAUKTl1GeZjC8/giphy.gif',
    };


</script>

<main class="container mx-auto px-4">
    {#if data.homegameData}
    <h1 class="mt-5 text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 
    md:text-5xl lg:text-6xl dark:text-white"> 
    <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
        {data.homegameData.name.toLocaleUpperCase()}
    </mark> 
    Homepage
    <button on:click={() => modalStore.trigger(modal)} class="btn scale-150">
        
        <QuestionMark />
    </button>
    
    </h1> 
    
    
    <div class:grid-cols-3={ !data.readable } class:grid-cols-2={ data.readable } 
    class="grid content-center sm:w-1/2 m-auto py-5 gap-2 sm:gap-4">
        <div class="w-full">
            <a href="{data.homegameData.name}/add-game" class="btn text-sm sm:text-xl sm:btn-xl bg-primary-500 w-full " >
                Add game
            </a>
        </div>
        <div class="w-full">
            <a href="{data.homegameData.name}/leaderboard" class="btn text-sm sm:text-xl bg-secondary-500 sm:btn-xl w-full">
                Leaderboard
            </a>
        </div>
        {#if !data.readable}
        <div class="w-full">
            <a href="{data.homegameData.name}/permissions" class="btn text-sm sm:text-xl bg-error-800 sm:btn-xl w-full">
                Permissions
            </a>
        </div>
        {/if}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 w-full">
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