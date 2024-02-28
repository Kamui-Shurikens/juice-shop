/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

const API_KEY = "ATATT3xFfGF0Qq7GBp-dYEo_N3-a-5otWFjPAjBq6ns7tR9tl-jN1XsUMsscgffbYNxqB8V4tp1uKJgj1MjFiH5XSXRajv6XkJNM9pSMtrEdA9TVtmkG72qa7GkXH3rdNo7WLH5GmSJzgY8mC_cOYveHlk8dU19z4TzSQfnYsv4bRCwOFeYRQVw=A6CE07E4"

require('./lib/startup/validateDependencies')().then(() => {
  const server = require('./server')
  server.start()
})
