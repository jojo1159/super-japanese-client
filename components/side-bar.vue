<template>
  <div id="sidebar-container" class="sidebar-expanded d-none d-md-block">
    <!-- d-* hiddens the Sidebar in smaller devices. Its itens can be kept on the Navbar 'Menu' -->
    <!-- Bootstrap List Group -->
    <ul class="list-group">
      <!-- Separator with title -->
      <li
        class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed"
      >
        <small>MAIN MENU</small>
      </li>
      <!-- /END Separator -->
      <!-- Menu with submenu -->
      <a
        href="#submenu1"
        data-toggle="collapse"
        aria-expanded="false"
        class="bg-dark list-group-item list-group-item-action d-flex flex-column justify-content-center align-items-start"
      >
        <div class="d-flex w-100 justify-content-left align-items-center">
          <p class="h4 m-0 p-2 m-1">
            <b-icon icon="play-circle" class="sidebar-icon"></b-icon>
          </p>
          <span class="menu-collapsed">Courses</span>
        </div>
      </a>
      <!-- Submenu content -->
      <div id="submenu1" class="collapse sidebar-submenu">
        <a
          href="#"
          class="list-group-item list-group-item-action bg-dark text-white"
        >
          <span class="menu-collapsed">Charts</span>
        </a>
        <a
          href="#"
          class="list-group-item list-group-item-action bg-dark text-white"
        >
          <span class="menu-collapsed">Reports</span>
        </a>
        <a
          href="#"
          class="list-group-item list-group-item-action bg-dark text-white"
        >
          <span class="menu-collapsed">Tables</span>
        </a>
      </div>
      <a
        href="#submenu2"
        data-toggle="collapse"
        aria-expanded="false"
        class="bg-dark list-group-item list-group-item-action flex-column align-items-start"
      >
        <div class="d-flex w-100 justify-content-start align-items-center">
          <span class="fa fa-user fa-fw mr-3"></span>
          <span class="menu-collapsed">Profile</span>
          <span class="submenu-icon ml-auto"></span>
        </div>
      </a>
      <!-- Submenu content -->
      <div id="submenu2" class="collapse sidebar-submenu">
        <a
          href="#"
          class="list-group-item list-group-item-action bg-dark text-white"
        >
          <span class="menu-collapsed">Settings</span>
        </a>
        <a
          href="#"
          class="list-group-item list-group-item-action bg-dark text-white"
        >
          <span class="menu-collapsed">Password</span>
        </a>
      </div>
      <a href="#" class="bg-dark list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-start align-items-center">
          <span class="fa fa-tasks fa-fw mr-3"></span>
          <span class="menu-collapsed">Tasks</span>
        </div>
      </a>
      <!-- Separator with title -->
      <li
        class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed"
      >
        <small>OPTIONS</small>
      </li>
      <!-- /END Separator -->
      <a href="#" class="bg-dark list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-start align-items-center">
          <span class="fa fa-calendar fa-fw mr-3"></span>
          <span class="menu-collapsed">Calendar</span>
        </div>
      </a>
      <a href="#" class="bg-dark list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-start align-items-center">
          <span class="fa fa-envelope-o fa-fw mr-3"></span>
          <span class="menu-collapsed"
            >Messages
            <span class="badge badge-pill badge-primary ml-2">5</span></span
          >
        </div>
      </a>
      <!-- Separator without title -->
      <li class="list-group-item sidebar-separator menu-collapsed"></li>
      <!-- /END Separator -->
      <a href="#" class="bg-dark list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-start align-items-center">
          <span class="fa fa-question fa-fw mr-3"></span>
          <span class="menu-collapsed">Help</span>
        </div>
      </a>
      <a
        href="#"
        data-toggle="sidebar-colapse"
        class="bg-dark list-group-item list-group-item-action d-flex align-items-center"
      >
        <div class="d-flex w-100 justify-content-start align-items-center">
          <span id="collapse-icon" class="fa fa-2x mr-3"></span>
          <span id="collapse-text" class="menu-collapsed">Collapse</span>
        </div>
      </a>
      <!-- Logo -->
      <li class="list-group-item logo-separator d-flex justify-content-center">
        <img
          src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
        />
      </li>
    </ul>
    <!-- List Group END-->
  </div>
  <!-- sidebar-container END -->

  <!-- container -->
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#sidebar-container {
  min-height: 100vh;
  background-color: #ffff;
  padding: 0;
  /* flex: unset; */
}

.sidebar-expanded {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  width: 250px;
}

.sidebar-collapsed {
  /*width: 60px;*/
  width: 100px;
}

/* ----------| Menu item*/
#sidebar-container .list-group a {
  height: 56px;
  color: #808191;
  font-weight: bold;
  font-size: 14px;
}

/* ----------| Submenu item*/
#sidebar-container .list-group li.list-group-item {
  background-color: #ffff;
  border: 0px;
}

.list-group-item {
  border: 0px;
}

#sidebar-container .list-group .sidebar-submenu a {
  height: 45px;
  padding-left: 30px;
  border: 0px;
}

.sidebar-submenu {
  font-size: 0.9rem;
}

/* ----------| Separators */
.sidebar-separator-title {
  background-color: #ffff;
  height: 35px;
}

.sidebar-separator {
  background-color: #ffff;
  height: 25px;
}

.logo-separator {
  background-color: #ffff;
  height: 60px;
}

a.bg-dark {
  background-color: #ffff !important;
}
</style>
