<template>
    <v-container
        fluid
        :class="container"
      >
        <h2 class="txtHead2">Daftar Buku</h2>
        <v-row>
          <v-col
            v-for="book in books"
            :key="book.judul"
            cols='6'
            md='2'
          >
            <v-row
              justify="left"
            >
              <v-card
                class="mx-1 mb-4"
                max-width="190"
                elevation="3"
                :style="{'text-align':'center'}"
              >
                <v-img
                  class="white--text"
                  max-height="250"
                  :src="book.urlCover"
                  :lazy-src="book.urlCover"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <v-card-title style="color: #112E4E;">
                  {{ book.judul }}
                </v-card-title>
                <v-card-text class="text--primary">
                  {{ book.penulis }}
                </v-card-text>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
import coverBookDefault from '../assets/book_cover_default.jpg'

export default {
    name: 'ListBooks',

    data:() => ({
        books: [
        {
          judul: 'Ini judul',
          penulis: 'imron madani',
          urlCover: coverBookDefault
        },
        {
          judul: 'Ini judul',
          penulis: 'imron madani',
          urlCover: coverBookDefault
        },
        {
          judul: 'Ini judul',
          penulis: 'imron madani',
          urlCover: coverBookDefault
        },
        {
          judul: 'Ini judul',
          penulis: 'imron madani',
          urlCover: coverBookDefault
        },
        {
          judul: 'Ini judul',
          penulis: 'imron madani',
          urlCover: coverBookDefault
        },
        {
          judul: 'Ini judul',
          penulis: 'imron madani',
          urlCover: coverBookDefault
        },
        {
          judul: 'Ini judul',
          penulis: 'imron madani',
          urlCover: coverBookDefault
        },
        {
          judul: 'Ini judul',
          penulis: 'imron madani',
          urlCover: coverBookDefault
        },
        {
          judul: 'Ini judul',
          penulis: 'imron madani',
          urlCover: coverBookDefault
        },
        {
          judul: 'Ini judul',
          penulis: 'imron madani',
          urlCover: coverBookDefault
        },
        {
          judul: 'Ini judul',
          penulis: 'imron madani',
          urlCover: coverBookDefault
        }
      ]
    })
}
</script>
<style>
  .txtHead2{
    color: #083E77;
    margin-bottom: 20px;
  }
</style>