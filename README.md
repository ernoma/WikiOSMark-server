# WikiOSMark-server
Server for the WikiOSMark mobile application

Please, see [WikiOSMark repository](https://github.com/ernoma/WikiOSMark) for further information.

## Installing & running

The server is implemtented with Express.js, so installing and running follows the typical pattern for Node.js applications:

1. <code>git clone https://github.com/ernoma/WikiOSMark-server.git</code>
2. <code>npm install</code>
3. <code>npm start</code>

To use all functionality you will also need to [acquire Wikimedia OAuth token](https://www.mediawiki.org/wiki/Extension:OAuth).
When on the "OAuth consumer registration" page you should check "This consumer is for use only by your_username".
Later, if needed, you can apply for grant with more rights.

After acquiring the keys you should create environment variables for them. For example in your own Ubuntu server, you can add following
lines to the <code>.bashrc</code> file in your home directory:
<pre>
export WIKI_CONSUMER_SECRET=YOUR_CONSUMER_SECRET
export WIKI_TOKEN_SECRET=YOUR_TOKEN_SECRET
</pre>

If you are using Heroku, you should see https://devcenter.heroku.com/articles/config-vars for setting the environment variables.
