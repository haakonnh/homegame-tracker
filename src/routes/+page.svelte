<script lang="ts">
    interface HomePageData {
        user: {
            name: string
            role: string
            id: string
        }
        homegameData: any;

    }

    export let data;
</script>
<main class="flex justify-center items-center h-full w-full">


  <div class="card  items-center justify-center 
  m-auto h-full  w-11/12 variant-glass custom">
    <header class="card-header mb-10 mt-5 text-center lg:text-3xl md:text-lg text-white font-bold">
      Homegame Tracker - Track and Manage Your Homegames with Ease.</header>
    <div class="container w-full space-y-5 pl-5 pr-5">
      <p>
        Homegame Tracker is a web application that allows you to track and manage your homegames with ease. 
        It is a free and open source project that is built with SvelteKit and TailwindCSS.

      </p>
    </div>

    <div class="grid grid-cols-3 w-full justify-center items-center">
        <div class="card card-hover w-4/5 ml-5 mt-5 bg-base-100 shadow-xl variant-glass">
          <figure class="p-4">
            <img src="/nima.PNG" alt="Nima" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Nima Salihzada</h2>
            <p>
              Æ hedde Nima og æ elske å spille poker. <br>
              Æ elske å gamble, hehehe.
            </p>
          </div>
        </div>
      <div class="card card-hover h-max w-4/5 ml-5 mt-5 bg-base-100 shadow-xl variant-glass">
        <figure class="p-4">
          <img src="/tarjei.PNG" alt="Nima" class="m-auto p-6 scale-125 rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Tarjei Reite</h2>
          <p>
            Fy faen ass poker er jævla gøy. <br>

          </p>
      </div>
    </div>
      <div class="card card-hover  w-4/5 ml-5 mt-5 bg-base-100 shadow-xl variant-glass">
        <figure class="p-4 ">
          <img src="/sondre.PNG" alt="Sondre" class="m-auto rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Sondre Klevan</h2>
          <p>
            All inn. <br>

          </p>
      
  </div>
</div>
  </div>
  
</main>
        
  <style>
    .custom {
      height: 90%;
    }
  </style>