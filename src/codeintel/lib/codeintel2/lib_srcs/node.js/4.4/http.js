/**
 * To use the HTTP server and client one must require(&#39;http&#39;).
 */
var http = {};

/**
 * Since most requests are GET requests without bodies, Node.js provides
 * this convenience method. The only difference between this method and
 * [http.request()][] is that it sets the method to GET and calls req.end()
 * automatically.
 * @param options
 * @param callback
 * @returns {http.ClientRequest}
 */
http.get = function(options, callback) {}

/**
 * Node.js maintains several connections per server to make HTTP requests.
 * @param options
 * @param callback
 * @returns {http.ClientRequest}
 */
http.request = function(options, callback) {}

/**
 * The HTTP Agent is used for pooling sockets used in HTTP client requests.
 * @constructor
 */
http.Agent = function() {}

/**
 * An object which contains arrays of sockets currently in use by the
 * Agent. Do not modify.
 */
http.Agent.prototype.sockets = 0;

/**
 * By default set to Infinity. Determines how many concurrent sockets the
 * agent can have open per origin. Origin is either a &#39;host:port&#39;
 * or &#39;host:port:localAddress&#39; combination.
 */
http.Agent.prototype.maxSockets = 0;

/**
 * Destroy any sockets that are currently in use by the agent.
 */
http.Agent.prototype.destroy = function() {}

/**
 * An object which contains arrays of sockets currently awaiting use by the
 * Agent when HTTP KeepAlive is used. Do not modify.
 */
http.Agent.prototype.freeSockets = 0;

/**
 * Get a unique name for a set of request options, to determine whether a
 * connection can be reused. In the http agent, this returns
 * host:port:localAddress. In the https agent, the name includes the CA,
 * cert, ciphers, and other HTTPS/TLS-specific options that determine
 * socket reusability.
 * @param options
 */
http.Agent.prototype.getName = function(options) {}

/**
 * By default set to 256. For Agents supporting HTTP KeepAlive, this sets
 * the maximum number of sockets that will be left open in the free state.
 */
http.Agent.prototype.maxFreeSockets = 0;

/**
 * An object which contains queues of requests that have not yet been
 * assigned to sockets. Do not modify.
 */
http.Agent.prototype.requests = 0;

/**
 * events:
 * @constructor
 */
http.Server = function() {}
http.Server.prototype = new events.EventEmitter();

/**
 * Stops the server from accepting new connections. See
 * [net.Server.close()][].
 * @param callback
 */
http.Server.prototype.close = function(callback) {}

/**
 * The handle object can be set to either a server or socket (anything with
 * an underlying _handle member), or a {fd: &lt;n&gt;} object.
 * @param handle {Object}
 * @param callback {Function}
 */
http.Server.prototype.listen = function(handle, callback) {}

/**
 * Start a UNIX socket server listening for connections on the given path.
 * @param path
 * @param callback
 */
http.Server.prototype.listen = function(path, callback) {}

/**
 * Begin accepting connections on the specified port and hostname. If the
 * hostname is omitted, the server will accept connections on any IPv6
 * address (::) when IPv6 is available, or any IPv4 address (0.0.0.0)
 * otherwise. A port value of zero will assign a random port.
 * @param port
 * @param hostname
 * @param backlog
 * @param callback
 */
http.Server.prototype.listen = function(port, hostname, backlog, callback) {}

/**
 * Limits maximum incoming headers count, equal to 1000 by default. If set
 * to 0 - no limit will be applied.
 */
http.Server.prototype.maxHeadersCount = 0;

/**
 * Sets the timeout value for sockets, and emits a &#39;timeout&#39; event
 * on the Server object, passing the socket as an argument, if a timeout
 * occurs.
 * @param msecs {Number}
 * @param callback {Function}
 */
http.Server.prototype.setTimeout = function(msecs, callback) {}

/**
 * The number of milliseconds of inactivity before a socket is presumed to
 * have timed out.
 */
http.Server.prototype.timeout = 0;

/** @__local__ */ http.Server.__events__ = {};

/**
 * Emitted each time a request with an http Expect: 100-continue is
 * received. If this event isn&#39;t listened for, the server will
 * automatically respond with a 100 Continue as appropriate. Handling this
 * event involves calling [response.writeContinue()][] if the client should
 * continue to send the request body, or generating an appropriate HTTP
 * response (e.g., 400 Bad Request) if the client should not continue to
 * send the request body. Note that when this event is emitted and handled,
 * the &#39;request&#39; event will not be emitted.
 * @param request {http.ServerRequest}
 * @param response {http.ServerResponse}
 */
