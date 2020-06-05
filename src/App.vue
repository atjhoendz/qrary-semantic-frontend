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
        label="Cari buku berdasarkan judul"
        class="hidden-sm-and-down"
        v-model="keyCari"
        @keyup.enter.native="cariBuku"
        append-icon="mdi-text-box-search"
        @click:append="show_advanced = true; keyCariJudul = ''; dialog = true"
        clearable
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
          {{show_advanced ? 'Pencarian Lanjutan' : 'Cari Buku'}}
        </v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col
              class="align-center justify-space-between"
              cols="12"
            >
              <v-row
                v-if="!show_advanced"
                align="center"
                class="mr-0"
              >
                <v-text-field
                  label="Judul Buku"
                  v-model="keyCariJudul"
                ></v-text-field>
              </v-row>
              <div
                v-if="show_advanced"
              >
                <v-row align="center">
                  <v-checkbox
                    v-model="checkbox_isbn"
                    hide-details
                    class="shrink mr-2 mt-0"
                  ></v-checkbox>
                  <v-text-field 
                    :disabled="!checkbox_isbn"
                    label="No. ISBN Buku"
                    v-model="value_isbn"
                    clearable
                  ></v-text-field>
                </v-row>
                <v-row align="center">
                  <v-checkbox
                    v-model="checkbox_judul"
                    hide-details
                    class="shrink mr-2 mt-0"
                  ></v-checkbox>
                  <v-text-field
                    :disabled="!checkbox_judul"
                    v-model="value_judul"
                    label="Judul Buku"
                    clearable
                  ></v-text-field>
                </v-row>
                <v-row align="center">
                  <v-checkbox
                    v-model="checkbox_penerbit"
                    hide-details
                    class="shrink mr-2 mt-0"
                  ></v-checkbox>
                  <v-text-field
                    :disabled="!checkbox_penerbit"
                    v-model="value_penerbit"
                    label="Penerbit Buku"
                    clearable
                  ></v-text-field>
                </v-row>
                <v-row align="center">
                  <v-checkbox
                    v-model="checkbox_penulis"
                    hide-details
                    class="shrink mr-2 mt-0"
                  ></v-checkbox>
                  <v-text-field
                    :disabled="!checkbox_penulis"
                    v-model="value_penulis"
                    label="Penulis Buku"
                    clearable
                  ></v-text-field>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn
            v-if="show_advanced == false"
            text
            @click="keyCariJudul = ''; show_advanced = true"
          >
            Lanjutan
          </v-btn>
          <v-btn
            v-if="show_advanced == true"
            text
            @click="checkbox_isbn = false; checkbox_judul = false; checkbox_penerbit = false; checkbox_penulis = false;show_advanced = false"
          >
            Kembali
          </v-btn>
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
      keyCariJudul: '',
      checkbox_isbn: false,
      checkbox_judul: false,
      checkbox_penerbit: false,
      checkbox_penulis: false,
      value_isbn: '',
      value_judul: '',
      value_penerbit: '',
      value_penulis: '',
      show_advanced: false
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
      },
      checkbox_isbn(newVal) {
        if(!newVal){
          this.value_isbn = '';
        }
      },
      checkbox_judul(newVal) {
        if(!newVal){
          this.value_judul = '';
        }
      },
      checkbox_penerbit(newVal) {
        if(!newVal){
          this.value_penerbit = '';
        }
      },
      checkbox_penulis(newVal) {
        if(!newVal){
          this.value_penulis = '';
        }
      }
    },
    methods: {
      ...mapMutations([
        'searchResults'
      ]),
      // fungsi mengambil data dari backend
      cariBuku(key) {
        if (this.$route.name != 'search') {
          return this.$router.push({name: 'search'});
        }
        // endpoint backend beserta data yang ingin diambil
        let url = `https://qrary-semantic-backend.herokuapp.com/api/books?judul=${key ? key.trim() : ''}${this.value_judul ? this.value_judul.trim() : ''}${this.value_isbn ? '&isbn='+this.value_isbn.trim() : ''}${this.value_penerbit ? '&penerbit='+this.value_penerbit.trim() : ''}${this.value_penulis ? '&penulis='+this.value_penulis.trim() : ''}`;

        this.loading = true;
        this.$axios // proses pengambilan data
          .get(url)
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
