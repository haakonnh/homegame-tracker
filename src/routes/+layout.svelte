<script lang="ts">
    import "../app.postcss"; 
    //import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
    import '@skeletonlabs/skeleton/themes/theme-modern.css';
    import '@skeletonlabs/skeleton/styles/skeleton.css';
    import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
    import { AppRailTile, storePopup } from '@skeletonlabs/skeleton';
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
    import { page } from '$app/stores';
    import { AppBar, AppRail, AppRailAnchor, AppShell, LightSwitch, ListBox, ListBoxItem, Modal, popup, type PopupSettings } from "@skeletonlabs/skeleton";

    import Profile from "~icons/mdi/account-circle";
    import IconHome from "~icons/mdi/home";
    import Logout from "~icons/mdi/logout";
    import GitHub from "~icons/mdi/github";
    import Game from "~icons/mdi/gamepad-square";
    import Target from "~icons/mdi/target";
    import Login from "~icons/mdi/login";
    import Register from "~icons/mdi/account-plus";
    import Create from "~icons/mdi/plus-circle";
	import { readable } from "svelte/store";

    export let data: any;

    let comboboxValue: string;

    const popupCombobox: PopupSettings = {
        event: 'focus-click',
        target: 'popupCombobox',
        placement: 'bottom',
        closeQuery: '.listbox-item',
    };

    let currentTile = 0;

</script>
<Modal />
<AppShell slotPageHeader="sticky top-0 z-10" >
    <svelte:fragment slot="header">
    <AppBar border="border-b-2 border-slate-600">
        <svelte:fragment slot="lead">
            <Target/>
        <a href="/">
        <strong class="sm:text-2xl text-xs transition-all ease-in-out hover:scale-110  
        hover:bg-primary-500 tracking-wide rounded p-1 sm:p-4 hover:text-black duration-300 text-white ">
             Homegame Tracker
        </strong>
        </a>
        
        </svelte:fragment>
        
        <svelte:fragment slot="trail">
            {#if data.user}
            <button class="btn justify-between" use:popup={popupCombobox}>
                <Profile/>
            </button>
            <div class="card shadow-xl py-2 flex items-center justify-center" data-popup="popupCombobox">
                <ListBox rounded="rounded-none">
                    <ListBoxItem bind:group={comboboxValue} name="medium" value="username">{data.user.name}</ListBoxItem>

                    <ListBoxItem bind:group={comboboxValue} name="medium" value="logout">
                        <form action="/logout" method="POST">
                            <span class="w-full m-auto" ><button type="submit" >Logout</button></span>
                        </form>
                    </ListBoxItem>
                </ListBox>
                <div class="arrow bg-surface-100-800-token" />
            </div>
            {/if}

            
            <a class="btn btn-md  text-white text-lg sm:text-xl font-bold
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
                <AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
                    <svelte:fragment slot="lead">
                        <IconHome/>
                    </svelte:fragment>
                    <span class="text-md sm:text-lg">Home</span>
                </AppRailAnchor>
                {#if data.user}
                    {#if data.homegameData}
                    <AppRailAnchor href="/{data.homegameData.name}"
                    selected={$page.url.pathname === `/${data.homegameData.name}`} >
                        <svelte:fragment slot="lead">
                            <Game/>
                        </svelte:fragment>
                        <span class="text-md sm:text-lg">{data.homegameData.name}</span>
                    </AppRailAnchor>
                    {:else}
                    <AppRailAnchor href="/create-homegame">
                        <svelte:fragment slot="lead"> 
                            <Create/>
                        </svelte:fragment>
                        <span class="text-md sm:text-lg">Create<br> Your<br>Game</span>
                    </AppRailAnchor>
                    {/if}
                {:else}
                    <AppRailAnchor href="/register">
                        <svelte:fragment slot="lead">
                            <Register/>
                        </svelte:fragment>
                        <span class="text-md sm:text-lg">Register</span>
                    </AppRailAnchor>
                {/if}

                
            </svelte:fragment>

                {#if data.user && data.user.readable }
                    {#each data.user.readable as readableGame}
                        <AppRailAnchor href="/{readableGame.name}"
                        selected={$page.url.pathname === `/${readableGame.name}`}>
                            <svelte:fragment slot="lead">
                                <Game/>
                            </svelte:fragment>
                            <span class="text-md sm:text-lg">{readableGame.name}</span>
                        </AppRailAnchor>
                    {/each}
                {/if}

                <svelte:fragment slot="trail">
                {#if data.user}
                    
                    <AppRailAnchor>
                        <svelte:fragment slot="lead">
                            <Logout/>
                        </svelte:fragment>
                        <form action="/logout" method="POST">
                            <button type="submit" class="text-md sm:text-lg">Logout</button>
                        </form>
                    </AppRailAnchor>
                {:else}
                    <AppRailAnchor href="/login">
                        <svelte:fragment slot="lead">
                            <Login/>
                        </svelte:fragment>
                        <span class="text-md sm:text-lg">Login</span>
                    </AppRailAnchor>
                {/if}
                 </svelte:fragment>

                

        </AppRail>
    </svelte:fragment>

    <slot />

    <svelte:fragment slot="pageFooter"><p class="text-center">&copy; 2023 Homegame Tracker. All rights reserved.</p></svelte:fragment>

</AppShell>

