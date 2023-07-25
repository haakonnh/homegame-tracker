<script lang="ts">
    import { auth } from "$lib/firebase";
    import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
    import { user } from "$lib/firebase";
	  import { checkIfUserOwnsHomegame } from "$lib/utils/authUtils";
    import { playerStore } from "$lib/stores/players";
	  import { getHomegameDataFromLocalStorage, homegameStore } from "$lib/stores/homegameStore";
	  import { beforeUpdate, onMount } from "svelte";
	  import NavBar from "$lib/components/NavBar.svelte";
	  import type { PageData } from "../$types";
	  import type { HomegameData } from "$lib/types";
  

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();

        const credential = await signInWithPopup(auth, provider);

        
        
        const idToken = await credential.user.getIdToken();
      
        
        const res = await fetch("/api/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ idToken }),
        });
  
    

        location.reload();

        console.log(user);
    }


    async function signOutSSR() {
      const res = await fetch("/api/signin", {method: "DELETE"});
      await signOut(auth);

      // refresh page
      location.reload();
    }


    export let data: PageData;

    let homegameData: HomegameData | null = data.homegameData;


    onMount( async () => {
        //homegameData = getHomegameDataFromLocalStorage();
    }); 

  



    
</script>
<NavBar isLoggedIn={data.isLoggedIn} homegameData={homegameData} /> 
<div class="w-full h-full">
<main class="flex flex-col w-2/3 m-auto content-center h-full ">

 


{#if data.isLoggedIn}
    {#if homegameData}
      <!-- Display content when player is logged in and owns a homegame -->
      <div class="m-auto bigmargin">
      <p>Welcome, player!</p>
      <p>
        You own the homegame {homegameData.name}.
      </p>
     </div>
      
      <a href="../{homegameData.name}" class="btn btn-primary flex-none">Go to your homegame page</a>
      <button class="btn btn-warning flex-none" on:click={signOutSSR}> Sign out </button>
  
    {:else}
      <!-- Display content when player is logged in but doesn't own a homegame -->
      <p>Welcome, player! You do not own a homegame yet.</p>
      
      <a href="/create-homegame" class="btn btn-primary flex-none">Create Homegame</a>
      <button class="btn btn-danger flex-none" on:click={signOutSSR}> Sign out </button>
    {/if}
  {:else}
    <!-- Display content when player is logged out -->
    <p>Please log in to access homegame content.</p>
    <button class="btn btn-primary flex-none" on:click={signInWithGoogle}> Sign in with Google </button>
  {/if}
</main>

</div>

<style>
    .bigmargin {
        margin-top: 20%;
    }
  
    button{
        margin: auto;
        margin-top: 10px;
        width: 33%;
    }
    a {

        margin: auto;
        margin-top: 10px;
        width: 33%;
    }
</style>