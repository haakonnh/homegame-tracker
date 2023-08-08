<script lang="ts">
    import NavBar from '$lib/components/NavBar.svelte';
    import type { ActionData } from './$types';
    
    export let form: ActionData;
</script>

<NavBar isLoggedIn={false} homegameData={null} />



<form action="?/register" method="POST">
   
    <main>
        <div class="card w-1/3 bg-primary text-primary-content">
            <div class="card-body">
                <h2 class="card-title text-4xl">Register!</h2>
                <div>
                    <label class="label" for="username">
                        <span class="label-text text-primary-content text-base">Username</span>
                    </label>
                    <input type="text" name="username" id="username" required class="input input-primary text-white">
                </div>
        
                <div>
                    <label class="label" for="password">
                        <span class="label-text text-primary-content text-base">Password</span>
                    </label>
                    <input type="password" name="password" id="password" required class="input input-primary text-white"> 
                </div>
                {#if form?.user}
                <div class="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Username is taken.</span>
                </div>
                {/if}

              
                <div class="card-actions justify-end">
                    <button type="submit" class="btn btn-secondary btn-lg">Register</button>
                </div>
            </div>
        </div>
        
    


    

    
    </main>

</form>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>