# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

p.4 StimulusReflex & CableReady
development:
  adapter: redis
  url: <%= ENV.fetch("REDIS_URL") { "redis://localhost:6379/1" } %>
  channel_prefix: your_application_development

it's in the image below the text, which was helpful, but the bottom line should read:
  channel_prefix: quotesapp_development


"Finally, let’s open up our app>channels>application_cable>connection.rb file and make it read"

application_cable folder & the connection.rb file don't exist yet, so they have to be made