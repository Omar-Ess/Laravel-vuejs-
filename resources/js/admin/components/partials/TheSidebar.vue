<template>
  <!-- Sidebar -->
  <ul
    class="navbar-nav sidebar bg-gradient-primary sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="/"
    >
      <div class="sidebar-brand-icon ">
        <img src="/storage/images/design/logo.png"  style="margin-right: -12px ; max-height : 50px" />
      </div>
      <div class="sidebar-brand-text mx-3">{{ appName }} <span>.</span></div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading mb-1">Aperçu</div>
    <router-link
      :to="{ name: 'dashboard' }"
      v-slot="{ href, navigate, isActive }"
      custom
    >
      <li class="nav-item" :class="[isActive && 'router-link-active']">
        <a class="nav-link" :href="href" @click="navigate">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></a
        >
      </li>
    </router-link>
    <!-- Nav Item - Dashboard -->
    <!-- <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'dashboard' }" tag="li">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></router-link
      >
    </li> -->

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading mb-1">Gestion</div>
    <router-link
      :to="{ name: 'users' }"
      v-slot="{ href, navigate, isActive }"
      custom
    >
      <li class="nav-item" :class="[isActive && 'router-link-active']">
        <a class="nav-link" :href="href" @click="navigate">
          <i class="fas fa-fw fa-users"></i> <span>Utilisateurs</span></a
        >
      </li>
    </router-link>

    <router-link
      :to="{ name: 'categories' }"
      v-slot="{ href, navigate, isActive }"
      custom
    >
      <li class="nav-item" :class="[isActive && 'router-link-active']">
        <a class="nav-link" :href="href" @click="navigate">
          <i class="fas fa-fw fa-clipboard-list"></i>
          <span>Catégories</span></a
        >
      </li>
    </router-link>

    <router-link
      :to="{ name: 'products' }"
      v-slot="{ href, navigate, isActive }"
      custom
    >
      <li class="nav-item" :class="[isActive && 'router-link-active']">
        <a class="nav-link" :href="href" @click="navigate">
          <i class="fas fa-fw fa-shopping-basket"></i>
          <span>Produits</span></a
        >
      </li>
    </router-link>

    <router-link
      :to="{ name: 'sections' }"
      v-slot="{ href, navigate, isActive }"
      custom
    >
      <li class="nav-item" :class="[isActive && 'router-link-active']">
        <a class="nav-link" :href="href" @click="navigate">
          <i class="fas fa-fw fa-columns"></i>
          <span>Sections</span></a
        >
      </li>
    </router-link>
    <router-link
      :to="{ name: 'emails' }"
      v-slot="{ href, navigate, isActive }"
      custom
    >
      <li class="nav-item" :class="[isActive && 'router-link-active']">
        <a class="nav-link" :href="href" @click="navigate">
          <i class="fas fa-fw fa-envelope"></i>
          <span>E-mails</span></a
        >
      </li>
    </router-link>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading mb-1">Compte</div>

    <!-- Nav Item - Charts -->

    <router-link
      :to="{ name: 'profile' }"
      v-slot="{ href, navigate, isActive }"
      custom
    >
      <li class="nav-item" :class="[isActive && 'router-link-active']">
        <a class="nav-link" :href="href" @click="navigate">
          <i class="fas fa-fw fa-user-circle"></i>

          <span>Profil</span></a
        >
      </li>
    </router-link>

    <router-link
      :to="{ name: 'profile.settings' }"
      v-slot="{ href, navigate, isActive }"
      custom
    >
      <li class="nav-item" :class="[isActive && 'router-link-active']">
        <a class="nav-link" :href="href" @click="navigate">
          <i class="fas fa-fw fa-cog"></i>

          <span>Paramètres</span></a
        >
      </li>
    </router-link>

    <!-- Nav Item - Tables -->
    <li class="nav-item">
      <a
        class="nav-link"
        onclick="event.preventDefault();
                                 document.getElementById('logout-form').submit();"
        href="#"
      >
        <i class="fas fa-fw fa-power-off"></i>
        <span>Se déconnecter</span></a
      >
      <form
        id="logout-form"
        action="/logout"
        method="POST"
        style="display: none"
      >
        <input type="hidden" name="_token" :value="csrf" />
      </form>
    </li>

    <br />

    <!-- Sidebar Toggler (Sidebar) -->
    <div
      class="text-center d-none d-md-inline"
      style="z-index: 10000000000000000000000"
    >
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

    <!-- Sidebar Message -->
    <!-- <div class="sidebar-card">
      <img
        class="sidebar-card-illustration mb-2"
        src="img/undraw_rocket.svg"
        alt=""
      />
      <p class="text-center mb-2">
        <strong>SB Admin Pro</strong> est un Panneau d'Administration où vous
        Pouvez Gérer vos Données
      </p>
      <a class="btn btn-success btn-sm" href="/">Aller à l'Acceuil</a>
    </div> -->
  </ul>

  <!-- End of Sidebar -->
</template>

<script>
export default {
  props: {
    csrf: String,
  },
  data() {
    return {
      appName: window.appName,
    };
  },
  methods: {},
};
</script>

<style scoped>
.sidebar-brand-text span {
  color: #cc1616;

  font-weight: 600;

  font-size: 32px;
}
</style>
