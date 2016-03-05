import 'angular-material/angular-material.min.css'
import 'angular-ui-router-anim-in-out/css/anim-in-out.css';
import 'github-markdown-css/github-markdown.css';
import './app.styl';

import 'lodash';

import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-messages';
import 'angular-validation-match';
import 'restangular';
import 'angular-cookie';
import 'angularfire';
import 'angular-ui-router-anim-in-out';
import 'angular-elastic';
import 'angular-marked';

// config
import routing from './app.config';
import run from './app.run';

// components
import login from './components/login';
import chat from './components/chat';
import channel from './components/channel';

// directives
import pressEnter from './directives/pressEnter.directive';

// services
import firebase from './services/firebase.service';

//models
import userModel from './models/user.model';
import authModel from './models/auth.model';
import channelModel from './models/channel.model';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  'ngAnimate',
  'ngResource',
  'ngMessages',
  'ngAria',
  'ngMaterial',
  'restangular',
  'ipCookie',
  'ui.router',
  'validation.match',
  'firebase',
  'anim-in-out',
  'monospaced.elastic',
  'hc.marked',
  login,
  chat,
  channel,
  pressEnter,
  firebase,
  userModel,
  authModel,
  channelModel,
]).config(routing).run(run);

export default MODULE_NAME;
