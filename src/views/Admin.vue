<template>
  <section class="page-section">
    <b-container fluid>
      <HeaderPage title="Gestão do Animalec"/>

      <b-row>
        <b-col cols="4"></b-col>
        <b-col cols="4">
          <b-card-group deck>
            <AdminOptionBox routeName="admin" iconName="users" title="Utilizadores"/>
            <AdminOptionBox routeName="admin" iconName="dog"  title="Animais"/>
          </b-card-group>
          <b-card-group deck class="mt-3">
            <AdminOptionBox routeName="admin" iconName="file-alt"  title="Quizzes"/>
            <AdminOptionBox routeName="admin" iconName="question-circle"  title="Questões"/>
          </b-card-group>
          <b-card-group deck class="mt-3">
            <AdminOptionBox routeName="listSponsors" iconName="thumbs-up"  title="Sponsors"/>
            <AdminOptionBox routeName="listExperts" iconName="user-graduate"  title="Experts"/>
          </b-card-group>
        </b-col>
        <b-col cols="4"></b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import HeaderPage from "@/components/HeaderPage.vue";
import AdminOptionBox from "@/components/AdminOptionBox.vue";

export default {
  components: {
    HeaderPage,
    AdminOptionBox
  }
};
</script>