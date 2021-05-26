import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import TheaterMovies from '../views/Cinema/TheaterMovie/TheaterMovies.vue'
import AddTheaterMovie from '../views/Cinema/TheaterMovie/AddTheaterMovie.vue'
import Movies from '../views/Cinema/Movies.vue'
import AddMovie from '../views/Cinema/Movie/AddMovie.vue'
import MovieDetails from '../views/Cinema/Movie/MovieDetails.vue'
import Sessions from '../views/Cinema/Session/Sessions.vue';
import SessionAdd from '../views/Cinema/Session/SessionAdd.vue'
import Reservations from  '../views/Cinema/Reservation/Reservations.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: TheaterMovies
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/theater/movies',
    name: 'TheaterMovies',
    component: TheaterMovies
  },
  {
    path: '/theater/movie/add',
    name: 'AddTheaterMovie',
    component: AddTheaterMovie,
    props: true
  },
  {
    path: '/theater/movie/edit/:theaterMovieId',
    name: 'EditTheaterMovie',
    component: AddTheaterMovie,
    props: true
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/movie/add',
    name: 'AddMovie',
    component: AddMovie,
    props: true
  },
  {
    path: '/movie/:movieId',
    name: 'MovieDetails',
    component: MovieDetails,
    props: true
  },
  { path: '/theater/sessions', name: 'Sessions', component: Sessions },
  { path: '/theater/session/add', name: 'AddSession', component: SessionAdd, props: true },
  { path: '/theater/session/edit', name: 'EditSession', component: SessionAdd, props: true },
  { path: '/theater/sessions/reservations', name: 'Reservations', component: Reservations, props: true }
]

const router = new VueRouter({
  routes
})

export default router
