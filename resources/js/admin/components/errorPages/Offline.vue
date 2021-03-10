<template>
  <div class="" style="margin-top : -25px">
    <div class="row">
      <div
        class="col-sm-12 offline-div text-center bg-danger text-light"
        style="padding: 16px"
      >
        <span class="lead"
          ><i class="fa fa-power-off"></i> Pas de Connexion Internet</span
        >
      </div>
    </div>
    <div class="content-wrapper mt-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">

            <h1 class="lead display-4 h3  text-gray-800">
              <i class="fa fa-plug"></i> Tu n'es pas Connecté
            </h1>
            <p>
              Et sb Admin n'est tout simplement pas la même chose sans vous.
              Nous allons vous ramener en ligne!
            </p>
            <b class="ml-3">Essayer :</b>
            <ul class="mt-2">
              <li>Vérification de vos câbles réseau, modem et routeurs</li>
              <li>Reconnexion à votre réseau sans fil</li>
              <li>
                <button @click="reload" style="padding: 0" class="btn btn-link">
                  Rafraîchir la page
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    reload() {
      location.reload();
    },
  },
};
</script>
