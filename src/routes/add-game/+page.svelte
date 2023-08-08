<script lang="ts">
	import { onMount } from 'svelte';
    import type { PageData } from '../../app';
	import type { HomegameData } from '$lib/types';
    
    export let data: PageData;
    let amount: number = 0;
    let isSubmitted = false;

    function handleSubmit() {
        if (amount < 1) {
            return
        }
        isSubmitted = true;
    }
</script>

<div>
    {#if data.homegameData && !isSubmitted}
    <div class="grid justify-center absolute w-full">
        <a href="../{data.homegameData.name}" class="btn btn-secondary w-full mt-5 relative">Return to homepage</a>
    </div>
    {/if}
    
    {#if amount > 0 && isSubmitted}
    <div class="items-center justify-center border-slate-800 flex-col flex">
    <h1 class="mt-8 text-center mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Register the 
    <mark class="px-2 text-white bg-blue-600 rounded dark:bg-orange-700">PLAYERS</mark></h1>
    <form method="POST" class="form">
        {#each {length: amount} as _, i}
        <div class="grid grid-cols-3 justify-center items-center space-y-2 space-x-8 mb-5">
            <h2 class="text-2xl tracking-tight text-center">Player {i + 1}</h2>
            <input type="text" name="name" class="input input-primary" placeholder="Player name"/>
            <input type="number" name="winnings" class="input input-primary" placeholder="Player winnings"/>
        </div>
        {/each}
        <button class="btn btn-primary w-full" type="submit">Submit</button>
    </form>
</div>
    
    {:else}
    <div class="flex items-center justify-center min-h-screen w-full space-x-10">
        <h1 class="mt-5 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Add a new 
        <mark class="px-2 text-white bg-purple-600 rounded dark:bg-purple-600-">GAME</mark></h1>
        <input type="number"
        name="amount" 
        placeholder="Number of players" 
        class="input input-primary input-bordered w-full max-w-xs" 
        bind:value={amount}/>
        <button class="btn btn-primary w-1/4" on:click={handleSubmit}>Submit</button>
    </div>

    {/if}
</div>

<style>
    h2 {
        padding: 10px;
        border: 5px solid #000;
    }
</style>