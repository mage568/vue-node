<template>
  <div class="personinfo">
    <div class="add-btn">
      <b-button variant="success" @click="btnAdd_clicked">Add</b-button>
    </div>
    <div class="tbl-person">
      <b-table bordered hover :items="items" :fields="fields"></b-table>
    </div>
    <div class="pagenation-section">
      <b-form-select v-model="perPage" :options="options" @change="pageChange"/>
      <p>per page</p>
      <b-pagination
        :total-rows="totalRows"
        :per-page="perPage"
        v-model="pageNum"
        @change="filterArray"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "PersonalInfo",
  data() {
    return {
      items: [],
      pageNum: 1,
      perPage: 5,
      totalRows: 0,
      allItems: [
  {
    no: 1,
    name: "Ivan",
    birthday: "1991-10-22",
    address: "adedf-12",
    Email: "ivan.voranau@gmail.com",
    change: ""
  },
  {
    no: 2,
    name: "Roben",
    birthday: "1990-01-21",
    address: "dffe-11",
    Email: "roben.berghuis@gmail.com",
    change: ""
  },
  {
    no: 3,
    name: "Andrey",
    birthday: "1993-04-15",
    address: "w2ef-03",
    Email: "andrey.lapteshev@gmail.com",
    change: ""
  },
  {
    no: 4,
    name: "Alexey",
    birthday: "1987-12-10",
    address: "dfefe-08",
    Email: "alexey.chislov@gmail.com",
    change: ""
  },
  {
    no: 5,
    name: "Denis",
    birthday: "1988-02-10",
    address: "dfeadf-12",
    Email: "denis.berry@gmail.com",
    change: ""
  },
  {
    no: 6,
    name: "Lukas",
    birthday: "1992-12-26",
    address: "luadf-11",
    Email: "lukas.antulius@gmail.com",
    change: ""
  },
  {
    no: 7,
    name: "Ignas",
    birthday: "1992-12-26",
    address: "luadf-11",
    Email: "lukas.antulius@gmail.com",
    change: ""
  },
  {
    no: 8,
    name: "Arthur",
    birthday: "1990-01-21",
    address: "dffe-11",
    Email: "roben.berghuis@gmail.com",
    change: ""
  },
  {
    no: 9,
    name: "Saulius",
    birthday: "1993-04-15",
    address: "w2ef-03",
    Email: "andrey.lapteshev@gmail.com",
    change: ""
  },
  {
    no: 10,
    name: "Arnas",
    birthday: "1987-12-10",
    address: "dfefe-08",
    Email: "alexey.chislov@gmail.com",
    change: ""
  },
  {
    no: 11,
    name: "Eigintas",
    birthday: "1988-02-10",
    address: "dfeadf-12",
    Email: "denis.berry@gmail.com",
    change: ""
  },
  {
    no: 12,
    name: "Iruna ir leva",
    birthday: "1992-12-26",
    address: "luadf-11",
    Email: "lukas.antulius@gmail.com",
    change: ""
  },
  {
    no: 13,
    name: "Nerija",
    birthday: "1992-12-26",
    address: "luadf-11",
    Email: "lukas.antulius@gmail.com",
    change: ""
  },
  {
    no: 14,
    name: "Tautrimas",
    birthday: "1990-01-21",
    address: "dffe-11",
    Email: "roben.berghuis@gmail.com",
    change: ""
  },
  {
    no: 15,
    name: "Emilis",
    birthday: "1993-04-15",
    address: "w2ef-03",
    Email: "andrey.lapteshev@gmail.com",
    change: ""
  },
  {
    no: 16,
    name: "Mantas",
    birthday: "1987-12-10",
    address: "dfefe-08",
    Email: "alexey.chislov@gmail.com",
    change: ""
  },
  {
    no: 17,
    name: "Martynas",
    birthday: "1988-02-10",
    address: "dfeadf-12",
    Email: "denis.berry@gmail.com",
    change: ""
  },
  {
    no: 18,
    name: "Akwa,Dulis,Ronaldis",
    birthday: "1992-12-26",
    address: "luadf-11",
    Email: "lukas.antulius@gmail.com",
    change: ""
  },
  {
    no: 19,
    name: "Brandon",
    birthday: "1992-12-26",
    address: "luadf-11",
    Email: "lukas.antulius@gmail.com",
    change: ""
  },
  {
    no: 20,
    name: "Rapolas",
    birthday: "1990-01-21",
    address: "dffe-11",
    Email: "roben.berghuis@gmail.com",
    change: ""
  },
  {
    no: 21,
    name: "Ernest",
    birthday: "1993-04-15",
    address: "w2ef-03",
    Email: "andrey.lapteshev@gmail.com",
    change: ""
  },
  {
    no: 22,
    name: "Vytautas",
    birthday: "1987-12-10",
    address: "dfefe-08",
    Email: "alexey.chislov@gmail.com",
    change: ""
  },
  {
    no: 23,
    name: "Mindaugas",
    birthday: "1988-02-10",
    address: "dfeadf-12",
    Email: "denis.berry@gmail.com",
    change: ""
  },
  {
    no: 24,
    name: "airidas",
    birthday: "1992-12-26",
    address: "luadf-11",
    Email: "lukas.antulius@gmail.com",
    change: ""
  },
  {
    no: 25,
    name: "alexander",
    birthday: "1992-12-26",
    address: "luadf-11",
    Email: "lukas.antulius@gmail.com",
    change: ""
  },
  {
    no: 26,
    name: "Titus",
    birthday: "1990-01-21",
    address: "dffe-11",
    Email: "roben.berghuis@gmail.com",
    change: ""
  },
  {
    no: 27,
    name: "Matas",
    birthday: "1993-04-15",
    address: "w2ef-03",
    Email: "andrey.lapteshev@gmail.com",
    change: ""
  },
  {
    no: 28,
    name: "Richard",
    birthday: "1987-12-10",
    address: "dfefe-08",
    Email: "alexey.chislov@gmail.com",
    change: ""
  },
  {
    no: 29,
    name: "Semion",
    birthday: "1988-02-10",
    address: "dfeadf-12",
    Email: "denis.berry@gmail.com",
    change: ""
  },
  {
    no: 30,
    name: "Simas",
    birthday: "1992-12-26",
    address: "luadf-11",
    Email: "lukas.antulius@gmail.com",
    change: ""
  },
  {
    no: 31,
    name: "Justas",
    birthday: "1992-12-26",
    address: "luadf-11",
    Email: "lukas.antulius@gmail.com",
    change: ""
  },
  {
    no: 32,
    name: "Hasan",
    birthday: "1990-01-21",
    address: "dffe-11",
    Email: "roben.berghuis@gmail.com",
    change: ""
  },
  {
    no: 33,
    name: "Benas",
    birthday: "1993-04-15",
    address: "w2ef-03",
    Email: "andrey.lapteshev@gmail.com",
    change: ""
  },
  {
    no: 34,
    name: "Arnis",
    birthday: "1987-12-10",
    address: "dfefe-08",
    Email: "alexey.chislov@gmail.com",
    change: ""
  },
  {
    no: 35,
    name: "Elvinas",
    birthday: "1988-02-10",
    address: "dfeadf-12",
    Email: "denis.berry@gmail.com",
    change: ""
  },
  {
    no: 36,
    name: "Vilius",
    birthday: "1992-12-26",
    address: "luadf-11",
    Email: "lukas.antulius@gmail.com",
    change: ""
  },
  {
    no: 37,
    name: "Jonas",
    birthday: "1992-12-26",
    address: "luadf-11",
    Email: "lukas.antulius@gmail.com",
    change: ""
  },
  {
    no: 38,
    name: "Marijonas",
    birthday: "1990-01-21",
    address: "dffe-11",
    Email: "roben.berghuis@gmail.com",
    change: ""
  },
  {
    no: 39,
    name: "Vitaliy",
    birthday: "1993-04-15",
    address: "w2ef-03",
    Email: "andrey.lapteshev@gmail.com",
    change: ""
  },
  {
    no: 40,
    name: "Augustinas",
    birthday: "1987-12-10",
    address: "dfefe-08",
    Email: "alexey.chislov@gmail.com",
    change: ""
  },
  {
    no: 41,
    name: "Vik",
    birthday: "1988-02-10",
    address: "dfeadf-12",
    Email: "denis.berry@gmail.com",
    change: ""
  },
  {
    no: 42,
    name: "Edvinas",
    birthday: "1992-12-26",
    address: "luadf-11",
    Email: "lukas.antulius@gmail.com",
    change: ""
  },
  {
    no: 43,
    name: "Martynas",
    birthday: "1992-12-26",
    address: "luadf-11",
    Email: "lukas.antulius@gmail.com",
    change: ""
  },
  {
    no: 44,
    name: "Paulius",
    birthday: "1990-01-21",
    address: "dffe-11",
    Email: "roben.berghuis@gmail.com",
    change: ""
  },
  {
    no: 45,
    name: "Andrius",
    birthday: "1993-04-15",
    address: "w2ef-03",
    Email: "andrey.lapteshev@gmail.com",
    change: ""
  },
  {
    no: 46,
    name: "Julius",
    birthday: "1987-12-10",
    address: "dfefe-08",
    Email: "alexey.chislov@gmail.com",
    change: ""
  },
  {
    no: 47,
    name: "Erikas",
    birthday: "1988-02-10",
    address: "dfeadf-12",
    Email: "denis.berry@gmail.com",
    change: ""
  },
  {
    no: 48,
    name: "Vladas",
    birthday: "1992-12-26",
    address: "luadf-11",
    Email: "lukas.antulius@gmail.com",
    change: ""
  },
  {
    no: 49,
    name: "Naglis",
    birthday: "1992-12-26",
    address: "luadf-11",
    Email: "lukas.antulius@gmail.com",
    change: ""
  },
  {
    no: 50,
    name: "David",
    birthday: "1992-12-26",
    address: "luadf-11",
    Email: "lukas.antulius@gmail.com",
    change: ""
  }
],
      options: [
        { value: 5, text: 5 },
        { value: 10, text: 10 },
        { value: 15, text: 15 },
        { value: 20, text: 20 }
      ],
      fields: [
          {
              key: "no",
              sortable: true
          },
          {
              key: 'name',
              sortable: false
          },
          {
              key: 'birthday',
              sortable: true
          },
          {
              key: 'address',
              sortable: false
          },
          {
              key: 'Email',
              sortable: false
          },
          {
              key: 'change',
              sortable: false
          }

      ]
    };
  },
  mounted() {
    this.totalRows = this.allItems.length;
    this.items = this.allItems.filter(item => item.no <= this.perPage);
  },
  methods: {
    filterArray: function(num) {
      let from_page = this.perPage * (num - 1);
      let to_page = this.perPage * num;
      this.items = this.allItems.filter(function(item) {
        return item.no > from_page && item.no <= to_page;
      });
    },
    pageChange: function(per_page) {
      let from_page = per_page * (this.pageNum - 1);
      let to_page = per_page * this.pageNum;
      this.items = this.allItems.filter(function(item) {
        return item.no > from_page && item.no <= to_page;
      });
    },
    btnAdd_clicked: function() {
        var cloneArr = this.allItems.slice(0);
        cloneArr.sort(function(a, b) { return b.no - a.no });
        let new_row = {
            no: cloneArr[0].no + 1,
            name: "",
            birthday: "",
            address: "",
            Email: "",
            change: ""
        };
        this.allItems.push(new_row);
        this.totalRows = this.allItems.length;
        let from_page = this.perPage * (this.pageNum - 1);
        let to_page = this.perPage * this.pageNum;
        this.items = this.allItems.filter(function(item) {
          return item.no > from_page && item.no <= to_page;
        });
    }
  }
};
</script>

<style>
.personinfo .add-btn {
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  padding-bottom: 10px;
}
.tbl-person table thead tr th {
  background-color: rgb(40, 167, 69);
  color: white;
}
.personinfo .pagenation-section {
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  align-items: baseline;
}
.personinfo .pagenation-section select {
  width: 100px;
  margin-right: 5px;
}
.personinfo .pagenation-section p {
  margin-right: 20px;
}
</style>

