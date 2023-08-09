<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    export let form: any;
</script>

<div class="flex justify-center items-center w-full h-full" >

    <div class="card w-4/5 sm:w-2/5 border rounded-lg border-slate-500 variant-glass">   
        <header class="card-header font-bold sm:text-3xl text-lg ">
            Add Permissions
        </header>
        <form action="?/addpermissions" method="POST">
            <label for="username" class="p-2 mt-10">
                <span class="font-bold">Enter the username for the user you want to give access to {data.homegameData.name}.</span>
                <input type="text" name="username" id="username" class="input p-2 sm:p-3 text-white">
            </label>
            {#if form?.fail}
            <div class="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Username doesnt exist.</span>
            </div>
            {/if}

            <button class="btn btn-md bg-secondary-500 m-3 sm:btn-xl text-secondary-200">Update Permissions</button>
        </form>
    </div>
</div>