<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list 
        dense
        :style="{'padding-top':'0px'}"
      >
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            :to="item.link"
            link
            active-class="activeSideBar"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#083E77"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <img :src="linkLogo" alt="Qrary Semantic" width="130px" height="50px">
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Cari Buku"
        class="hidden-sm-and-down"
        v-model="keyCari"
        @keyup.enter.native="cariBuku"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <div class="text-center"
        v-if="loading == true"
      >
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
      <router-view />
    </v-content>
    <v-btn
      bottom
      color="#F6A113"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
      class="hidden-lg-and-up"
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="800px"
    >
      <v-card>
        <v-card-title class="headerCari">
          Cari Buku
        </v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col
              class="align-center justify-space-between"
              cols="12"
            >
              <v-row
                align="center"
                class="mr-0"
              >
                <v-text-field
                  label="Judul Buku"
                  v-model="keyCariJudul"
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="dialog = false"
          >Batal</v-btn>
          <v-btn
            text
            color="#083E77"
            @click="dialog = false; cariBuku(keyCariJudul);"
          >Cari</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,
      drawer: null,
      linkLogo: require('./assets/logoQrary.svg'),
      items: [
        { icon: 'mdi-information', text: 'Tentang', link: '/' },
        { icon: 'mdi-magnify',text: 'Pencarian', link: '/search' }
      ],
      keyCari: '',
      loading: false,
      keyCariJudul: ''
    }),
    watch: {
      '$route' (to) {
        document.title = to.meta.title + ' | Qrary' || 'Qrary';
        if (to.name == 'search' && this.keyCari != ''){
          this.cariBuku(this.keyCari);
        }
      },
      keyCari() {
        this.cariBuku(this.keyCari);
      },
      dialog(newVal) {
        if (this.$route.name != 'search' && newVal) {
          return this.$router.push({name: 'search'});
        }
      }
    },
    methods: {
      ...mapMutations([
        'searchResults'
      ]),
      cariBuku(key) {
        if (this.$route.name != 'search') {
          return this.$router.push({name: 'search'});
        }

        this.loading = true;
        this.$axios
          .get(`https://qrary-semantic-backend.herokuapp.com/api/books${key ? '?judul='+key : ''}`)
          .then(response => {
            // Set State
            this.searchResults(response.data.data);
            this.loading = false;
          });
          
      }
    }
  }
</script>

<style>
  .activeSideBar{
    /* color: red !important; */
    background-color: #F6A113 !important;
    color: white !important;
  }
  .headerCari{
    background-color: #083E77;
    border-color: #083E77;
    color: white;
    caret-color: white;
  }
</style>