http.Server.__events__.checkContinue = function(request, response) {};

/**
 * If a client connection emits an &#39;error&#39; event, it will be
 * forwarded here. socket is the [net.Socket][] object that the error
 * originated from.
 * @param exception {Error}
 */
http.Server.__events__.clientError = function(exception) {};

/**
 * Emitted when the server closes.
 */
http.Server.__events__.close = function() {};

/**
 * Emitted each time a client requests a http CONNECT method. If this event
 * isn&#39;t listened for, then clients requesting a CONNECT method will
 * have their connections closed. request is the arguments for the http
 * request, as it is in the request event. socket is the network socket
 * between the server and client. head is an instance of Buffer, the first
 * packet of the tunneling stream, this may be empty. After this event is
 * emitted, the request&#39;s socket will not have a &#39;data&#39; event
 * listener, meaning you will need to bind to it in order to handle data
 * sent to the server on that socket.
 * @param request
 * @param socket
 * @param head
 */
http.Server.__events__.connect = function(request, socket, head) {};

/**
 * When a new TCP stream is established. socket is an object of type
 * [net.Socket][]. Usually users will not want to access this event. In
 * particular, the socket will not emit &#39;readable&#39; events because
 * of how the protocol parser attaches to the socket. The socket can also
 * be accessed at request.connection.
 * @param socket {net.Socket}
 */
http.Server.__events__.connection = function(socket) {};

/**
 * Emitted each time there is a request. Note that there may be multiple
 * requests per connection (in the case of keep-alive connections).
 * request is an instance of [http.IncomingMessage][] and response is an
 * instance of [http.ServerResponse][].
 * @param request {http.ServerRequest}
 * @param response {http.ServerResponse}
 */
http.Server.__events__.request = function(request, response) {};

/**
 * Emitted each time a client requests a http upgrade. If this event
 * isn&#39;t listened for, then clients requesting an upgrade will have
 * their connections closed. request is the arguments for the http request,
 * as it is in the request event. socket is the network socket between the
 * server and client. head is an instance of Buffer, the first packet of
 * the upgraded stream, this may be empty. After this event is emitted, the
 * request&#39;s socket will not have a &#39;data&#39; event listener,
 * meaning you will need to bind to it in order to handle data sent to the
 * server on that socket.
 * @param request {http.ServerRequest}
 * @param socket {net.Socket}
 * @param head {buffer.Buffer}
 */
http.Server.__events__.upgrade = function(request, socket, head) {};

/**
 * Returns a new instance of [http.Server][].
 * @param requestListener {http.Server.__events__.request}
 * @returns {http.Server}
 */
http.createServer = function(requestListener) {}

/**
 * This object is created internally by a HTTP server--not by the user. It
 * is passed as the second parameter to the &#39;request&#39; event.
 * @constructor
 */
http.ServerResponse = function() {}
http.ServerResponse.prototype = new stream.WritableStream();

/**
 * Removes a header that&#39;s queued for implicit sending.
 * @param name
 */
http.ServerResponse.prototype.removeHeader = function(name) {}

/**
 * This method signals to the server that all of the response headers and
 * body have been sent; that server should consider this message complete.
 * @param data
 * @param encoding
 * @param callback
 */
http.ServerResponse.prototype.end = function(data, encoding, callback) {}

/**
 * Reads out a header that&#39;s already been queued but not sent to the
 * client. Note that the name is case insensitive. This can only be called
 * before headers get implicitly flushed.
 * @param name
 */
http.ServerResponse.prototype.getHeader = function(name) {}

/**
 * Sends a response header to the request. The status code is a 3-digit
 * HTTP status code, like 404. The last argument, headers, are the response
 * headers.
 * @param statusCode
 * @param statusMessage
 * @param headers
 */
http.ServerResponse.prototype.writeHead = function(statusCode, statusMessage, headers) {}

/**
 * If this method is called and [response.writeHead()][] has not been
 * called, it will switch to implicit header mode and flush the implicit
 * headers.
 * @param chunk
 * @param encoding
 * @param callback
 */
http.ServerResponse.prototype.write = function(chunk, encoding, callback) {}

/**
 * Sends a HTTP/1.1 100 Continue message to the client, indicating that the
 * request body should be sent. See the [&#39;checkContinue&#39;][] event
 * on Server.
 */
http.ServerResponse.prototype.writeContinue = function() {}

/**
 * This method adds HTTP trailing headers (a header but at the end of the
 * message) to the response.
 * @param headers
 */
