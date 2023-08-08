<script lang="ts">
    import type { ActionData } from './$types';
    
    export let form: ActionData;
</script>




   
    <main class="h-full w-full">
        <div class="card w-4/5 sm:w-2/5 bg-primary text-primary-content m-auto p-6 border-4 border-primary-500">
            <form action="?/register" method="POST">
                <header><h2 class="card-header sm:text-5xl mb-10">Register!</h2></header>
                <div>
                    <label class="label" for="username">
                        <span class="label-text text-primary-content text-base">Username</span>
                    </label>
                    <input type="text" name="username" id="username" required class="input sm:p-4 p-2 text-white">
                </div>
        
                <div>
                    <label class="label" for="password">
                        <span class="label-text text-primary-content text-base">Password</span>
                    </label>
                    <input type="password" name="password" id="password" required class="input p-2 sm:p-4 text-white"> 
                </div>
                {#if form?.user}
                <div class="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Username is taken.</span>
                </div>
                {/if}

              
                <div class="card-actions justify-end">
                    <button type="submit" class="btn bg-secondary-500 btn-lg mt-5">Register</button>
                </div>
            </form>
            </div>
        
    


    

    
    </main>


<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
  }

</style>