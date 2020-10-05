import Vue from 'vue'
import constants from './constants'
import axios from 'axios'

import state from '../store/config/state'

const getAuthHeaders = () => {
  const token = localStorage.getItem(constants.token)
  return {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
}

const login = async (identifier, password) => {
  const url = state.server + '/auth/local'
  const { data } = await axios.post(url, {
    identifier,
    password
  })
  return data
}

const register = async userData => {
  const url = state.server + '/auth/local/register'
  const { data } = await axios.post(url, userData)
  return data
}

const getPublicProfile = async id => {
  const url = state.server + '/profiles/' + id
  const { data } = await axios.get(url)
  return data
}

const getLiveEventProfiles = async (slug, profile) => {
  const url = state.server + `/profiles/live/${slug}`
  const { data } = await axios.get(url)
  if (profile) {
    return data.filter(d => d.id !== profile)
  }
  return data
}

const fetchIP = async () => {
  const url = `http://api.ipstack.com/check?access_key=${constants.IPSTACK_API}&format=1`
  const { data } = await axios.get(url)
  return data
}

const connectWithProvider = async (provider, parameter) => {
  const url = state.server + `/auth/${provider}/callback${parameter}`
  const { data } = await axios.get(url)
  return data
}

const updateUser = async body => {
  const url = state.server + '/user/update'
  const config = getAuthHeaders()
  const { data } = await axios.put(url, body, config)
  return data
}

const changePassword = async password => {
  const url = state.server + '/user/password'
  const config = getAuthHeaders()
  const body = { password }
  const { data } = await axios.put(url, body, config)
  return data
}

const getEvents = async (isLive = true) => {
  const url = state.server + `/events?isLive=${isLive}`
  const config = getAuthHeaders()
  const { data } = await axios.get(url, config)
  return data
}

export const api = {
  login,
  register,
  getPublicProfile,
  getLiveEventProfiles,
  fetchIP,
  connectWithProvider,
  updateUser,
  changePassword,
  getEvents
}

Vue.prototype.$api = api
