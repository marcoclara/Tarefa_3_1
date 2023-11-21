<template>
  
  <section class="page-section">
    <b-container>
      <HeaderPage title="Editar Expert"/>
     
      <!--FORM-->
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form @submit.prevent="add">
            <div class="form-group">
              <input
                type="text"
                value="Clark Kent"
                class="form-control form-control-lg"
                id="txtName"
                required
              />
            </div>
            <div class="form-group">
              <select id="sltType" class="form-control form-control-lg" required>
                <option value>-- SELECIONA ESPÉCIE --</option>
                <option value="1" selected="true">Mamíferos</option>
                <option value="2">Peixes</option>
                <option value="3">Aves</option>
                <option value="4">Répteis</option>
                <option value="4">Anfíbios</option>
              </select>
            </div>
            <router-link
              :to="{name: 'listExperts'}"
              tag="button"
              class="btn btn-outline-success btn-lg mr-2">
              <i class="fas fa-plus-square"></i> GRAVAR
            </router-link>
            <router-link
              :to="{name: 'listExperts'}"
              tag="button"
              class="btn btn-outline-danger btn-lg">
            <i class="fas fa-window-close"></i> CANCELAR
            </router-link>
          </form>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue"

export default {
  name: "EditExpert",
   components: {
    HeaderPage
  }
};
</script>