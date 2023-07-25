<script lang="ts">
	import NavBar from "$lib/components/NavBar.svelte";
	import { getHomegameDataFromLocalStorage } from "$lib/stores/homegameStore";
	import type { HomegameData } from "$lib/types";
	import { afterUpdate, beforeUpdate, onMount } from "svelte";


    interface Data {
        isLoggedIn: boolean;
        uid: string;
    }
    
    
    export let data: Data;

    let homegameData: HomegameData;
    onMount( async () => {
        homegameData = getHomegameDataFromLocalStorage();
        console.log("Mounted");
    });

    afterUpdate( async () => {
        homegameData = getHomegameDataFromLocalStorage();
        console.log("Updated");
    });

</script>

<main>
    
      
      <main class="flex flex-col items-center justify-center h-screen">
        {#if data.uid}
        <NavBar isLoggedIn={data.isLoggedIn} {homegameData}/>
        {:else}
        <NavBar isLoggedIn={false} homegameData={null} />
        {/if}
        <!-- Header section -->
        <div class="card">
        <header class="card-body">
          <h1 class="text-4xl font-bold">Welcome to Homegame Tracker</h1>
          <p class="mt-2">Track and manage your homegames with ease!</p>
        </header>
        </div>  
      
        <!-- Features section -->
        <section class="card w-2/3 bg-neutral text-neutral-content">
            <div class="card-body items-center text-center">
          <h2 class="text-3xl font-bold mb-6 card-title" >Key Features</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 card-actions justify-end">
            <div class="bg-primary text-primary-content shadow-md p-6 rounded-lg">
              <!-- Feature 1 content -->
              <h3 class="text-xl font-bold mb-2">Easy Homegame Management</h3>
              <p>Manage your homegames, players, and scores in one place.</p>
            </div>
            <div class="bg-secondary text-secondary-content shadow-md p-6 rounded-lg">
              <!-- Feature 2 content -->
              <h3 class="text-xl font-bold mb-2">Track Winnings</h3>
              <p>Keep track of each player's winnings and losses over time.</p>
            </div>
            <!-- Add more features here if needed -->
          </div>
        </div>
        {#if data.isLoggedIn && homegameData}
        <div class="card-actions justify-center mb-5">
            <a href="/homegames" class="btn btn-success">Go to your homegame: {homegameData.name}</a>
        </div>

        {:else if !data.isLoggedIn}
        <div class="card-actions justify-center mb-5">
            <a href="/login" class="btn btn-success">Login to get started!</a>
        </div>
        {/if}

        
        </section>
      
        <!-- Call-to-Action buttons -->
      
        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-4 px-8 w-full mt-auto">
          <p class="text-center">&copy; 2023 Homegame Tracker. All rights reserved.</p>
        </footer>
      </main>
    
</main>