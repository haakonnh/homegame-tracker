<script lang="ts">
    import "../app.postcss"; 
    import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
    import '@skeletonlabs/skeleton/styles/skeleton.css';

    import { AppBar, AppRail, AppRailAnchor, AppShell } from "@skeletonlabs/skeleton";

    import IconHome from "~icons/mdi/home";
    import Logout from "~icons/mdi/logout";
    import GitHub from "~icons/mdi/github";
    import Game from "~icons/mdi/gamepad-square";
    import Target from "~icons/mdi/target";
    import Login from "~icons/mdi/login";
    import Register from "~icons/mdi/account-plus";

    export let data: any;

</script>
<AppShell slotPageHeader="sticky top-0 z-10" >
    <svelte:fragment slot="header">
    <AppBar border="border-b-2 border-slate-600">
        <svelte:fragment slot="lead">
        <a href="/">
        <strong class="text-2xl transition-all ease-in-out hover:scale-110  
        hover:bg-indigo-500 rounded p-4 hover:text-black duration-300 text-white uppercase mr-2 ">
             Homegame tracker
        </strong>
        </a>
        <Target/>
        </svelte:fragment>
        <svelte:fragment slot="trail"><a class="btn btn-md  text-white text-xl font-bold
        hover:scale-125"
        rel="noreferrer" target="_blank" href="https://github.com">
        GitHub
        <GitHub/>
    </a>
    
    </svelte:fragment>
    </AppBar>
    </svelte:fragment>
    
    
    <svelte:fragment slot="sidebarLeft">
        <AppRail active="bg-primary-500" border="border-r-2 border-slate-600">
            <!-- <NavBar isLoggedIn={true} homegameData={null}/> -->
            <svelte:fragment slot="lead">
                <AppRailAnchor href="/">
                    <svelte:fragment slot="lead">
                        <IconHome/>
                    </svelte:fragment>
                    <span class="text-xl">Home</span>
                </AppRailAnchor>
                {#if data.user}
                    {#if data.homegameData}
                    <AppRailAnchor href="/{data.homegameData.name}" >
                        <svelte:fragment slot="lead">
                            <Game/>
                        </svelte:fragment>
                        <span class="text-xl">{data.homegameData.name}</span>
                    </AppRailAnchor>
                    {:else}
                    <AppRailAnchor href="/create-homegame">
                        
                        <span class="text-xl">Create Homegame</span>
                    </AppRailAnchor>
                    {/if}
                {:else}
                    <AppRailAnchor href="/register">
                        <svelte:fragment slot="lead">
                            <Register/>
                        </svelte:fragment>
                        <span class="text-xl">Register</span>
                    </AppRailAnchor>
                {/if}

                
            </svelte:fragment>
                <svelte:fragment slot="trail">
                {#if data.user}
                    
                    <AppRailAnchor>
                        <svelte:fragment slot="lead">
                            <Logout/>
                        </svelte:fragment>
                        <form action="/logout" method="POST">
                            <button type="submit" class="text-xl">Logout</button>
                        </form>
                    </AppRailAnchor>
                {:else}
                    <AppRailAnchor href="/login">
                        <svelte:fragment slot="lead">
                            <Login/>
                        </svelte:fragment>
                        <span class="text-xl">Login</span>
                    </AppRailAnchor>
                {/if}
                 </svelte:fragment>

                

        </AppRail>
    </svelte:fragment>

    <slot />

    <svelte:fragment slot="pageFooter"><p class="text-center">&copy; 2023 Homegame Tracker. All rights reserved.</p></svelte:fragment>

</AppShell>

