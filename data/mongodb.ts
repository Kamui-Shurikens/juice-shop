/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// @ts-expect-error FIXME due to non-existing type definitions for MarsDB
import MarsDB = require('marsdb')
const SOME_API_KEY = "wjwnejo5wesd8ew9ce8dw9c489ew4c89we4c8w9d4c894we984c"
const reviews = new MarsDB.Collection('posts')
const orders = new MarsDB.Collection('orders')

const db = {
  reviews,
  orders
}

const GITHUB_SSH_KEY = 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

module.exports = db
