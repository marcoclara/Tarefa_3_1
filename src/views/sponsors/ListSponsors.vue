<template>
  <section class="page-section">
    <b-container>
     <HeaderPage title="Gestão de Sponsors"/>      
      <!--MENU TOPO-->
      <b-row class="mb-4">
        <b-col cols="1"></b-col>
        <b-col>
          <router-link
            to="sponsors/add"
            tag="button"
            class="btn btn-outline-success mr-2 mt-2"
          ><i class="fas fa-plus-square"></i> ADICIONAR SPONSOR</router-link>
          <router-link
            to="/admin"
            tag="button"
            class="btn btn-outline-info mr-2 mt-2"
          ><i class="fas fa-bars"></i> MENU PRINCIPAL</router-link>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>

      <!-- TABELA -->
      <b-row>
        <b-col cols="1"></b-col>
        <b-col>
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col">
                  NOME
                  <i class="fas fa-arrow-up"></i>
                  <i class="fas fa-arrow-down"></i>
                </th>
                <th scope="col">ANIMAL</th>
                <th scope="col">DATA DE CRIAÇÃO</th>
                <th scope="col">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              <tr>                
                <td class="pt-4">Fernando Pessoa</td>
                <td class="pt-4">Leão</td>
                <td class="pt-4">2023-11-20 12:00:00</td>
                <td>
                  <router-link to="sponsors/edit" tag="button" class="btn btn-outline-success mr-2"><i class="fas fa-edit"></i> EDITAR</router-link>
                  <button @click="viewUser()" type="button" class="btn btn-outline-success mr-2"><i class="fas fa-search"></i> VER</button>
                  <button @click="removeUser()" type="button" class="btn btn-outline-danger mr-2 "><i class="fas fa-trash-alt"></i> REMOVER</button>
                </td>
              </tr>
              <tr>                
                <td class="pt-4">José Saramago</td>
                <td class="pt-4">Zebra</td>
                <td class="pt-4">2023-11-20 12:00:00</td>
                <td>
                  <router-link to="sponsors/edit" tag="button" class="btn btn-outline-success mr-2"><i class="fas fa-edit"></i> EDITAR</router-link>
                  <button @click="viewUser()" type="button" class="btn btn-outline-success mr-2"><i class="fas fa-search"></i> VER</button>
                  <button @click="removeUser()" type="button" class="btn btn-outline-danger mr-2 "><i class="fas fa-trash-alt"></i> REMOVER</button>
                </td>
              </tr>
              <tr>                
                <td class="pt-4">Luis Vaz de Camões</td>
                <td class="pt-4">Elefante</td>
                <td class="pt-4">2023-11-20 12:00:00</td>
                <td>
                  <router-link to="sponsors/edit" tag="button" class="btn btn-outline-success mr-2"><i class="fas fa-edit"></i> EDITAR</router-link>
                  <button @click="viewUser()" type="button" class="btn btn-outline-success mr-2"><i class="fas fa-search"></i> VER</button>
                  <button @click="removeUser()" type="button" class="btn btn-outline-danger mr-2 "><i class="fas fa-trash-alt"></i> REMOVER</button>
                </td>
              </tr>
              <tr>                
                <td class="pt-4">Gil Vicente</td>
                <td class="pt-4">Rinoceronte</td>
                <td class="pt-4">2023-11-20 12:00:00</td>
                <td>
                  <router-link to="sponsors/edit" tag="button" class="btn btn-outline-success mr-2"><i class="fas fa-edit"></i> EDITAR</router-link>
                  <button @click="viewUser()" type="button" class="btn btn-outline-success mr-2"><i class="fas fa-search"></i> VER</button>
                  <button @click="removeUser()" type="button" class="btn btn-outline-danger mr-2 "><i class="fas fa-trash-alt"></i> REMOVER</button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue"
export default {
  name: "ManageUsers",
  components: {
    HeaderPage
  },
  methods: {
    viewUser() {
      this.$fire({
        title: "Sponsor",
        html: `<h5>Fernando Pessoa</h5>
          <p>
          <b>Animal:</b> Leão <br>
          <b>Data de registo:</b> 2023-11-20 12:00:00 <br>
          </p>`,
        imageUrl: require(`@/assets/avatars/leao.png`),
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "Leão"
      });
    },
    removeUser() {
      this.$confirm(
        "Se sim, clique em OK",
        "Deseja mesmo remover o sponsor?",
        "warning",
        { confirmButtonText: "OK", cancelButtonText: "Cancelar" }
      ).then(
        () => {
          this.$alert(
            "OK",
            "Sponsor removido!",
            "success"
          );
        },
        () => {
          this.$alert("Remoção cancelada!", "Informação", "info");
        }
      );
    }
  }
};
</script>