http.ServerResponse.prototype.addTrailers = function(headers) {}

/**
 * Sets a single header value for implicit headers. If this header already
 * exists in the to-be-sent headers, its value will be replaced. Use an
 * array of strings here if you need to send multiple headers with the same
 * name.
 * @param name
 * @param value
 */
http.ServerResponse.prototype.setHeader = function(name, value) {}

/**
 * When using implicit headers (not calling [response.writeHead()][]
 * explicitly), this property controls the status code that will be sent to
 * the client when the headers get flushed.
 */
http.ServerResponse.prototype.statusCode = 0;

/**
 * Boolean value that indicates whether the response has completed. Starts
 * as false. After [response.end()][] executes, the value will be true.
 */
http.ServerResponse.prototype.finished = 0;

/**
 * Boolean (read-only). True if headers were sent, false otherwise.
 */
http.ServerResponse.prototype.headersSent = 0;

/**
 * When true, the Date header will be automatically generated and sent in
 * the response if it is not already present in the headers. Defaults to
 * true.
 */
http.ServerResponse.prototype.sendDate = 0;

/**
 * Sets the Socket&#39;s timeout value to msecs. If a callback is provided,
 * then it is added as a listener on the &#39;timeout&#39; event on the
 * response object.
 * @param msecs {Number}
 * @param callback {Function}
 */
http.ServerResponse.prototype.setTimeout = function(msecs, callback) {}

/**
 * When using implicit headers (not calling [response.writeHead()][]
 * explicitly), this property controls the status message that will be sent
 * to the client when the headers get flushed. If this is left as undefined
 * then the standard message for the status code will be used.
 */
http.ServerResponse.prototype.statusMessage = 0;

/** @__local__ */ http.ServerResponse.__events__ = {};

/**
 * Indicates that the underlying connection was terminated before
 * [response.end()][] was called or able to flush.
 */
http.ServerResponse.__events__.close = function() {};

/**
 * Emitted when the response has been sent. More specifically, this event
 * is emitted when the last segment of the response headers and body have
 * been handed off to the operating system for transmission over the
 * network. It does not imply that the client has received anything yet.
 * After this event, no more events will be emitted on the response object.
 */
http.ServerResponse.__events__.finish = function() {};

/**
 * This object is created internally and returned from [http.request()][].
 * It represents an in-progress request whose header has already been
 * queued. The header is still mutable using the setHeader(name, value),
 * getHeader(name), removeHeader(name) API. The actual header will be sent
 * along with the first data chunk or when closing the connection.
 * @constructor
 */
http.ClientRequest = function() {}
http.ClientRequest.prototype = new stream.WritableStream();

/**
 * Sends a chunk of the body. By calling this method many times, the user
 * can stream a request body to a server--in that case it is suggested to
 * use the [&#39;Transfer-Encoding&#39;, &#39;chunked&#39;] header line
 * when creating the request.
 * @param chunk
 * @param encoding
 * @param callback
 */
http.ClientRequest.prototype.write = function(chunk, encoding, callback) {}

/**
 * Marks the request as aborting. Calling this will cause remaining data in
 * the response to be dropped and the socket to be destroyed.
 */
http.ClientRequest.prototype.abort = function() {}

/**
 * Finishes sending the request. If any parts of the body are unsent, it
 * will flush them to the stream. If the request is chunked, this will send
 * the terminating &#39;0\r\n\r\n&#39;.
 * @param data
 * @param encoding
 * @param callback
 */
http.ClientRequest.prototype.end = function(data, encoding, callback) {}

/**
 * Flush the request headers.
 */
http.ClientRequest.prototype.flushHeaders = function() {}

/**
 * Once a socket is assigned to this request and is connected
 * [socket.setNoDelay()][] will be called.
 * @param noDelay
 */
http.ClientRequest.prototype.setNoDelay = function(noDelay) {}

/**
 * Once a socket is assigned to this request and is connected
 * [socket.setKeepAlive()][] will be called.
 * @param enable
 * @param initialDelay
 */
http.ClientRequest.prototype.setSocketKeepAlive = function(enable, initialDelay) {}

/**
 * Once a socket is assigned to this request and is connected
 * [socket.setTimeout()][] will be called.
 * @param timeout
 * @param callback
 */
http.ClientRequest.prototype.setTimeout = function(timeout, callback) {}

/** @__local__ */ http.ClientRequest.__events__ = {};

/**
 * Emitted when the request has been aborted by the client. This event is
 * only emitted on the first call to abort().
 */
http.ClientRequest.__events__.abort = function() {};

