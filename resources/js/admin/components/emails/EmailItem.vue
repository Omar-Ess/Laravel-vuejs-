<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <the-breadcrumb>
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'emails' }">
          <i class="fa fa-clipboard-alt"></i> Boîte de réception</router-link
        >
      </li>
      <li class="breadcrumb-item active">Email</li>
    </the-breadcrumb>

    <div class="row">
      <div class="col-md-12 col-lg-12">
        <div class="card">
          <div class="card-body bg-black text-white mailbox-widget pb-0">
            <h2 class="text-white pb-3">
              <i class="fa fa-envelope"></i> Votre boîte mail
            </h2>
            <ul
              class="nav nav-tabs custom-tab border-bottom-0 mt-4"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="inbox-tab"
                  data-toggle="tab"
                  aria-controls="inbox"
                  href="#inbox"
                  role="tab"
                  aria-selected="true"
                >
                  <span class="d-block d-md-none"
                    ><i class="fa fa-inbox"></i
                  ></span>
                  <span class="d-none d-md-block"> Boîte de réception</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade active show"
              id="inbox"
              aria-labelledby="inbox-tab"
              role="tabpanel"
            >
              <div class="email-app mb-4">
                <main class="message">
                  <div class="text-center" v-if="getIsLoading">
                    <loading
                      color="white"
                      :active.sync="getIsLoading"
                      :is-full-page="false"
                    >
                      <h5 slot="after" class="text-light">Loading</h5>
                    </loading>
                  </div>
                  <div class="details" v-else>
                    <div class="title">
                      {{ emailObject.data.subject }}
                    </div>
                    <div class="header">
                      <img
                        class="avatar"
                        src="/storage/images/users/noavatar.jpg"
                      />
                      <div class="from">
                        <span>{{ emailObject.data.name }}</span>
                        {{ emailObject.data.email }}
                      </div>
                      <div class="date">
                        {{ emailObject.created_at | formatedDate }}
                        <i class="fa fa-calendar-alt"></i>
                      </div>
                    </div>
                    <div class="content">
                      <p>
                        {{ emailObject.data.message }}
                      </p>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /.container-fluid -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      loading: true,
    };
  },

  computed: {
    getIsLoading() {
      return this.isLoading["get"];
    },
    ...mapGetters("emails", ["emailObject", "isLoading"]),
  },
  methods: {
    ...mapActions("emails", ["fetchEmail"]),
  },

  mounted() {
    const id = this.$route.params.id;
    this.fetchEmail(id);
  },
};
</script>

<style scoped>
.email-app {
  display: flex;
  flex-direction: row;
  background: #fff;
}

.email-app main {
  min-width: 0;
  flex: 1;
  padding: 1rem;
}

.email-app .message .details .title {
  padding: 1rem 0;
  font-weight: bold;
}

.email-app .message .details .header {
  display: flex;
  padding: 1rem 0;
  margin: 1rem 0;
  border-top: 1px solid #e1e6ef;
  border-bottom: 1px solid #e1e6ef;
}

.email-app .message .details .header .avatar {
  width: 40px;
  height: 40px;
  margin-right: 1rem;
}

.email-app .message .details .header .from {
  font-size: 12px;
  color: #9faecb;
  align-self: center;
}

.email-app .message .details .header .from span {
  display: block;
  font-weight: bold;
}

.email-app .message .details .header .date {
  margin-left: auto;
}

@media (max-width: 767px) {
  .email-app {
    flex-direction: column;
  }
}

@media (max-width: 575px) {
  .email-app .message .header {
    flex-flow: row wrap;
  }
  .email-app .message .header .date {
    flex: 0 0 100%;
  }
}
</style>
