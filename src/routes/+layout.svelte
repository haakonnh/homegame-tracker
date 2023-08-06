<script lang="ts">
    import "../app.postcss"; 
    import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
    import '@skeletonlabs/skeleton/styles/skeleton.css';
    import {authStore} from "$lib/stores/authStore";

    import { AppBar, AppRail, AppRailAnchor, AppShell } from "@skeletonlabs/skeleton";
    

    import { onMount } from "svelte";
	import type { LayoutData } from "./$types";
	import NavBar from "$lib/components/NavBar.svelte";

    export let data: any;

</script>
<AppShell slotPageHeader="sticky top-0 z-10" >
    <svelte:fragment slot="header">
    <AppBar border="border-b-2 border-slate-600">
        <svelte:fragment slot="lead">
        <strong class="text-xl text-black uppercase bg-gradient-to-r from-indigo-500 bg-primary-500 border-primary-500 p-2 border rounded-lg">
            Homegame tracker
        </strong>
        </svelte:fragment>
        <svelte:fragment slot="trail"><a class="btn btn-md bg-primary-500 text-black font-bold"
        rel="noreferrer" target="_blank" href="https://github.com">
        GitHub
    </a>
    </svelte:fragment>
    </AppBar>
    </svelte:fragment>
    
    
    <svelte:fragment slot="sidebarLeft">
        <AppRail spacing="space-y-10" active="bg-primary-500" border="border-r-2 border-slate-600">
            <!-- <NavBar isLoggedIn={true} homegameData={null}/> -->
            <svelte:fragment slot="lead">
                <AppRailAnchor href="/">
                    <span class="text-xl">Home</span>
                </AppRailAnchor>
                {#if data.user}
                    {#if data.homegameData}
                    <AppRailAnchor href="/{data.homegameData.name}" >
                        <span class="text-xl">{data.homegameData.name}</span>
                    </AppRailAnchor>
                    {:else}
                    <AppRailAnchor href="/create-homegame">
                        <span class="text-xl">Create Homegame</span>
                    </AppRailAnchor>
                    {/if}
                {/if}
                
            </svelte:fragment>
                <svelte:fragment slot="trail">
                {#if data.user}
                    
                    <AppRailAnchor>
                        <form action="/logout" method="POST">
                            <button type="submit" class="text-xl">Logout</button>
                        </form>
                    </AppRailAnchor>
                {:else}
                    <AppRailAnchor href="/login">
                        <span class="text-xl">Login</span>
                    </AppRailAnchor>
                {/if}
                 </svelte:fragment>

                

        </AppRail>
    </svelte:fragment>

    <slot />

    <svelte:fragment slot="pageFooter"><p class="text-center">&copy; 2023 Homegame Tracker. All rights reserved.</p></svelte:fragment>

</AppShell>

