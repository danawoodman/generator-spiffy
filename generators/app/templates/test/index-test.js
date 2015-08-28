/* globals expect, describe, it */
/* eslint no-unused-expressions:0 */

import <%= props.camelAppName %> from '../src'

describe('<%= props.camelAppName %>', () => {
  it('should have a sane default', () => {
    expect(<%= props.camelAppName %>()).to.eql('Hello, World!')
  })

  it('should properly greet someone', () => {
    expect(<%= props.camelAppName %>('Foo')).to.eql('Hello, Foo!')
  })
})
