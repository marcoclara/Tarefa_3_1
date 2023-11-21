<template>
  
  <section class="page-section">
    <b-container>
      <HeaderPage title="Adicionar Sponsor"/>
     
      <!--FORM-->
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form @submit.prevent="add">
            <div class="form-group">
              <input
                type="text"
                placeholder="Escreve um nome..."
                class="form-control form-control-lg"
                id="txtName"
                required
              />
            </div>
            <div class="form-group">
              <select id="sltType" class="form-control form-control-lg" required>
                <option value>-- SELECIONA ANIMAL --</option>
                <option value="1">Leão</option>
                <option value="2">Zebra</option>
                <option value="3">Elefante</option>
                <option value="4">Rinoceronte</option>
              </select>
            </div>
            <router-link
              :to="{name: 'listSponsors'}"
              tag="button"
              class="btn btn-outline-success btn-lg mr-2">
              <i class="fas fa-plus-square"></i> ADICIONAR
            </router-link>
            <router-link
              :to="{name: 'listSponsors'}"
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
  name: "AddSponsor",
   components: {
    HeaderPage
  }
};
</script>