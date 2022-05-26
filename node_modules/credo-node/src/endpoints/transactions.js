'use strict'

module.exports = {
  /*
    Trasactions
    @param: transRef(required)
  */
  verifyTransaction: {
    method: 'GET',
    path: `/transactions​/{transRef}​/verify`,
    send_json: false,
    params: null,
    route_params: { transRef: String }
  }
}