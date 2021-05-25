<template>
  <div id="app">
    <div class="nav">
      <span></span>

      <div class="nav__routes">
        <router-link to="/theater/movies">Mes films</router-link>
        <router-link to="/theater/rooms">Mes salles</router-link>
        <router-link to="/theater/sessions">Mes séances</router-link>
        <router-link to="/theater/profile">Mon profil</router-link>
      </div>

      <div>Connexion</div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
//Global css classes (Reusable through all of the application)
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.nav {
  padding: 24px;
  display: flex;
  justify-content: space-between;
  background-color: #580015;
  color: #eaeaea;

  a {
    color: #eaeaea;
    text-decoration: none;
    padding-right: 36px;

    &.router-link-exact-active {
      font-weight: bold;
    }
  }
}

.link {
  text-decoration: none;
  color: #454545;
}

.add-icon {
  color: #580115;
  margin-right: 8px;
}

//Buttons classes
.info-btn {
  border: none;
  background-color: #580115;
  border-radius: 8px;
  color: #eaeaea;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  padding: 8px;
  cursor: pointer;
}

.edit-btn {
  color: #454545;
  margin-right: 16px;
}

.delete-btn {
  cursor: pointer;
  color: #580115;
}

//Forms classes
.form-field {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-label {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  color: #707070;
}

.form-input {
  width: 50%;
  height: 24px;
  border: none;
  border-radius: 8px;
  background-color: #eaeaea;
  color: #454545;
}

.form-add-btn {
  margin-top: 16px;
  border: none;
  background-color: #580115;
  border-radius: 8px;
  color: #eaeaea;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  padding: 8px;
  cursor: pointer;
}
</style>
