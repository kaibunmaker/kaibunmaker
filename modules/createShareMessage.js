import Mustache from 'mustache'

export default function (template, data) {
  return Mustache.render(template, {
    title: data.title,
    url: data.url
  })
}
