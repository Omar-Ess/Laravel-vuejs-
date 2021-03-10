<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <the-breadcrumb>
      <li class="breadcrumb-item active">Boîte de réception</li>
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
              <div>
                <div class="row p-4 no-gutters align-items-center">
                  <div class="col-sm-12 col-md-12">
                    <h3 class="font-light mb-0">
                      <i class="ti-email mr-2"></i>{{ allEmails.length }} Emails
                      reçus
                    </h3>
                  </div>
                </div>
                <!-- Mail list-->
                <div class="table-responsive">
                  <table
                    id="dataTable"
                    class="table email-table no-wrap table-hover v-middle mb-0 font-14"
                  >
                    <thead class="d-none">
                      <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="getIsLoading">
                        <td colspan="6" class="text-center">
                          <loading
                            color="white"
                            :active.sync="getIsLoading"
                            :is-full-page="false"
                          >
                            <h5 slot="after">Loading</h5>
                          </loading>
                        </td>
                      </tr>
                      <tr
                        class=""
                        v-for="email in allEmails"
                        v-else
                        :key="email.id"
                      >
                        <!-- star -->
                        <td><i class="fa fa-star text-warning"></i></td>
                        <!-- User -->
                        <td>
                          <strong class="mb-0 text-bold">{{
                            email.data.name
                          }}</strong>
                          <br />
                          <span class="mb-0 text-muted text-small font-light">{{
                            email.data.email
                          }}</span>
                        </td>
                        <!-- Message -->
                        <td>
                          <span
                            class="badge badge-pill text-white font-medium badge-danger mr-2"
                            >Contact</span
                          ><span class="font-light text-dark">
                            {{ email.data.subject | truncate }}</span
                          >
                        </td>

                        <!-- Time -->
                        <td class="text-muted font-light">
                          {{ email.data.created_at | formatedDate }}
                          <i class="fa fa-calendar-alt ml-1"></i>
                        </td>
                        <!-- Attachment -->
                        <td>
                          <a href="https://mail.google.com/mail/u/0/#inbox"
                            ><i class="fa fa-reply text-info"></i
                          ></a>
                        </td>
                        <td>
                          <router-link
                            :to="{
                              name: 'emails.show',
                              params: { id: email.id },
                            }"
                            ><i class="fa fa-eye text-success"></i
                          ></router-link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
      dtTable: null,
    };
  },

  computed: {
    getIsLoading() {
      return this.isLoading["get"];
    },
    ...mapGetters("emails", ["allEmails", "isLoading"]),
  },
  methods: {
    ...mapActions("emails", ["fetchEmails", "searchEmails"]),
  },
  beforeUpdate() {
    if (this.dtTable) {
      this.dtTable.destroy();
    }
  },
  updated() {
    this.dtTable = $("#dataTable").DataTable({
      order: [[0, "desc"]],
      pageLength: 5,
      searching: false,
      bInfo: false,
      bLengthChange: false,
    });
  },
  created() {
    this.$store.commit("emails/clearQuery");
    this.fetchEmails().then(() => {
      // check if the path obtains the query
      if (this.$route.query.q && this.$route.query.q.trim() !== "") {
        // mutate the query state
        this.$store.commit("emails/setQuery", this.$route.query.q);
      }
    });
  },
};
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid transparent;
  border-radius: 0;
}

.no-wrap td,
.no-wrap th {
  white-space: nowrap;
}
.table td,
.table th {
  padding: 0.9375rem 0.4rem;
  vertical-align: top;
  border-top: 1px solid rgba(120, 130, 140, 0.13);
}
.font-light {
  font-weight: 300;
}
</style>
