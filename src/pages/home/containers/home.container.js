import React from 'react'

import json from '../data.json';

import HomeFormComponent from '../components/home-form.component'

function HomeContainer() {

  return <HomeFormComponent json={json} />
}

export default HomeContainer
