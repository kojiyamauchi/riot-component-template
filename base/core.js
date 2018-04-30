'use strict'

// Import Babel Polyfill for SEO.
import 'babel-polyfill'

// Import Riot.js
import riot from 'riot'

// Import Riot Control.
import RiotControl from 'riotcontrol'

// Import Srores.
import TodoStore from '../js/flux/stores'

// Import Components Tags.
import '@/tags/app.tag'
import '@/tags/components/template.tag'

// Created Stores Instance.
RiotControl.addStore(new TodoStore())

// Mounted Components.
riot.mount('*')