/**
 * Emitted each time a server responds to a request with a CONNECT method.
 * If this event isn&#39;t being listened for, clients receiving a CONNECT
 * method will have their connections closed. A client server pair that
 * show you how to listen for the &#39;connect&#39; event.
 * @param response
 * @param socket
 * @param head
 */
http.ClientRequest.__events__.connect = function(response, socket, head) {};

/**
 * Emitted when the server sends a &#39;100 Continue&#39; HTTP response,
 * usually because the request contained &#39;Expect: 100-continue&#39;.
 * This is an instruction that the client should send the request body.
 */
http.ClientRequest.__events__.continue = function() {};

/**
 * Emitted when a response is received to this request. This event is
 * emitted only once. The response argument will be an instance of
 * [http.IncomingMessage][]. Options: host: A domain name or IP address of
 * the server to issue the request to. port: Port of remote server.
 * socketPath: Unix Domain Socket (use one of host:port or socketPath)
 * @param response {http.ClientResponse}
 */
http.ClientRequest.__events__.response = function(response) {};

/**
 * Emitted after a socket is assigned to this request.
 * @param socket {net.Socket}
 */
http.ClientRequest.__events__.socket = function(socket) {};

/**
 * Emitted each time a server responds to a request with an upgrade. If
 * this event isn&#39;t being listened for, clients receiving an upgrade
 * header will have their connections closed. A client server pair that
 * show you how to listen for the &#39;upgrade&#39; event.
 * @param response {http.ClientResponse}
 * @param socket {net.Socket}
 * @param head {buffer.Buffer}
 */
http.ClientRequest.__events__.upgrade = function(response, socket, head) {};

/**
 * A list of the HTTP methods that are supported by the parser.
 */
http.METHODS = 0;

/**
 * A collection of all the standard HTTP response status codes, and the
 * short description of each. For example, http.STATUS_CODES[404] ===
 * &#39;Not Found&#39;.
 */
http.STATUS_CODES = 0;

/**
 * Constructs a new HTTP client. port and host refer to the server to be
 * connected to.
 * @param port
 * @param host
 */
http.createClient = function(port, host) {}

/**
 * Global instance of Agent which is used as the default for all http
 * client requests.
 * @type {http.Agent}
 */
http.globalAgent = 0;

/**
 * An IncomingMessage object is created by [http.Server][] or
 * [http.ClientRequest][] and passed as the first argument to the
 * &#39;request&#39; and &#39;response&#39; event respectively. It may be
 * used to access response status, headers and data.
 * @constructor
 */
http.IncomingMessage = function() {}

/**
 * Calls message.connection.setTimeout(msecs, callback).
 * @param msecs {Number}
 * @param callback {Function}
 */
http.IncomingMessage.prototype.setTimeout = function(msecs, callback) {}

/**
 * The request/response headers object.
 */
http.IncomingMessage.prototype.headers = 0;

/**
 * In case of server request, the HTTP version sent by the client. In the
 * case of client response, the HTTP version of the connected-to server.
 */
http.IncomingMessage.prototype.httpVersion = 0;

/**
 * Only valid for request obtained from [http.Server][].
 */
http.IncomingMessage.prototype.method = 0;

/**
 * The raw request/response headers list exactly as they were received.
 */
http.IncomingMessage.prototype.rawHeaders = 0;

/**
 * The raw request/response trailer keys and values exactly as they were
 * received. Only populated at the &#39;end&#39; event.
 */
http.IncomingMessage.prototype.rawTrailers = 0;

/**
 * Only valid for response obtained from [http.ClientRequest][].
 */
http.IncomingMessage.prototype.statusCode = 0;

/**
 * Only valid for response obtained from [http.ClientRequest][].
 */
http.IncomingMessage.prototype.statusMessage = 0;

/**
 * The [net.Socket][] object associated with the connection.
 * @type {[net.Socket][]}
 */
http.IncomingMessage.prototype.socket = 0;

/**
 * The request/response trailers object. Only populated at the
 * &#39;end&#39; event.
 */
http.IncomingMessage.prototype.trailers = 0;

/**
 * Only valid for request obtained from [http.Server][].
 */
http.IncomingMessage.prototype.url = 0;

/** @__local__ */ http.IncomingMessage.__events__ = {};

/**
 * Indicates that the underlying connection was closed. Just like
 * &#39;end&#39;, this event occurs only once per response.
 */
http.IncomingMessage.__events__.close = function() {};

var events = require('events');
var stream = require('stream');
var buffer = require('buffer');

exports = http;

