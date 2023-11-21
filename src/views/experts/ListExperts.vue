<template>
  <section class="page-section">
    <b-container>
     <HeaderPage title="Gestão de Experts"/>      
      <!--MENU TOPO-->
      <b-row class="mb-4">
        <b-col cols="1"></b-col>
        <b-col>
          <router-link
            to="experts/add"
            tag="button"
            class="btn btn-outline-success mr-2 mt-2"
          ><i class="fas fa-plus-square"></i> ADICIONAR EXPERT</router-link>
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
                <th scope="col">ESPÉCIE</th>
                <th scope="col">DATA DE CRIAÇÃO</th>
                <th scope="col">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              <tr>                
                <td class="pt-4">Clark Kent</td>
                <td class="pt-4">Mamíferos</td>
                <td class="pt-4">2023-11-20 12:00:00</td>
                <td>
                  <router-link to="experts/edit" tag="button" class="btn btn-outline-success mr-2"><i class="fas fa-edit"></i> EDITAR</router-link>
                  <button @click="viewUser()" type="button" class="btn btn-outline-success mr-2"><i class="fas fa-search"></i> VER</button>
                  <button @click="removeUser()" type="button" class="btn btn-outline-danger mr-2 "><i class="fas fa-trash-alt"></i> REMOVER</button>
                </td>
              </tr>
              <tr>                
                <td class="pt-4">Bruce Wayne</td>
                <td class="pt-4">Peixes</td>
                <td class="pt-4">2023-11-20 12:00:00</td>
                <td>
                  <router-link to="experts/edit" tag="button" class="btn btn-outline-success mr-2"><i class="fas fa-edit"></i> EDITAR</router-link>
                  <button @click="viewUser()" type="button" class="btn btn-outline-success mr-2"><i class="fas fa-search"></i> VER</button>
                  <button @click="removeUser()" type="button" class="btn btn-outline-danger mr-2 "><i class="fas fa-trash-alt"></i> REMOVER</button>
                </td>
              </tr>
              <tr>                
                <td class="pt-4">Tony Stark</td>
                <td class="pt-4">Aves</td>
                <td class="pt-4">2023-11-20 12:00:00</td>
                <td>
                  <router-link to="experts/edit" tag="button" class="btn btn-outline-success mr-2"><i class="fas fa-edit"></i> EDITAR</router-link>
                  <button @click="viewUser()" type="button" class="btn btn-outline-success mr-2"><i class="fas fa-search"></i> VER</button>
                  <button @click="removeUser()" type="button" class="btn btn-outline-danger mr-2 "><i class="fas fa-trash-alt"></i> REMOVER</button>
                </td>
              </tr>
              <tr>                
                <td class="pt-4">Peter Parker</td>
                <td class="pt-4">Répteis</td>
                <td class="pt-4">2023-11-20 12:00:00</td>
                <td>
                  <router-link to="experts/edit" tag="button" class="btn btn-outline-success mr-2"><i class="fas fa-edit"></i> EDITAR</router-link>
                  <button @click="viewUser()" type="button" class="btn btn-outline-success mr-2"><i class="fas fa-search"></i> VER</button>
                  <button @click="removeUser()" type="button" class="btn btn-outline-danger mr-2 "><i class="fas fa-trash-alt"></i> REMOVER</button>
                </td>
              </tr>
              <tr>                
                <td class="pt-4">Barry Allen</td>
                <td class="pt-4">Anfíbios</td>
                <td class="pt-4">2023-11-20 12:00:00</td>
                <td>
                  <router-link to="experts/edit" tag="button" class="btn btn-outline-success mr-2"><i class="fas fa-edit"></i> EDITAR</router-link>
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
        title: "Expert",
        html: `<h5>Clark Kent</h5>
          <p>
          <b>Espécie:</b> Mamíferos <br>
          <b>Data de registo:</b> 2023-11-20 12:00:00 <br>
          </p>`,
        imageUrl: require(`@/assets/avatars/tigre.png`),
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "Tigre"
      });
    },
    removeUser() {
      this.$confirm(
        "Se sim, clique em OK",
        "Deseja mesmo remover o expert?",
        "warning",
        { confirmButtonText: "OK", cancelButtonText: "Cancelar" }
      ).then(
        () => {
          this.$alert(
            "OK",
            "Expert removido!",
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
