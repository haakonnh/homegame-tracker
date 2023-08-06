<script lang="ts">
	  import NavBar from "$lib/components/NavBar.svelte";
    import type { ActionData } from "./$types";

    export let form: ActionData;

    
</script>


<main class="h-full w-full">
    <div class="card w-1/3 bg-primary text-primary-content m-auto p-6 border-4 border-primary-500">
        <form action="?/login" method="POST">
   
    
                <header class="card-header"><h2 class=" text-5xl mb-10">Login!</h2></header>
                
                <div>
                    <label class="label" for="username">
                        <span class="label-text text-primary-content text-base">Username</span>
                    
                    <input type="text" name="username" id="username" required class="input p-4 text-white">
                </label>
                </div>
        
                <div>
                    <label class="label" for="password">
                        <span class="label-text text-primary-content text-base">Password</span>
                    
                    <input type="password" name="password" id="password" required class="input p-4 text-white"> 
                </label>
                </div>
                {#if form?.fail}
                <div class="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Username and password required.</span>
                </div>
                {/if}

                {#if form?.credentials}

                <div class="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>You have entered wrong credentials.</span>
                </div>

                {/if}

              
                <footer class="card-footer mt-5 w-full ">
                    <button type="submit" class="btn bg-secondary-500 btn-lg m-auto">Login</button>
                </footer>
            
   

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