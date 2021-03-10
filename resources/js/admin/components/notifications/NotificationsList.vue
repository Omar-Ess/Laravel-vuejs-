<template>
  <!-- Nav Item - Alerts -->
  <li class="nav-item dropdown no-arrow mx-1" id="myDropdown">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <i class="fa fa-bell fa-fw"></i>
      <!-- Counter - Alerts -->
      <span class="badge badge-danger badge-counter"
        >{{ unreadNotificationsLength }}+</span
      >
    </a>
    <!-- Dropdown - Alerts -->
    <div
      class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
      aria-labelledby="alertsDropdown"
      tabindex="0"
    >
      <h6 class="dropdown-header bg-black">Centre de Notifications</h6>
      <div v-if="notifications.length" style="width: 100%">
        <div
          :class="[notification.read_at == null ? 'bg-grey' : '']"
          v-for="notification in notifications"
          :key="notification.id"
        >
          <a
            class="dropdown-item d-flex align-items-center"
            href="https://mail.google.com/"
          >
            <div class="mr-3">
              <div class="icon-circle bg-success">
                <i class="fa fa-envelope text-white"></i>
              </div>
            </div>
            <div>
              <div class="small text-gray-500">
                {{ notification.created_at | formatedDate }}
              </div>
              {{ notification.data.email }} vous a envoyé un email
            </div>
          </a>
        </div>
      </div>
      <div v-else class="mt-2">
        <a class="dropdown-item d-flex align-items-center" href="#">
          <div>Aucune notification pour le moment</div>
        </a>
      </div>
      <router-link
        :to="{name : 'emails'}"
        class="dropdown-item text-center small "
        v-if="notifications.length"
      >
        Voir tous
      </router-link>
      <button
        @click="deleteNotifications"
        class="dropdown-item text-center small text-light bg-black"
        v-if="notifications.length"
      >
        Supprimer Tout
      </button>
    </div>
  </li>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      notifications: [],
      unreadNotificationsLength: [],
    };
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
  methods: {
    getNotifications() {
      axios
        .get("/api/notifications")
        .then((res) => {
          this.notifications = res.data.notifications;
          const unreadNotifications = this.notifications.filter(
            (notification) => {
              return notification.read_at == null;
            }
          );
          this.unreadNotificationsLength = unreadNotifications.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteNotifications() {
      axios
        .delete("/api/notifications")
        .then((res) => {
          this.notifications = [];
          this.unreadNotificationsLength = 0;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    markNotifications() {
      axios
        .put("/api/notifications")
        .then((res) => {
          this.getNotifications();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    //   listening for dropdown close event
    $("#myDropdown").on("hide.bs.dropdown", () => {
      this.markNotifications();
    });
    // monitor any results using echo
    Echo.private(`App.Models.User.${this.authUser.id}`).notification((noti) => {
      const newNotification = {
        id: noti.id,
        data: { email: noti.email },
        read_at: null,
      };
      this.notifications.unshift(newNotification);
      this.unreadNotificationsLength++;
      this.$toast.info("Nouvelle Notification", { position: "top-center" });
    });
    this.getNotifications();
  },
};
</script>

<style scoped>
.bg-grey {
  background-color: #e5e7f0;
}
</style>
