<script lang="ts">
	import { auth } from "$lib/firebase";
    import "../app.css";
    import {authStore} from "$lib/stores/authStore";

    import { onMount } from "svelte";

    onMount(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            authStore.update((curr: any) => {
                console.log('User on mount: ', user);
                return {
                    ...curr,
                    isLoading: false,
                    currentUser: user,
                }
            })

        });
    });
</script>
<div>
    <slot />
</div>