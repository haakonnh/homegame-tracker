<script lang="ts">
    import AnimatedRoute from '$lib/components/AnimatedRoute.svelte';
    import type { PageData } from './$types';
    import { fetchHomegameData, getHomegameDataFromLocalStorage, homegameStore } from '$lib/stores/homegameStore';
	import GameTable from '$lib/components/GameTable.svelte';
	import { afterUpdate, onMount } from 'svelte';
	import type { HomegameData } from '$lib/types';
	import { stringify } from 'postcss';
	import { json } from '@sveltejs/kit';
	import type { Game } from '$lib/types';
	import { authStore } from '$lib/stores/authStore';
	import NavBar from '$lib/components/NavBar.svelte';
    import {homegameLocalStorage} from '$lib/stores/homegameLocalStorage';

    export let data: PageData;
    let homegameData: HomegameData | null = data.homegameData;


    onMount( () => {
        //homegameData = getHomegameDataFromLocalStorage();
        //console.log(homegameData);
    });



    const logShit = () => {
        console.log("Logged", $homegameLocalStorage);
    }
</script>
<NavBar isLoggedIn={true} {homegameData}/>

<main class="container mx-auto px-4">

    
    
    
    {#if homegameData && homegameData.games}
    <h1 class="mt-5 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">{homegameData.name.toLocaleUpperCase()}</mark> Homepage</h1>
    <div class="grid place-items-center h-24">
    <a href="/add-game" class="btn btn-primary w-52 " >Add game</a>
</div>
    <div class="grid grid-cols-3">
    
        {#each Object.entries(homegameData.games) as [gameId, game], index}
        
            <GameTable {game} gameNumber={index} />
        
        {/each}
    
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
    <button on:click={logShit} class="btn btn-primary">Ye</button>
    </div>
    {/if}
</main>