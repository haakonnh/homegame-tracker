<script lang="ts">
    import NavBar from "$lib/components/NavBar.svelte";
    import { page } from "$app/stores";
	import { AppBar } from "@skeletonlabs/skeleton";

    interface HomePageData {
        user: {
            name: string
            role: string
            id: string
        }
        homegameData: any;
    }
    export let data: HomePageData;
</script>

  <div class="card card-hover items-center justify-center 
  m-auto mt-20 w-2/3 border-4 rounded border-slate-600 h-2/3 variant-glass ">
    <header class="card-header mb-10 mt-5 text-center lg:text-3xl md:text-lg text-white font-bold">Welcome to Homegame Tracker!</header>
    <div class="container w-full space-y-5">
      <div class=" w-2/3 card flex justify-center m-auto border-2 rounded border-secondary-500 p-10">
        <p class="font-bold text-3xl italic">Poker pros only.</p>
      </div>
      <div class="w-2/3 card flex justify-center m-auto border-2 rounded border-secondary-500 p-10">
        <p class="font-bold text-3xl italic text-primary-500">Nima suger</p>
      </div>
    </div>
  </div>
        