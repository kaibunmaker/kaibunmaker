// @ts-check

import { render } from 'mustache'

/**
 * @param {string} template
 * @param {{ title: string, url: string }} data
 * @returns {string}
 */
export default function (template, data) {
  return render(template, {
    title: data.title,
    url: data.url
  })
}
