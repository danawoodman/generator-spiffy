/**
 * <%= props.description %>
 *
 * @module <%= props.camelAppName %>
 * @param {String} [name='World'] The name to say hello to
 * @returns {String} A friendly message
 */
export default function <%= props.camelAppName %>(name = 'World') {
  return `Hello, ${name}!`
}
