import React from "react"
import './projects.css'
import Project from './project/project'
import bluebonnetRecords from '../../../assets/projects/bluebonnetrecords.png'
import taxpayerSignin from '../../../assets/projects/arbq_signin.png'
import promiseNeighborhoods from '../../../assets/projects/promise_neighborhoods.png'
import redRiverHerbs from '../../../assets/projects/redriverherbs.jpg'
import lilNonnas from '../../../assets/projects/lilnonnas.png'
import mollywoodStudio from '../../../assets/projects/mollywoodstudio.png'
import rareDarey from '../../../assets/projects/raredarey.png'
import { stringLiteral } from "@babel/types"

function Projects() {
  /**
   * Supercedes propagation of parent events
   * Used to ensure that onClick event of the element this is applied to
   * supercedes onClick event of >parent elements 
   * @function
   * @param {object} event 
   */
  function supercedeOtherOnclickHandlers(event) {
    event.stopPropagation()
  }

  /**
   * Adds double-forward slashes to url
   * to ensure that url is treated as such rather than
   * as a child to parent context url
   * @function
   * @param {string} url 
   * @returns {string} url
   */
  function doubleEscapeURLString(url) {
    return url.includes('//') ? url : `//${url}`
  }

  /**
   * Returns an a element from a title string and url 
   * @param {string} title 
   * @param {string} url 
   * @returns {jsx} a element
   */
  const titleAsLink = function (title, url) {
    return <a
      href={doubleEscapeURLString(url)}
      target='_blank'
      onClick={supercedeOtherOnclickHandlers}
    >{title}</a>
  }

  /**
   * List of project data
   * of apps and sites dave has made
   * @object
   */
  const data = [
    {
      name: titleAsLink('Red River Herbs', 'redriverherbs.com'),
      builtWith: 'Gatsby and Contentful (JAM Stack)',
      description: 'Commercial website for Red River Herbs',
      image: redRiverHerbs,
    },
    {
      name: titleAsLink('Lil Nonna\'s', 'lilnonnas.com'),
      builtWith: 'HTML, CSS, and JavaScript. Uses Google Sheets as a minimal CMS.',
      description: 'Commercial website for Lil Nonna\'s Pizza in Austin, TX',
      image: lilNonnas,
    },
    {
      name: 'TCAD ARB Apps',
      builtWith: 'Vue, Vuex, Node, Docker, SQL Server and Redis.',
      description: 'Suite of applications facilitating customer sign in and management, similar to what they use at the DMV.',
      image: taxpayerSignin,
    },
    {
      name: titleAsLink('Bluebonnet Records', 'bluebonnet-records.com'),
      builtWith: 'Webpack, HTML, CSS, and JavaScript.',
      description: 'Commercial website for Bluebonnet Records in Lockhart, TX',
      image: bluebonnetRecords,
    },
    {
      name: titleAsLink('Mollywood Studio', 'mollywoodstudio.com'),
      builtWith: 'HTML, CSS, and JavaScript.',
      description: 'Commercial website for Mollywood Studio photography in Los Angeles, CA',
      image: mollywoodStudio,
    },
    {
      name: titleAsLink('Promise Neighborhoods', 'davethompsonisme.com/promiseneighborhoods'),
      builtWith: 'HTML, CSS, Javascript, Leaflet, Waypoints, and QGIS.',
      description: 'Former profile for the U.S. Department of Education\'s Promise Neighborhoods Initiative',
      image: promiseNeighborhoods,
    },
    {
      name: titleAsLink('Rare Darey', 'raredarey.com'),
      builtWith: 'React. Site in progress!',
      description: 'Commercial website for Rare Darey, dairy-free cheese maker',
      image: rareDarey,
    }
  ]
  const projects = data.map(d => {
    return (
      <Project data={d} />
    )
  })

  return (
    <article id='projects'>
      {projects}
    </article>
  )
}

export default Projects