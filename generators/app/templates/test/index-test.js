/* globals describe, it */
/* eslint no-unused-expressions:0 */

import sinon from 'sinon'
import chai from 'chai'
import sinonChai from 'sinon-chai'
import <%= props.camelAppName %> from '../src'

chai.use(sinonChai)

const expect = chai.expect

describe('<%= props.camelAppName %>', () => {
  it('should have a sane default', () => {
    expect(<%= props.camelAppName %>()).to.eql('Hello, World!')
  })

  it('should properly greet someone', () => {
    expect(<%= props.camelAppName %>('Foo')).to.eql('Hello, Foo!')
  })
})
